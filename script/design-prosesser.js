
function drawProsesser() {
    const main = document.querySelector("main");
    main.id = "";
    main.innerHTML = "";
    const article = document.createElement("article");
    main.append(article);
    article.id = "main-text-content";
    article.innerHTML = `
    <h1>Design-prosess og metode</h1>
    <h2>Designer - klient </h2>
    <img src="./img/design/designer-klient.svg" alt="Designer med blyant ved siden av klient med viskelære.">
    <p>Klienten er personen eller organisasjonen som bestiller design-arbeidet. De
    starter med å skrive en design-brief som forklarer hva som skal produseres. Underveis er jobben
    til en klient å fortelle designer hvilke ideer som fungerer og hvilke ideer som ikke fungerer.</p>
    <h2>Vanlig design-prosess</h2>
    <p>Når man har fått ett oppdrag er det noen ting vi må gjøre. Bilde under viser stegene som er normale
    i et design-prosjekt. Hvis vi følger disse stegene, blir det enklere å inkludere andre i arbeidet vårt, blant annet klienten, men også andre designere.
    <img src="./img/design/designprosessen.svg" alt="De syv stegene i design-prosessen vist i en sirkel.">
    <h3>0. Designbrief</h3>
    <p> En designbrief er en beskrivelse av hva som er ønsket, og hva som kreves av designer med tanke på kompetanse.
    En designbrief er skrevet av klienten.<p>
    <h3>1. Problemformulering</h3>
    <p> En problemformulering er laget i sammarbeid med klient og designer. Dette kan være et skrevet dokument, en samtale over epost eller en muntlig avtale. 
    I små prosjekt med en designer er det ikke altid nødvendig å skrive så mye ned i dette steget.</p>
    <h3>2. Analyse </h3>
    <p>I dette steget prøves det ut flere design. I dette steget skisserer designer det meste med enkle verktøy og få detaljer.</p>
    <h3>3. Beslutning</h3>
    <p>I dette steget velges en av skissene. Dette kan gjøres sammen med klient, med en annen kollega eller alene.
    Det er viktig at man har en god nok ide for hvordan design-forslaget skal bli.</p>
    <h3>4. Gjennomføring</h3>
    <p>Nå lages designet. Prosessen er tegnet som en sirkel fordi disse stegene kan gjentas flere ganger. De første gangene
    man er i dette steget legger man ikke like mye vekt på å få alt rett. Mot slutten av et prosjekt er dette det viktigste steget,
    da må alle detaljene være på plass.</p>
    <h3>5. Kontroll </h3>
    <p>Klient godkjenner designet eller kommer med tilbakemelding. Det er godt mulig at klienten ønsker at du starter helt på nytt. 
    Dette er vanlig.</p>
    <h3>6. Kanaltilpassing og publisering </h3>
    <p>Dersom klienten er fornøyd, gjøres de siste tilpassningene og så publiseres designet. Dersom noe skal animeres, er
    det normalt at det fullføres i dette steget. Video er det "dyreste" formatet med tanke på arbeidstid.</p>
    `;
}