const box=document.getElementById("box");
const button=document.getElementById("changecolor");
console.log("testing");
button.addEventListener("click", function handlecolor()=>
{
    box.style.backgroundcolor="red";
}
const color=["red","blue", "green","orange","purple","yellow"];
console.log(colors.length);
console.log(color[2]);
let index=0;
button.addEventListener("click", function handlecolor()
{
    box.style.backgroundcolor=color[index];
    index++;
    if(index===colors.length)
    {
        index=0;

    }
});


