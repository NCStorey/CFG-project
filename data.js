const name_input_here = document.getElementById("name_input_here");
const response_para_one = document.getElementById("response_para_one");
const start_button = document.getElementById("start_button");
const greeting_para = document.getElementById("greeting_para");
const window_div = document.getElementById("window_div");
const response_para_two = document.getElementById("response_para_two");
const head_items = document.getElementById("head_items");
const body_items = document.getElementById("body_items");
const hold_items = document.getElementById("hold_items");
const foot_items = document.getElementById("foot_items");

let scenarios = [
    {
    "condition" : "Raining",
    "src" : "../images/man-3581659_1280.jpg",
    "alt" : "raining",
    "reaction" : "Wow! it looks really wet and rainy out there. I can't wait to go and splash in some puddles! what will I need?",
    "head_item" : {"item" : "Rain Hat", "src" : "../images/rainhat.png"},
    "body_item" : {"item" : "Rain Coat", "src" : "../images/raincoat.png"},
    "hold_item" : {"item" : "Umbrella", "src" : "../images/umbrella.png"},
    "foot_item" : {"item" : "Wellington Boots", "src" : "../images/wellington.png"},
    }, 
    {
    "condition" : "Sunny",
    "src" : "../images/background-2184_1280.jpg",
    "alt" : "sunny field",
    "reaction" : "it is so warm and sunny outside, I can't wait to go and explore! what will I need?",
    "head_item" : {"item" : "Sun Hat", "src" : "../images/rainhat.png"},
    "body_item" : {"item" : "T-shirt", "src" : "../images/raincoat.png"},
    "hold_item" : {"item" : "Sun Cream", "src" : "../images/umbrella.png"},
    "foot_item" : {"item" : "Sandals", "src" : "../images/wellington.png"},
    },
    {
    "condition" : "Bedtime",
    "src" : "../images/british-columbia-2382640_1280.jpg",
    "alt" : "stars across a dark sky",
    "reaction" : "it is so dark outside, it must be bedtime. hmm now what will I need?",
    "head_item" : {"item" : "Night Cap", "src" : "../images/rainhat.png"},
    "body_item" : {"item" : "Pajamas", "src" : "../images/raincoat.png"},
    "hold_item" : {"item" : "Teddy", "src" : "../images/umbrella.png"},
    "foot_item" : {"item" : "Slippers", "src" : "../images/wellington.png"},
    },
    {
    "condition" : "Snowing",
    "src" : "../images/winter-landscape-2571788_1280.jpg",
    "alt" : "a winters day",
    "reaction" : "Brrrrr it looks cold outside! I love making snow angels and sledging down hills. What will I need?",
    "head_item" : {"item" : "Bobble hat", "src" : "../images/rainhat.png"},
    "body_item" : {"item" : "Warm Coat", "src" : "../images/raincoat.png"},
    "hold_item" : {"item" : "Gloves", "src" : "../images/umbrella.png"},
    "foot_item" : {"item" : "Boots", "src" : "../images/wellington.png"},
        }

];

