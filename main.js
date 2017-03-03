document.addEventListener("DOMContentLoaded", init);

function init() {

    var addValve = document.getElementById("addParagraph"),
        canvas   = document.getElementById("Canvas");

    addParagraph.addEventListener("click", clickHandler);

    function clickHandler(e) {
        var name      = document.getElementById("name"),
            tag       = name.value,
            newButton = document.createElement("p");

        newButton.id        = tag;
        newButton.innerText = tag;

        $(newButton).draggable();

        newButton.setAttribute("class", "draggable");

        canvas.appendChild(newButton);
    }
}