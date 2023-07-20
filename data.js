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
    }, 
    {
    "condition" : "Sunny",
    "src" : "../images/background-2184_1280.jpg",
    "alt" : "sunny field",
    "reaction" : "it is so warm and sunny outside, I can't wait to go and explore! what will I need?",
    },
    {
    "condition" : "Bedtime",
    "src" : "../images/british-columbia-2382640_1280.jpg",
    "alt" : "stars across a dark sky",
    "reaction" : "it is so dark outside, it must be bedtime. hmm now what will I need?",
    },
    {
    "condition" : "Snowing",
    "src" : "../images/winter-landscape-2571788_1280.jpg",
    "alt" : "a winters day",
    "reaction" : "Brrrrr it looks cold outside! I love making snow angels and sledging down hills. What will I need?",
        }

];

let head_item_list = [
    {
    "item" : "Rain Hat", 
    "condition" : "Raining",
    "src" : "../images/rainhat.png",
    },
    {
    "item" : "Sun Hat", 
    "condition" : "Sunny",
    "src" : "../images/sunhat.png",
    },
    {
    "item" : "Sleep Cap", 
    "condition" : "Bedtime",
    "src" : "../images/rainhat.png",
    },
    {
    "item" : "Bobble hat",
    "condition" : "Snowing",
    "src" : "../images/bobblehat.png",
    }
]

let body_item_list = [
    {
    "item" : "Rain Coat", 
    "condition" : "Raining",
    "src" : "../images/raincoat.png",
    },
    {
    "item" : "T-shirt", 
    "condition" : "Sunny",
    "src" : "../images/tshirt.png",
    },
    {
    "item" : "Pajamas", 
    "condition" : "Bedtime",
    "src" : "../images/raincoat.png",
    },
    {
    "item" : "Warm Coat",
    "condition" : "Snowing",
    "src" : "../images/raincoat.png",
    }
]

let hold_item_list = [
    {
    "item" : "Umbrella", 
    "condition" : "Raining",
    "src" : "../images/umbrella.png",
    },
    {
    "item" : "Sun Cream", 
    "condition" : "Sunny",
    "src" : "../images/umbrella.png",
    },
    {
    "item" : "Teddy", 
    "condition" : "Bedtime",
    "src" : "../images/umbrella.png",
    },
    {
    "item" : "Gloves",
    "condition" : "Snowing",
    "src" : "../images/umbrella.png",
    }
]

let foot_item_list = [
    {
    "item" : "Wellington Boots", 
    "condition" : "Raining",
    "src" : "../images/wellington.png",
    },
    {
    "item" : "Sandals", 
    "condition" : "Sunny",
    "src" : "../images/wellington.png",
    },
    {
    "item" : "Slippers", 
    "condition" : "Bedtime",
    "src" : "../images/wellington.png",
    },
    {
    "item" : "Boots",
    "condition" : "Snowing",
    "src" : "../images/wellington.png",
    }
]