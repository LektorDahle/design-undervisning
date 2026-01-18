function designAside() {
    const designTopics = [
        { "name": "Prosesser", "button": prosesserButton },
        { "name": "Designbrief" },
        { "name": "Personas" },
        { "name": "Kanaltilpassning" }
    ];
    aside(designTopics)
}

function kommunikasjonAside() {
    const kommunikasjonTopics = [
        { "name": "Kommunikasjonsmodell" },
        { "name": "Gestaltprinsipper" },
        { "name": "Etos, patos, logos" }
    ];
    aside(kommunikasjonTopics)
}

function fargerAside() {
    const fargeTopics = [
        { "name": "RGB, CMYK og CIE" },
        { "name": "Kontraster" },
        { "name": "Fargevalg" },
        { "name": "Bruk av farger" }
    ];
    aside(fargeTopics)
}


function gridAside() {
    const fargeTopics = [
        { "name": "Grid" },
        { "name": "Grid i print" },
        { "name": "Grid på skjerm" }
    ];
    aside(fargeTopics)
}

function typeAside() {
    const typeTopics = [
        { "name": "Typer skrift" },
        { "name": "Typografisk skala" },
        { "name": "Typografisk skille" },
        { "name": "Begrep" }
    ];
    aside(typeTopics)
}


function fileAside() {
    const typeTopics = [
        { "name": "Skjerm" },
        { "name": "Print" },
        { "name": "For sammarbeid" }
    ];
    aside(typeTopics)
}

function docsAside() {
    const typeTopics = [
        { "name": "Skisser" },
        { "name": "Notater" },
        { "name": "Epost" }
    ];
    aside(typeTopics)
}

function uuAside() {
    const typeTopics = [
        { "name": "Universell utforming" },
        { "name": "Krav til farger" },
        { "name": "Krav til touch-områder" },
        { "name": "Krav til typografi" }
    ];
    aside(typeTopics)
}

function aside(tops) {
    let aside;
    if (!document.querySelector("aside")) {
        const body = document.body;
        if (!body) { return };
        aside = document.createElement("aside");
        body.append(aside);
    }
    else {
        aside = document.querySelector("aside");
        aside.innerHTML = "";
    }
    const nav = document.createElement("nav");
    aside.append(nav);

    tops.forEach(topic => {
        const button = document.createElement("button")
        button.innerText = topic.name;
        nav.appendChild(button);
        if (topic.button) {
            button.onclick = topic.button;
        }
    });
}