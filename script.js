// empty variable to give them global scope
let user_name = "";
let current_scenario = "";

// dynamically creates 16 item <div>'s to hold the clothing options. addition of event listener to the <div>'s so that when they are selected they are populated on the right hand side
function createItemDivs(itemType, appendTo,itemList){

    //for loop to create 4 <div>'s in a row - to hold 4 potential clothing items
    for (i = 1; i < 5; i++){

        //creates a div and assigns it a unique id made up of the itemType and the value of i - eg Headitem1
        let item_div  = document.createElement("div");
        item_div.setAttribute("id", itemType + i);
        item_div.setAttribute("class", "itemContainer")
        //assigns a data-scenario tag for assessment stage (i-1 as this loop starts at 1 and the index's on the item list will start from 0)
        item_div.setAttribute("data-scenario", itemList[i-1].condition)
        appendTo.appendChild(item_div);

        // creates an img of the clothing and appends to the div above
        let img = document.createElement("img");
        img.setAttribute("src", itemList[i-1].src);
        img.setAttribute("class", "itemImg");
        item_div.appendChild(img)

        //creates label for the images and appends them
        let para = document.createElement("p");
        para.innerText = itemList[i-1].item;
        para.setAttribute("class", "imgLabel")
        item_div.appendChild(para);

        //adds an event listener to the <div> to change the CSS of the selected <div>, clone the node and appended the clone to the right hand side of the page into the 'chosen' section
        item_div.addEventListener("click", function(){
        
            //uses the ID's assigned above to get the elements and put into a variable
            let itemType1 = document.getElementById(itemType + "1");
            let itemType2 = document.getElementById(itemType + "2");
            let itemType3 = document.getElementById(itemType + "3");
            let itemType4 = document.getElementById(itemType + "4");

            
            item_div.setAttribute("data-target", ("selected" + itemType));
        
            if (itemType1.classList.contains("selectedImg")){
            itemType1.classList.remove("selectedImg")
            itemType1.removeAttribute("data-target", ("selected" + itemType))
            }

            if (itemType2.classList.contains("selectedImg")){
            itemType2.classList.remove("selectedImg")
            itemType2.removeAttribute("data-target", ("selected" + itemType))
            }
            
            if (itemType3.classList.contains("selectedImg")){
            itemType3.classList.remove("selectedImg")
            itemType3.removeAttribute("data-target", ("selected" + itemType))
            }
            
            if (itemType4.classList.contains("selectedImg")){
            itemType4.classList.remove("selectedImg")
            itemType4.removeAttribute("data-target", ("selected" + itemType))
            }

            item_div.setAttribute("class", "itemContainer selectedImg");
            
            
            let selectedHeadItem = document.querySelector('[data-target="selectedheaditem"]');
            let selectedBodyItem = document.querySelector('[data-target="selectedbodyitem"]');
            let selectedHoldItem = document.querySelector('[data-target="selectedholditem"]');
            let selectedFootItem = document.querySelector('[data-target="selectedfootitem"]');

            if (chosen_Head_Cont.hasChildNodes() === true){
                while (chosen_Head_Cont.firstChild){
                    chosen_Head_Cont.removeChild(chosen_Head_Cont.firstChild)
                }
            }

            if (chosen_Body_Cont.hasChildNodes() === true){
                while (chosen_Body_Cont.firstChild){
                    chosen_Body_Cont.removeChild(chosen_Body_Cont.firstChild)
                }
            }

            if (chosen_Hold_Cont.hasChildNodes() === true){
                while (chosen_Hold_Cont.firstChild){
                    chosen_Hold_Cont.removeChild(chosen_Hold_Cont.firstChild)
                }
            }

            if (chosen_Foot_Cont.hasChildNodes() === true){
                while (chosen_Foot_Cont.firstChild){
                    chosen_Foot_Cont.removeChild(chosen_Foot_Cont.firstChild)
                }
            }

            let chosenHeadItem = selectedHeadItem.cloneNode(true);
            let chosenBodyItem = selectedBodyItem.cloneNode(true);
            let chosenHoldItem = selectedHoldItem.cloneNode(true);
            let chosenFootItem = selectedFootItem.cloneNode(true);

            chosen_Head_Cont.appendChild(chosenHeadItem);
            chosen_Body_Cont.appendChild(chosenBodyItem);
            chosen_Hold_Cont.appendChild(chosenHoldItem);
            chosen_Foot_Cont.appendChild(chosenFootItem);

            assess_Button_Cont.style.visibility = "visible"
        })
    }
}

// start button event listener
start_button.addEventListener("click", function(){

    // prompt to get user input of their name
    user_name = prompt("Please enter your name :) if you're not sure then leave it blank and I will call you, hmmmmmm . . . . Friend!");
    
    // if the do not enter anything default name is "friend"
    if (user_name === ""){
        user_name = "friend"
    };

    // enters the users input into the greeting paragraph
    name_input_here.innerText = user_name

    // hides the start button
    start_button.style.display = "none";

    // toggles the greeting to visible
    greeting_para.style.visibility = "visible";

    // creates yes no buttons and appends them to the button div
    const yes_get_ready = document.createElement("button");
    yes_get_ready.innerText = "yes";
    button_div_one.appendChild(yes_get_ready);

    const no_get_ready = document.createElement("button");
    no_get_ready.innerText = "no";
    button_div_one.appendChild(no_get_ready);

    // adds event listener to no button. if selected will end game
    no_get_ready.addEventListener("click", function(){

    // remove greeting para and buttons - no longer needed
    greeting_para.style.display = "none";
    button_div_one.style.display = "none"; 

    // response to the user pressing no
    response_para_one.innerText = "Awh! Ok nevermind. Maybe next time?";

})

    // adds event listener to yes button.
    yes_get_ready.addEventListener("click", function(){

    // removes the greeting paragraph and button as no longer needed
    greeting_para.style.display = "none";
    button_div_one.style.display = "none";
    
    // creates an img of an empty window and appends it to the div
    window_img = document.createElement("img");
    window_img.src = "../images/window-frame-2075509_1280.png";
    window_img.alt = "image of and empty window";
    window_img.id = "window_img";
    window_div.append(window_img);

    // inserts text into response para one. requests the user to click the window
    response_para_one.innerText = "Yay, thank you! Lets take a look outside. Can you click on the window please?";
})

})


window_div.addEventListener("click", function(){

    // generates a random number from 0 to 3
    let scenario_num = Math.floor(Math.random() * (scenarios.length));

    // uses the empty global variable of current scenario. Goes to the data.js file and uses the scenario information stored there, selects a random one using the scenario_num generated above. Now we can have a random scenario we can traverse to get the information associated with it.
    current_scenario = scenarios[scenario_num];

    // creates an img element and appends it behind the window.png to make it look like the weather of the current scenario.
    const condition_img = document.createElement("img");
    condition_img.src = current_scenario.src
    condition_img.alt = current_scenario.alt;
    condition_img.id = ("condition_img")
    window_div.append(condition_img);

    // The response in para one is not longer needed so it is set to an empty string
    response_para_one.innerText = ""
    
    //traverses the scenario object to find the reaction of the current scenario. Tell the user if it is raining, sunny, snowing, bedtime
    response_para_two.innerText = current_scenario.reaction

    //generates the <div>'s and content for the clothing items the user can choose from. 
    //first param - this is used to set the <div>'s ID for recall later
    //second param - where the <div>'s are going to be appended to
    //third param - which item list in data.js file to give the information for the content of the <div>'s
    createItemDivs("headitem", head_items, head_item_list);
    createItemDivs("bodyitem", body_items, body_item_list);
    createItemDivs("holditem", hold_items, hold_item_list);
    createItemDivs("footitem", foot_items, foot_item_list);

    //returns current_scenario for use in the assessment - has the user selected the correct items.
    return current_scenario;

    //argument that means the event will only fire once.
}, {once : true});

assess_Button.addEventListener("click", function(){
    console.log(current_scenario.condition)

    let selectedHeadItem = document.querySelector('[data-target="selectedheaditem"]');
    let selectedBodyItem = document.querySelector('[data-target="selectedbodyitem"]');
    let selectedHoldItem = document.querySelector('[data-target="selectedholditem"]');
    let selectedFootItem = document.querySelector('[data-target="selectedfootitem"]');

    let headScenario = selectedHeadItem.dataset.scenario;
    let bodyScenario = selectedBodyItem.dataset.scenario;
    let holdScenario = selectedHoldItem.dataset.scenario;
    let footScenario = selectedFootItem.dataset.scenario;

    console.log(headScenario)

    if (current_scenario.condition === bodyScenario && current_scenario.condition === headScenario && current_scenario.condition === holdScenario && current_scenario.condition === footScenario ){

        console.log("match" + current_scenario.matchResponse)

        response_para_three.innerText = current_scenario.matchResponse;

    }
    else{
        console.log("no match")
    
        response_para_three.innerText = "hmmm I don't think thats quite right";
    
    }

})