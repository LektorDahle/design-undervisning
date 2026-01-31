


export class HeadInfo {
    constructor() {
        this.head = document.head;
        if (!this.head) return;
        if (!this.head.querySelector('meta[name="viewport"]')) {
            const meta_viewport = document.createElement("meta");
            meta_viewport.name = "viewport";
            meta_viewport.content = "width=device-width, initial-scale=1.0";
            this.head.appendChild(meta_viewport);
        }
        if (!this.head.querySelector('meta[charset]')) {
            const meta_utf = document.createElement("meta");
            meta_utf.setAttribute("charset", "UTF-8");
            this.head.appendChild(meta_utf);
        }
        this.addLink({link: "./base.css", rel: "stylesheet"});
        this.addLink({ link: "https://fonts.googleapis.com", rel: "preconnect"});
        this.addLink({ link: "https://fonts.gstatic.com", rel: "preconnect", crossorigin: "anonymous"});
        this.addLink({ link: "https://fonts.googleapis.com/css2?family=Radley:ital@0;1&display=swap", rel: "stylesheet"});
    }

    /**
     * @param {Object} options
     * @param {string} [options.link]
     * @param {string} [options.rel]
     * @param {string} [options.crossorigin]
     */
    addLink({ link, rel, crossorigin } = {}) {
        this.link = document.createElement("link");
        if (rel) {
            this.link.rel = rel;
        }
        if (link) {
            this.link.href = link;
        }
        if (crossorigin) {
            this.link.crossOrigin = crossorigin;
        }
        this.head.appendChild(this.link);
    }
}