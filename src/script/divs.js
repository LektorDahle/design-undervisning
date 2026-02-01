import { Content } from "./subjects.js";

export class Header {
    /**
      * @param {HTMLElement} body
      * @param {string} link
    */
    constructor(body, link) {
        this.links = link;
        /**@type {HTMLElement} this.body */
        this.body = body;
        this.header = /** @type {HTMLElement} */ (
            document.querySelector("header") ||
            body.appendChild(document.createElement("header"))
        );
        this.header.innerHTML = "";

        /**@type {HTMLElement} this.nav */
        this.nav = document.createElement("nav");
        this.header.appendChild(this.nav);
        this.nav.id = "header-nav";
        const content = new Content(this.nav, link);
        content.makeHeaderLinks();

    }
    changeActive() {

    }
}


//(() => {

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

export class Aside{
    /**
    * @param {HTMLElement} body
     */
     constructor(body){
        this.body = body;
        this.aside = document.createElement("aside");
        this.body.appendChild(this.aside);
        this.aside.style.display = "flex";
     }
}