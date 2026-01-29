export class Header {
    /**
      * @param {HTMLElement} body
      * @param {Array<Object>} links 
    */
    constructor(body, links) {
        this.links = links;
        this.body = body;
        this.header = /** @type {HTMLElement} */ (
            document.querySelector("header") ||
            body.appendChild(document.createElement("header"))
        );
        this.header.innerHTML = "";

        this.nav = document.createElement("nav");
        this.header.appendChild(this.nav);
        this.nav.id = "header-nav";
        for (const i of links) {
            /**@type {HTMLButtonElement} */
            const mainContentButton = document.createElement("button");
            mainContentButton.innerText = String(i);
            this.nav.appendChild(mainContentButton)
        }
    }
}


//(() => {
//    const body = /** @type {HTMLElement} */ document.body;
//    if (!body) { return }
//    const header = /** @type {HTMLElement} */ document.createElement("header");
//    body.prepend(header);
//    const hamburgerWrapper = /** @type {HTMLElement} */ document.createElement("button");
//    hamburgerWrapper.className = "hamburger-wrapper";
//    hamburgerWrapper.onclick = () => {

//        const aside =/** @type {HTMLElement}*/ document.querySelector("aside");
//        if (aside) {
//            aside.style.display = aside.style.display === "none" ? "block" : "none";
//        }
//        header.style.display = header.style.display === "none" ? "flex" : "none";
//    };
//    const img =/** @type {HTMLElement}*/  document.createElement("img");
//    img.src = "./img/ico/hamburger.svg";
//    hamburgerWrapper.append(img);
//    body.append(hamburgerWrapper);

//    /** * @typedef {Object} HeaderLink
//    * @property {string} name
//    ** @property {(ev: MouseEvent) => any} button
//    */

//})();

export class Footer {
    /**
      * @param {HTMLElement} body
      */
    constructor(body) {
        this.body = body;
        const footer = document.createElement("footer");
        this.body.appendChild(footer);
        const logo = document.createElement("img")
        logo.src = "./img/ico/LD-logo.svg";
        footer.append(logo);
    }
}
