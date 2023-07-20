let user_name = "";

function createItemDivs(itemType, appendTo,itemList){

    for (i = 1; i < 5; i++){

        let item_div  = document.createElement("div");
        item_div.setAttribute("id", itemType + i);
        item_div.setAttribute("class", "itemContainer")
        appendTo.appendChild(item_div);

        let img = document.createElement("img");
        img.setAttribute("src", itemList[i-1].src);
        img.setAttribute("class", "itemImg");
        item_div.appendChild(img)

        let para = document.createElement("p");
        para.innerText = itemList[i-1].item;
        item_div.appendChild(para);
    }
}

// start button event listener
start_button.addEventListener("click", function(){

    // prompt to get user input
    user_name = prompt("Please enter your name :) if you're not sure then leave it blank and I will call you, hmmmmmm . . . . Friend!");
    
    // if the do not enter anything default name is "friend"
    if (user_name === ""){
        user_name = "friend"
    };

    // enters the users input into the greeting paragraph
    name_input_here.innerText = user_name

    // hides the start button
    start_button.style.display = "none";
    greeting_para.style.visibility = "visible";

    // creates yes no buttons
    const yes_get_ready = document.createElement("button");
    yes_get_ready.innerText = "yes";
    button_div_one.appendChild(yes_get_ready);

    const no_get_ready = document.createElement("button");
    no_get_ready.innerText = "no";
    button_div_one.appendChild(no_get_ready);

    // adds event listener to no button. if selected will end game
    no_get_ready.addEventListener("click", function(){

    greeting_para.style.display = "none";

    response_para_one.innerText = "Awh! Ok nevermind. Maybe next time?";
    button_div_one.style.display = "none";    
})

    // adds event listener to yes button.
    yes_get_ready.addEventListener("click", function(){

    greeting_para.style.display = "none";
    
    response_para_one.innerText = "Yay, thank you! Lets take a look outside. Can you click on the window please?";
    button_div_one.style.display = "none";

    // creates the empty window image
    window_img = document.createElement("img");
    window_img.src = "../images/window-frame-2075509_1280.png";
    window_img.alt = "image of and empty window";
    window_img.id = "window_img";
    window_div.append(window_img);
})

})


window_div.addEventListener("click", function(){

    // generates a random number to create a random scenario
    let scenario_num = Math.floor(Math.random() * (scenarios.length));
    let current_scenario = scenarios[scenario_num];

    console.log(current_scenario)

    const condition_img = document.createElement("img");
    condition_img.src = current_scenario.src
    condition_img.alt = current_scenario.alt;
    condition_img.id = ("condition_img")
    window_div.append(condition_img);

    response_para_one.innerText = ""
    
    response_para_two.innerText = current_scenario.reaction

    createItemDivs("headitem", head_items, head_item_list);
    createItemDivs("bodyitem", body_items, body_item_list);
    createItemDivs("holditem", hold_items, hold_item_list);
    createItemDivs("footitem", foot_items, foot_item_list);

}, {once : true});