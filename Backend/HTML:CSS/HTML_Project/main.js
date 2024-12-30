const bodyE1 = document.querySelector("body");

bodyE1.addEventListener("mousemove", (event) => {
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    const spanE1 = document.createElement("span");

    spanE1.style.position = "absolute"; // Make sure the span is absolutely positioned
    spanE1.style.left = xPos + "px";
    spanE1.style.top = yPos + "px";
    spanE1.style.width = "100px"; // Set a fixed width for the span
    spanE1.style.height = "100px"; // Set a fixed height for the span
    spanE1.style.backgroundColor = "red"; // Set a background color to make the span visible
    const size=Math.random()*100
    spanE1.style.width=size+"px";
    spanE1.style.height=size+"px";
    bodyE1.appendChild(spanE1);
    setTimeout(()=>{
        spanE1.remove();
    },3000);
});
