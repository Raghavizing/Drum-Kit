let i = 0;
let j = document.querySelectorAll(".drum").length;
for(i=0;i<j;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var button = this.innerHTML;
        makesound(button);
    });
    
}
document.addEventListener("keydown",function(event)
{
     var button = event.key;
     makesound(button);
    });

    function makesound(key)
    {
        switch(key)
        {
            case "w":
                let audio1 = new Audio("sounds/tom-1.mp3");
                audio1.play();
            break;
            case "s":
                let audio2 = new Audio("sounds/tom-2.mp3");
                audio2.play();
            break;
            case "a":
                let audio3 = new Audio("sounds/tom-3.mp3");
                audio3.play();
            break;
            case "d":
                let audio4 = new Audio("sounds/tom-4.mp3");
                audio4.play();
            break;
            case "j":
                let audio5 = new Audio("sounds/snare.mp3");
                audio5.play();
            break;
            case "k":
                let audio6 = new Audio("sounds/crash.mp3");
                audio6.play();
            break;
            case "l":
                let audio7 = new Audio("sounds/kick-bass.mp3");
                audio7.play();
            break;
        }
    };
    