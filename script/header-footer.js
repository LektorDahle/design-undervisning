(() => {
    const body = document.body;
    if (!body) { return }
    const header = document.createElement("header");
    body.prepend(header);
    const hamburgerWrapper = document.createElement("button");
    hamburgerWrapper.className = "hamburger-wrapper";
    hamburgerWrapper.onclick = () => {
        const aside = document.querySelector("aside");
        if (aside) {
            aside.style.display = aside.style.display === "none" ? "block" : "none";
        }
        const n = document.getElementById("header-nav");
        if (n) {
            n.style.display = n.style.display === "none" ? "flex" : "none";
        }
    };
    const img = document.createElement("img");
    img.src = "./img/ico/hamburger.svg";
    hamburgerWrapper.append(img);

    const headerLinks =
        [
            { "name": "Design", "button": designButton },
            { "name": "Kommunikasjon", button: kommunikasjonButton },
            { "name": "Farger", "button": fargeButton },
            { "name": "Grid", "button": gridButton },
            { "name": "Typografi", "button": typeButton },
            { "name": "Filformat", "button": fileButton },
            { "name": "Dokumentasjon", "button": docsButton },
            { "name": "UU-prinsipper", "button": uuButton }
        ]

    const nav = document.createElement("nav");
    nav.id = "header-nav";
    headerLinks.forEach(i => {
        const a = document.createElement("button");
        a.innerText = i.name;
        nav.append(a);
        if (i.button) {
            a.onclick = i.button;
        }
    });
    header.append(hamburgerWrapper, nav)
})();

(() => {
    const body = document.body;
    if (!body) { return }
    const footer = document.createElement("footer");
    body.appendChild(footer);

    const logo = document.createElement("img")
    logo.src = "./img/ico/LD-logo.svg";
    footer.append(logo);
})();