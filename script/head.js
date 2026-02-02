
(() => {
    const head = document.head;
    if (!head) { return }
    if (!head.querySelector('meta[charset]')) {
        const meta_utf = document.createElement("meta");
        meta_utf.setAttribute("charset", "UTF-8");
        head.prepend(meta_utf);
    }

    if (!head.querySelector('meta[name="viewport"]')) {
        const meta_viewport = document.createElement("meta");
        meta_viewport.name = "viewport";
        meta_viewport.content = "width=device-width, initial-scale=1.0";
        head.prepend(meta_viewport);
    }
    const base_css = document.createElement("link");
    base_css.rel = "stylesheet";
    base_css.href = "./base.css";
    head.append(base_css);

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
    
    head.appendChild(link1, link2, link3)
})()

