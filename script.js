let scenarios = ["Raining", "Sunny", "Snowing", "Bedtime"];

let items = [];

const name_input_here = document.getElementById("name_input_here");
const yes_get_ready = document.getElementById("yes_get_ready");
const no_get_ready = document.getElementById("no_get_ready");
const response_one_div = document.getElementById("response_one_div");

let user_name = prompt("Please enter your name :) if you're not sure then leave it blank and I will call you, hmmmmmm . . . . Friend!")

if (user_name === ""){
    user_name = "friend"
}

name_input_here.innerText = user_name

console.log(user_name)

no_get_ready.addEventListener("click", function(){

    const no_para = document.createElement("p");
    no_para.innerText = "Awh! Ok nevermind. Maybe next time?";
    response_one_div.appendChild(no_para);
    button_div_one.style.display = "none"
})


yes_get_ready.addEventListener("click", function(){

    const yes_para = document.createElement("p");
    yes_para.innerText = "Yay, thank you! Let's look outside the window together";
    response_one_div.appendChild(yes_para);
    button_div_one.style.display = "none";

    const window_button = document.createElement("button");
    window_button.innerText = "Look outside the window";
    response_one_div.appendChild(window_button);

})






