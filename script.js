const name_input_here = document.getElementById("name_input_here");
const response_div_one = document.getElementById("response_div_one");
const start_button = document.getElementById("start_button");
const greeting_para = document.getElementById("greeting_para");
const window_div = document.getElementById("window_div");

let scenarios = [
    {
    "condition" : "Raining",
    "src" : "../images/man-3581659_1280.jpg",
    "alt" : "raining",
    "reaction" : "Wow! it looks really wet and rainy out there. I can't wait to go and splash in some puddles! what should we wear?"
    }, 
    {
    "condition" : "Sunny",
    "src" : "../images/background-2184_1280.jpg",
    "alt" : "sunny field",
    "reaction" : "it is so warm and sunny outside, I can't wait to go and explore! what should we wear?"
    },
    {
    "condition" : "Bedtime",
    "src" : "../images/british-columbia-2382640_1280.jpg",
    "alt" : "stars across a dark sky",
    "reaction" : "it is so dark outside, it must be bedtime. hmm now what will I need to wear?"
    }

];


let items = [];

let user_name = "";

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
    no_para = document.createElement("p");
    no_para.innerText = "Awh! Ok nevermind. Maybe next time?";
    response_div_one.appendChild(no_para);
    button_div_one.style.display = "none";    
})

    yes_get_ready.addEventListener("click", function(){

    greeting_para.style.display = "none";

    yes_para = document.createElement("p");
    yes_para.innerText = "Yay, thank you! Lets take a look outside. Can you click on the window please?";
    response_div_one.appendChild(yes_para);
    button_div_one.style.display = "none";

    window_img = document.createElement("img");
    window_img.src = "../images/window-frame-2075509_1280.png";
    window_img.alt = "image of and empty window";
    window_img.id = "window_img"
    window_div.append(window_img);
})

})


window_div.addEventListener("click", function(){

    // hiding the yes paragraph as no longer needed
    
    
    // generates a random number to create a random scenario
    let scenario_num = Math.floor(Math.random() * (scenarios.length));
    let current_scenario = scenarios[scenario_num];

    console.log(current_scenario)

    const condition_img = document.createElement("img");
    condition_img.src = current_scenario.src
    condition_img.alt = current_scenario.alt;
    condition_img.id = ("condition_img")
    window_div.append(condition_img);

    if (response_div_one.hasChildNodes()){
        response_div_one.removeChild(response_div_one.childNodes[0])
    }

}, {once : true});




