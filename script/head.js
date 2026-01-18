
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
})()