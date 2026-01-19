function drawCommunication() {
    const main = document.querySelector("main");
    main.id = "";
    main.innerHTML = "";
    const article = document.createElement("article");
    main.append(article);
    article.id = "main-text-content";
    article.innerHTML = `
    <img src="../img/kommunikasjon/kommunikasjonsmodell.svg" alt="Lærer-personas bilde.">
    `
}