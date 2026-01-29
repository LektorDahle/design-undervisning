(() => {
    const body = /** @type {HTMLElement} */ document.body;
    if (!body) { return }
    const header = /** @type {HTMLElement} */ document.createElement("header");
    body.prepend(header);
    const hamburgerWrapper = /** @type {HTMLElement} */ document.createElement("button");
    hamburgerWrapper.className = "hamburger-wrapper";
    hamburgerWrapper.onclick = () => {

        const aside =/** @type {HTMLElement}*/ document.querySelector("aside");
        if (aside) {
            aside.style.display = aside.style.display === "none" ? "block" : "none";
        }
        header.style.display = header.style.display === "none" ? "flex" : "none";
    };
    const img =/** @type {HTMLElement}*/  document.createElement("img");
    img.src = "./img/ico/hamburger.svg";
    hamburgerWrapper.append(img);
    body.append(hamburgerWrapper);

    /** * @typedef {Object} HeaderLink
    * @property {string} name
    ** @property {(ev: MouseEvent) => any} button
    */

    /** @type {HeaderLink[]} */
    const headerLinks =
        [
            { "name": "Design", "button": designButton },
            { "name": "Kommunikasjon", "button": kommunikasjonButton },
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
        /**@type {HTMLButtonElement} */
        const a = document.createElement("button");
        a.innerText = i.name;
        nav.append(a);
        if (i.button) {
            a.onclick = i.button;
        }
    });
    header.append(nav);
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