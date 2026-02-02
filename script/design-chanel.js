function drawChanel() {
    const main = document.querySelector("main");
    main.id = "";
    main.innerHTML = "";
    const article = document.createElement("article");
    main.append(article);
    article.id = "main-text-content";
    article.innerHTML = `
    <h1>Kanaltilpassning</h1>
    <p>Når vi arbeider med et prosjekt, bruker vi filtyper som
    tar vare på så mye informasjon som mulig. Dette gir oss
    fleksibilitet. Når vi skal publisere et arbeid er det helt andre
    krav til filene vi bruker.</p>
    <h2>Print</h2>
    <img src="./img/design/print-begrep.svg" alt="Oversikt over print-begrep.">
    <p>Vi bruker bleed når vi ønsker at printen skal være uten kanter. Bleed er et område på 
    noen få millimeter som med bilde som vi planlegger å kutte vekk.</p>
    <p>Safety-området er der innhold som er viktig må være plassert. 
    Innhold som er plassert utenfor dette kan bli kuttet vekk i trim - prosessen der man 
    kutter vekk sidene av printen.</p>
    <img src="./img/design/print-begrep-eksempel.avif" alt="Eksempel på bruk av bleed og safety.">
    <h2>Skjerm</h2>
    <img src="./img/design/skjerm-begrep.svg" alt="Oversikt over print-begrep.">
    <p>Det er normalt å benytte marginer for skjerm også, og ofte kan det være lurt
    å ha med en safety på en til to centimeter rundt skjermkanten.</p>
     <img src="./img/design/skjermbegrep-eksempel.avif" alt="Eksempel på bruk margin og safety.">
    `
}