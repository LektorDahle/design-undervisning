function buttonBackgroundChange(name) {
    const navButtons = document.querySelectorAll('header nav button');
    navButtons.forEach(button => {
        if (button.innerText != name) {
            button.style.background = "none";
        }
        else{
            button.style.background = "#afafe8ff";
        }
    });
}

function designButton() {
    designAside();
    buttonBackgroundChange("Design")
}

function kommunikasjonButton() {
    kommunikasjonAside();
    buttonBackgroundChange("Kommunikasjon")
}

function fargeButton() {
    fargerAside();
    buttonBackgroundChange("Farger")
}

function gridButton() {
    gridAside();
    buttonBackgroundChange("Grid")
}

function typeButton() {
    typeAside();
    buttonBackgroundChange("Typografi")
}

function fileButton() {
    fileAside();
    buttonBackgroundChange("Filformat")
}

function docsButton() {
    docsAside();
    buttonBackgroundChange("Dokumentasjon")
}

function uuButton() {
    uuAside();
    buttonBackgroundChange("UU-prinsipper")
}