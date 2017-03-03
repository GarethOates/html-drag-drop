document.addEventListener("DOMContentLoaded", init);

function init() {

    var addValve = document.getElementById("addValve"),
        canvas   = document.getElementById("Canvas");

    addValve.addEventListener("click", clickHandler);

    function clickHandler(e) {
        var name      = document.getElementById("tagName"),
            tag       = name.value,
            newButton = document.createElement("p");

        newButton.id        = tag;
        newButton.innerText = tag;

        $(newButton).draggable();

        newButton.setAttribute("class", "draggable");

        canvas.appendChild(newButton);
    }
}