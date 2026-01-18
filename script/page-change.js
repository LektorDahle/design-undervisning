function buttonBackgroundChange(name) {
    const navButtons = document.querySelectorAll('header nav button');
    navButtons.forEach(button => {
        if (button.innerText != name) {
            button.id = "";
        }
        else {
            button.id = "active-button";
        }
    });
}

function asideButtonBackgroundChange(name) {
    const navButtons = document.querySelectorAll('aside nav button');
    navButtons.forEach(button => {
        if (button.innerText != name) {
            button.id = "";
        }
        else {
            button.id = "active-button";
        }
    });
}

function defaultMainChange(text) {
    const main = document.querySelector("main");
    main.id = "main-startside";
    main.innerHTML = "";
    const t = document.createElement("h1");
    t.innerText = text;
    main.append(t);
}

function designButton() {
    //const prev = document.getElementById("prev");
    const next = document.getElementById("next");
    next.onclick = prosesserButton;
    designAside();
    buttonBackgroundChange("Design")
    defaultMainChange("Design")
}

function kommunikasjonButton() {
    kommunikasjonAside();
    buttonBackgroundChange("Kommunikasjon")
    defaultMainChange("Kommunikasjon")
}

function fargeButton() {
    fargerAside();
    buttonBackgroundChange("Farger")
    defaultMainChange("Farger")
}

function gridButton() {
    gridAside();
    buttonBackgroundChange("Grid")
    defaultMainChange("Grid")
}

function typeButton() {
    typeAside();
    buttonBackgroundChange("Typografi")
    defaultMainChange("Typografi")
}

function fileButton() {
    fileAside();
    buttonBackgroundChange("Filformat")
    defaultMainChange("Filformat")
}

function docsButton() {
    docsAside();
    buttonBackgroundChange("Dokumentasjon")
    defaultMainChange("Dokumentasjon")
}

function uuButton() {
    uuAside();
    buttonBackgroundChange("UU-prinsipper")
    defaultMainChange("UU-prinsipper")
}

function prosesserButton() {
    const prev = document.getElementById("prev");
    const next = document.getElementById("next");
    prev.className = "";
    prev.onclick = designButton;
    next.onclick = prosesserButton;
    drawProsesser();
    asideButtonBackgroundChange("Prosess");
}