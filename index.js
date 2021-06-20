var number=document.querySelectorAll(".drum").length;
for( var i=0;i<number;i++)
{

document.querySelectorAll(".drum")[i].addEventListener("click" ,function()
{ var inner=this.innerHTML;

   makeSound(inner);
   banimation(inner);
});
document.addEventListener("keypress" ,function(event)
{ makeSound(event.key);
    banimation(event.key);
});
function makeSound(key)
{
    switch (key) {
       
        case "a":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "w":
                var audio=new Audio("sounds/tom-3.mp3");
                audio.play();
                break;
         case "s":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            break;                
         case "d":
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;                                         
        case "j":
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
            break; 
        case "k":
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break; 
        case "l":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break; 
        default:
            break;
    }

}

}
function banimation(ckey)
{
    var actbtn=document.querySelector("." + ckey);
    actbtn.classList.add("pressed");
    setTimeout(function()
    {
        actbtn.classList.remove("pressed");
    });
}