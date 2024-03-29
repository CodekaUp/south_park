const kenny = document.getElementById("kenny");
const homeless = document.getElementById("homeless");
const hiddenText = document.querySelector(".text");

document.addEventListener("keydown", function(event)
{
    jump();
});

function jump()
{
    if(dispatchEvent.classList != "jump")
    {
        kenny.classList.add("jump");
    }
    setTimeout(function()
    {
        kenny.classList.remove("jump")
    }, 300);
}

let Alive = setInterval(function()
{
    let kennyTop = parseInt(window.getComputedStyle(kenny).getPropertyValue("top"));
    let homelessLeft = parseInt(window.getComputedStyle(homeless).getPropertyValue("left"));

    if(homelessLeft < 80 && homelessLeft > 0 && kennyTop >= 340)
    {
        kenny.style.animationPlayState = "paused";
        homeless.style.animationPlayState = "paused";
        hiddenText.classList.remove("hidden");
    }
}, 10);