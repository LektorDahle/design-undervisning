import { GetContent } from "./get-json.js";

export class Content {
    /**
    * @param {string} link 
    * @param {HTMLElement} header
    */
    constructor(header, link) {
        this.link = link;
        this.header = header;
        this.aside = document.getElementsByTagName("aside")[0];
        this.links = new GetContent(this.link)
    }
    async makeHeaderLinks() {

        const subjects = await this.links.mainSubjects()
        for (const i of subjects) {
            /**@type {HTMLButtonElement} */
            const mainContentButton = document.createElement("button");
            mainContentButton.innerText = String(i);
            mainContentButton.id = "inactive-link";
            this.header.appendChild(mainContentButton);
            mainContentButton.addEventListener("click", () => this.headerAction(i));
        }
    }
    /**
     * @param {string} i 
     */
    headerAction(i) {
        this.makeAsideLinks(i)
    }

    /**
     * @param {string} subject 
     */
    async makeAsideLinks(subject) {
        const subsubjects = await this.links.getSubSubjects(subject);
        for (const i of subsubjects) {
            /**@type {HTMLButtonElement} */
            const mainContentButton = document.createElement("button");
            mainContentButton.innerText = String(i);
            mainContentButton.id = "inactive-link";
            this.aside.appendChild(mainContentButton);
            mainContentButton.addEventListener("click", () => this.headerAction(i));
        }
    }
}
