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
    };
    const img = document.createElement("img");
    img.src = "./img/ico/hamburger.svg";
    hamburgerWrapper.append(img);

    const headerLinks =
        [
            { "path": "design", "name": "Design" },
            { "path": "kommunikasjon", "name": "Kommunikasjon" },
            { "path": "farger", "name": "Farger" },
            { "path": "grid", "name": "Grid" },
            { "path": "typografi", "name": "Typografi" },
            { "path": "filformat", "name": "Filformat" },
            { "path": "dokumentasjon", "name": "Dokumentasjon" },
            { "path": "uu", "name": "UU-prinsipper" }
        ]

    const nav = document.createElement("nav");
    headerLinks.forEach(i => {
        const a = document.createElement("button");
        a.href = `./{i.path}`;
        a.innerText = i.name;
        nav.append(a);
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