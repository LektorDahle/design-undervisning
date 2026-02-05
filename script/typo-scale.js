function skriftScale() {
    const main = document.querySelector("main");
    main.id = "";
    main.innerHTML = "";
    const article = document.createElement("article");
    main.append(article);
    article.id = "main-text-content";
    article.innerHTML = `
    <h1>Typografisk skala</h1>
    <p>Brødtekst, blidetekst og overskrifter har ulik størrelse. Måten vi avgjør hvilke størrelse teksten på et dokument skal ha er ved bruk av en typografisk skala. Vi velger ett tall større enn 1 og en grunnstørrelse større enn 10pt. Vanlige tall å velge er 1.22, 1.33, 1.41 eller 1.61 og grunnstørrelse 12pt (16px).</p>
    <img src="./img/typo/scaling-table.avif" alt="Skaleringstabell for typografi">
    `
}