import { Header, Footer } from "./header.js";
import { GetContent } from "./get-json.js";
import { HeadInfo } from "./head.js"


export const contentData = new GetContent("./json-data/content.json")

async function renderStatic() {
    new HeadInfo();
    /**@type {Array<Object>} */
    const links = await contentData.mainSubjects();

    new Header(document.body, links);
    new Footer(document.body);
}
renderStatic();

/**@param {String} skjerm */
export function visSkjerm(skjerm) {
    switch (skjerm) {
        case "Hovedside":
            navigerTilSkjerm(skjerm)
            return "Hovedside";
        case "Design":
            navigerTilSkjerm(skjerm)
            return "Design";
        case "Prosess":
            navigerTilSkjerm(skjerm)
            return "Prosess";
        case "Designbrief":
            navigerTilSkjerm(skjerm)
            return "Designbrief";
        default:
            navigerTilSkjerm("Hovedside")
            return "Hovedside";
    }
}

/**@param {String} skjerm */
export function navigerTilSkjerm(skjerm) {
    const forrige = localStorage.getItem("skjerm");
    if (forrige !== skjerm) {
        window.history.pushState({ skjerm }, "", "");
        localStorage.setItem("skjerm", skjerm);
    }
}


document.addEventListener("DOMContentLoaded", () => {
    const skjerm = localStorage.getItem("skjerm");

    if (skjerm) {
        window.history.replaceState({ skjerm }, "", "");
        visSkjerm(skjerm);
    } else {
        visSkjerm("Hovedside");
    }
});

window.addEventListener("popstate", (e) => {
    const skjerm = e.state?.skjerm || "Hovedside";
    localStorage.setItem("skjerm", skjerm);
    visSkjerm(skjerm);
});