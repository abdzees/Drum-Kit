
// FOR DETECTING CLICKS

var totalButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < totalButtons; i++) {

    document.querySelectorAll('.drum')[i].addEventListener("click", function(){

        var buttonsClicked = this.innerHTML;
        makeSound(buttonsClicked);
        activeButton(buttonsClicked);

    });
}

// FOR DETECTING KEYS

document.addEventListener("keydown", function (event) {

makeSound(event.key);
activeButton(event.key);

})


// FOR MAKING SOUNDS

function makeSound(key){

    switch (key) {
        case "w":
            var tom1 = new Audio('sounds\\tom-1.mp3');
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio('sounds\\tom-2.mp3');
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio('sounds\\tom-3.mp3');
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio('sounds\\tom-4.mp3');
            tom4.play();
            break;

        case "k":
            var kick = new Audio('sounds\\kick-bass.mp3');
            kick.play();
            break;

        case "j":
            var crash = new Audio('sounds\\crash.mp3');
            crash.play();
            break;

        case "l":
            var snare = new Audio('sounds\\snare.mp3');
            snare.play();
            break;


        default:
            console.log(key)
            break;
    }

}
    

function activeButton(currentKey){

var activeKey = document.querySelector("."+ currentKey);
activeKey.classList.add("pressed");

setTimeout(function(){
    activeKey.classList.remove("pressed");
}, 100);

};
