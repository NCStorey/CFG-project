const name_input_here = document.getElementById("name_input_here");
const yes_get_ready = document.getElementById("yes_get_ready");
const no_get_ready = document.getElementById("no_get_ready");
const response_one_div = document.getElementById("response_one_div");
const start_button = document.getElementById("start_button");
const greeting_para = document.getElementById("greeting_para");
const window_div = document.getElementById("window_div");

let scenarios = [
    {
    "condition" : "Raining",
    "src" : "../images/man-3581659_1280.jpg",
    "alt" : "raining",
    }, 
    {
    "condition" : "Sunny",
    "src" : "../images/background-2184_1280.jpg",
    "alt" : "sunny field",
    },
    {
    "condition" : "Bedtime",
    "src" : "../images/images/british-columbia-2382640_1280.jpg",
    "alt" : "stars across a dark sky",
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

    // hides the start button, shows greeting paragraph and yes/no buttons on prompt closure
    start_button.style.display = "none";
    greeting_para.style.visibility = "visible";
    button_div_one.style.visibility = "visible";

    
})


no_get_ready.addEventListener("click", function(){

    greeting_para.style.display = "none";

    const no_para = document.createElement("p");
    no_para.innerText = "Awh! Ok nevermind. Maybe next time?";
    response_one_div.appendChild(no_para);
    button_div_one.style.display = "none"

    
})


yes_get_ready.addEventListener("click", function(){

    greeting_para.style.display = "none";

    const yes_para = document.createElement("p");
    yes_para.innerText = "Yay, thank you! Lets take a look outside. Can you click on the window please?";
    yes_para.id = "yes_para"
    response_one_div.appendChild(yes_para);
    button_div_one.style.display = "none";

    const window_img = document.createElement("img");
    window_img.src = "../images/window-frame-2075509_1280.png";
    window_img.alt = "image of and empty window";
    window_img.id = "window_img"
    window_div.append(window_img);


})

const window_img = document.getElementById("window_img")

window_div.addEventListener("click", function(){

    // hiding the yes paragraph as no longer needed
    document.getElementById("yes_para").style.display = "none"
    
    // generates a random number to create a random scenario
    let scenario_num = Math.floor(Math.random() * (scenarios.length-1));
    let current_scenario = scenarios[scenario_num];

    console.log(current_scenario)

    const condition_img = document.createElement("img");
    condition_img.src = current_scenario.src
    condition_img.alt = current_scenario.alt;
    condition_img.id = ("condition_img")
    window_div.append(condition_img);

})




