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
const chosen_Head_Cont = document.getElementById("chosen_Head_Cont");
const chosen_Body_Cont = document.getElementById("chosen_Body_Cont");
const chosen_Hold_Cont = document.getElementById("chosen_Hold_Cont");
const chosen_Foot_Cont = document.getElementById("chosen_Foot_Cont");
const assess_Button_Cont = document.getElementById("assess_Button_Cont");
const response_para_three = document.getElementById("response_para_three") ;

let scenarios = [
    {
    "condition" : "Raining",
    "src" : "./images/man-3581659_1280.jpg",
    "alt" : "raining",
    "reaction" : "Wow! it looks really wet and rainy out there. I can't wait to go and splash in some puddles! Can you click on what I will need?",
    "matchResponse": "Good thinking, wellington boots will keep my feet dry while I splash in the puddles - no one wants soggy socks! Thank you for your help ",
    }, 
    {
    "condition" : "Sunny",
    "src" : "./images/background-2184_1280.jpg",
    "alt" : "sunny field",
    "reaction" : "it is so warm and sunny outside, I can't wait to go and explore! Can you click on what I will need?",
    "matchResponse": "Good thinking, I need to put my suntan cream on before going out to keep my skin safe. My hat will keep the sun out of my eye's and protect my head. Thank you for your help",
    },
    {
    "condition" : "Bedtime",
    "src" : "./images/british-columbia-2382640_1280.jpg",
    "alt" : "stars across a dark sky",
    "reaction" : "it is so dark outside, it must be bedtime. Can you click on what I will need?",
    "matchResponse": "This will keep me nice and snuggly while I sleep. I am glad you remembered my teddy bear, I love to hug him as I go to sleep, he makes me feel safe and happy. Time for me to brush my teeth - good night",
    },
    {
    "condition" : "Snowing",
    "src" : "./images/winter-landscape-2571788_1280.jpg",
    "alt" : "a winters day",
    "reaction" : "Brrrrr it looks cold outside! I love making snow angels and sledging down hills. Can you click on what I will need?",
    "matchResponse": "Good thinking, I will be so nice and warm while I play in the snow. I am going to go and make a snow fort. Thank you for your help ",
        }

];

let head_item_list = [
    {
    "item" : "Sun Hat", 
    "condition" : "Sunny",
    "src" : "./images/items/head/sunhats.png",
    },
    {
        "item" : "Rain Hat", 
        "condition" : "Raining",
        "src" : "./images/items/head/rainhats.png",
    },
    {
    "item" : "Sleep Cap", 
    "condition" : "Bedtime",
    "src" : "./images/items/head/nightcaps.png",
    },
    {
    "item" : "Bobble hat",
    "condition" : "Snowing",
    "src" : "./images/items/head/bobblehats.png",
    }
]

let body_item_list = [
    {
        "item" : "Pajamas", 
        "condition" : "Bedtime",
        "src" : "./images/items/body/pajamass.png",
    },
    {
        "item" : "Warm Coat",
        "condition" : "Snowing",
        "src" : "./images/items/body/warmcoats.png",
    },
    {
    "item" : "Rain Coat", 
    "condition" : "Raining",
    "src" : "./images/items/body/raincoats.png",
    },
    {
    "item" : "T-shirt", 
    "condition" : "Sunny",
    "src" : "./images/items/body/tshirts.png",
    },
]

let hold_item_list = [
    {
        "item" : "Sun Cream", 
        "condition" : "Sunny",
        "src" : "./images/items/hold/suncreams.png",
    },
    {
    "item" : "Umbrella", 
    "condition" : "Raining",
    "src" : "./images/items/hold/umbrellas.png",
    },
    {
    "item" : "Teddy", 
    "condition" : "Bedtime",
    "src" : "./images/items/hold/teddys.png",
    },
    {
    "item" : "Gloves",
    "condition" : "Snowing",
    "src" : "./images/items/hold/glovess.png",
    }
]

let foot_item_list = [
    {
        "item" : "Boots",
        "condition" : "Snowing",
        "src" : "./images/items/foot/snowbootss.png",
    },
    {
        "item" : "Slippers", 
        "condition" : "Bedtime",
        "src" : "./images/items/foot/slipperss.png",
    },
    {
        "item" : "Sandals", 
        "condition" : "Sunny",
        "src" : "./images/items/foot/sandalss.png",
    },
    {
    "item" : "Wellington Boots", 
    "condition" : "Raining",
    "src" : "./images/items/foot/wellingtons.png",
    },

]