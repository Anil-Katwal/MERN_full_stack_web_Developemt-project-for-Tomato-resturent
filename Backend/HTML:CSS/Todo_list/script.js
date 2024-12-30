const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function AddTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        inputBox.value = ''; // Clear the input box after adding the task
        li.addEventListener("click", function() {
            li.classList.toggle("checked");
        });
        let span = document.createElement("span");
        span.innerHTML = "\u00D7";
        span.className = "close";
        li.appendChild(span);
        span.addEventListener("click", function() {
            li.remove();
        });
    }
}
