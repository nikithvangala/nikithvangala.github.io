

function sayThatWasEasy(){
console.log("test");
var thatWasEasy = new Audio("that_was_easy.mp3");
thatWasEasy.play();
}

$("#easy").on("click", sayThatWasEasy);


$(document).keypress(delegateKeypress);

function delegateKeypress(event ){
    if (event.charCode == 48){;
        $("#easy").trigger("click")
    }
}