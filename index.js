// Function for sound plays when button is clicked

for(var i=0;i<document.querySelectorAll("body button").length;i++){
    document.querySelectorAll("body button")[i].addEventListener("click",function(){
        var clickInnerHtml = this.innerHTML;
        makeSound(clickInnerHtml);
        buttonAnimation(clickInnerHtml);
    });
}

// Function for sound plays when key is pressed on keyboard

document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});


// Making a function for the sounds

function makeSound(k){
    switch(k){
        case "w":
            var crash = new Audio("./sounds/tom-3.mp3");
            crash.play();
            break;
        case "a":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
        case "s":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio("./sounds/crash.mp3");
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        default: console.log(clickInnerHtml);
    }
}

// Function to know which button is clicked

function buttonAnimation(anime){
    var animation = document.querySelector("." + anime);
    animation.classList.add("pressed");
    setTimeout(function(){
        animation.classList.remove("pressed");
    }, "10 second");
}


