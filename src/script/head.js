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
        this.addLink("./base.css", "stylesheet", "");
        this.addLink("https://fonts.googleapis.com", "preconnect", "");
        this.addLink("https://fonts.gstatic.com", "preconnect", "anonymous");
        
    }
    /**
      *@param {string} link 
      *@param {string} rel
      *@param {string} crossorigin
      */
    addLink(link, rel, crossorigin){
        this.link = document.createElement("link");
        this.link.rel = rel;
        this.link.href = link;
        this.link.crossOrigin = crossorigin;
        this.head.appendChild(this.link);
    }
}

(() => {

    const link1 = document.createElement("link");
    link1.rel = "preconnect";
    link1.href = "https://fonts.googleapis.com";

    const link2 = document.createElement("link");
    link2.rel = "preconnect";
    link2.href = "https://fonts.gstatic.com"
    link2.crossOrigin = "anonymous";

    const link3 = document.createElement("link");
    link3.href = "https://fonts.googleapis.com/css2?family=Radley:ital@0;1&display=swap";
    link3.rel = "stylesheet";
})()