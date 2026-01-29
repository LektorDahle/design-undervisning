/**
 * Representerer og håndterer sidemenyen (aside).
 */
class Aside {
    /**
      *@param{HTMLElement} body - Forelderelementet som aside plasseres i.
      */
    constructor(body) {
        this.body = body;
        this.aside = /** @type {HTMLElement} */ (
            document.querySelector("aside") ||
            body.appendChild(document.createElement("aside"))
        );
        this.aside.innerHTML = "";
    }
}