


document.getElementById("btn").onclick = function () {
    document.body.style.background = "#f0f8ff";
};


document.getElementById("para").ondblclick = function () {
    this.style.color = "red";
    this.textContent = "Paragraph double-clicked!";
};


let img = document.getElementById("image");

img.onmouseover = function () {
    img.style.transform = "scale(1.1)";
};

img.onmouseout = function () {
    img.style.transform = "scale(1)";
};


document.onmousemove = function (e) {
    document.getElementById("mousePos").textContent =
        `Mouse Position: X=${e.clientX} | Y=${e.clientY}`;
};

let heading = document.getElementById("heading");

heading.onmousedown = function () {
    heading.style.color = "blue";
    heading.textContent = "Mouse Down!";
};

heading.onmouseup = function () {
    heading.style.color = "black";
    heading.textContent = "Event Practice Page";
};




let input = document.getElementById("inputBox");
let keyDisplay = document.getElementById("keyDisplay");

input.onkeydown = function (e) {
    keyDisplay.textContent = `Key Down: ${e.key}`;
};

input.onkeypress = function (e) {
    if (e.key === "a") {
        keyDisplay.textContent = "You pressed 'a' - Good!";
    }
};

input.onkeyup = function () {
    keyDisplay.textContent = "Key Released!";
};





let nameField = document.getElementById("nameInput");
let emailField = document.getElementById("emailInput");

nameField.onfocus = emailField.onfocus = function () {
    this.classList.add("focused");
};

nameField.onblur = emailField.onblur = function () {
    this.classList.remove("focused");
};


nameField.onchange = function () {
    this.classList.add("changed");
};

emailField.onchange = function () {
    this.classList.add("changed");
};


document.getElementById("myForm").onsubmit = function (e) {
    e.preventDefault(); 

    document.getElementById("formMessage").textContent =
        "Form submitted successfully!";
};
