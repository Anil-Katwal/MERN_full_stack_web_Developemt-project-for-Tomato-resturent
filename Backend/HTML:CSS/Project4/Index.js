const btnE1=document.
querySelector(".btn");
btnE1.addEventListener("mouseove",(event)=>{
const x=(event.pagex-btnE1.offsetLeft);
const y=(event.pagex-btnE1.offsetLeft);

btnE1.Style.setProperty("--xPos",x+"px");
btnE1.Style.setProperty("--yPos",y+"px");
});