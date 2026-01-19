function drawPersonas() {
    const main = document.querySelector("main");
    main.id = "";
    main.innerHTML = "";
    const article = document.createElement("article");
    main.append(article);
    article.id = "main-text-content";
    article.innerHTML = `
    <h1>Personas</h1>
    <p> En personas er en fiktiv person eller målgruppe
    som beskriver viktige element for en designer å tenke
    på i design-prosessen. Under er et eksempel på en personas
    for "Lærer".</p>
     <img src="./img/design/personas.svg" alt="Lærer-personas bilde.">
    `
}