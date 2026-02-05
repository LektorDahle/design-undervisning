
function skriftTyper() {
    const main = document.querySelector("main");
    main.id = "";
    main.innerHTML = "";
    const article = document.createElement("article");
    main.append(article);
    article.id = "main-text-content";
    article.innerHTML = `
    <h1> Typografi</h1>
    <p>Typografi er læren om hvordan vi utformer tekst slik at den blir lesbar, forståelig og visuelt ryddig. Når vi jobber med typografi, tar vi bevisste valg om skrifttype og om hvordan teksten settes: skriftstørrelse, linjeavstand, linjelengde, ordmellomrom, bokstavavstand og avsnitt. Målet er at leseren lett kan følge teksten, samtidig som uttrykket passer til innholdet.</p>

    <h2>Ulike typer skrift</h2>
    <p> Skrifttyper kan beskrives med noen praktiske kategorier. Kategoriene er ikke absolutte, men brukes for å snakke presist om uttrykk og bruksområder.</p>

    <h3>Serif</h3>
    <p>Skrift der bokstavene har seriffer (små avslutninger på enden av strekene). Serif brukes ofte i lengre tekster, særlig i trykte tekster, og kan gi et mer klassisk preg.</p>

    <h3>Sans serif</h3>
    <p>Skrift uten seriffer. Sans serif er vanlig i digitale flater, presentasjoner og moderne design, og oppleves ofte som ren og tydelig.</p>

    <h3>Geometrisk</h3>
    <p>Skrift med former som virker “konstruert” med enkel geometri (runde former, jevne kurver, lik vekt). Brukes ofte i overskrifter og grafisk profil, men kan være mindre behagelig i lange tekster dersom den blir for stram.</p>

    <h3>Monospace</h3>
    <p>Skrift der alle tegn har samme bredde. Den brukes særlig til kode og tabeller fordi den gjør det enkelt å stille opp kolonner, men er vanligvis ikke førstevalg i løpende tekst.</p>

    <h3>Script</h3>
    <p>Skrift som etterligner håndskrift. Den brukes mest i korte mengder (for eksempel en tittel, en signatur eller et dekorativt element), fordi lesbarheten ofte faller når teksten blir lang.</p>

    <h3>Display</h3>
    <p>Skrifter laget for å gi tydelig karakter i store størrelser. De passer best i overskrifter og plakatelementer, ikke i løpende tekst.</p>

    <h2>Justere typogafien</h2>
    <p>Når du har valgt skrifttype, kan du gjøre teksten mer lesbar ved å kontrollere avstander og tekstflyt.</p>

    <h3>Skriftstørrelse</h3>
    <p>Skriftstørrelsen må passe til situasjonen: skjerm, avstand til leseren og hvor mye tekst som skal leses. For liten tekst gir høyere belastning, mens for stor tekst kan gi for korte linjer og urolig rytme.</p>

    <h3>Linjeavstand (line-height)</h3>
    <p>Avstanden mellom linjene. For tett linjeavstand gir en kompakt tekstblokk; for stor linjeavstand gjør at linjene mister sammenheng. Linjeavstanden justeres ofte etter skriftstørrelse og linjelengde.</p>

    <h3>Linjelengde</h3>
    <p>Hvor lange linjene er. For lange linjer gjør det vanskelig å finne starten på neste linje. For korte linjer gir en “hakkete” leserytme. Målet er en stabil rytme der øyet lett finner neste linje.</p>

    <h3>Ordmellomrom</h3>
    <p>Avstanden mellom ord. For store mellomrom kan gi “hull” i teksten og urolig rytme, særlig i blokkjustert tekst. For små mellomrom kan gjøre at ordene flyter sammen.</p>

    <h3>Bokstavavstand (tracking / letter-spacing)</h3>
    <p>Justerer den generelle avstanden mellom bokstaver. Litt økning kan hjelpe i små størrelser eller i versaler, men for mye gjør at ordformene blir vanskeligere å lese.</p>

    <h3>Kerning</h3>
    <p>Justerer avstanden mellom bestemte bokstavpar (for eksempel A og V) for å få jevnere optisk avstand. Kerning er mest synlig i store størrelser, som overskrifter og logoer.</p>

    <h3>Orddeling (hyphenation)</h3>
    <p>Styrer når ord kan deles med bindestrek ved linjeskift. Riktig orddeling kan gi jevnere linjebrudd og mindre “store hull” i teksten, spesielt ved blokkjustering. For mye orddeling kan derimot gjøre teksten urolig.</p>

    <h3>Orphans og widows</h3>
    <p>Dette handler om uheldige linjebrudd i avsnitt.</p>
    <ul>
    <li><b>Orphan</b> en kort linje som blir stående alene øverst i ny side/spalte.</li>
    <li>Widow</b> en kort siste linje i avsnitt som blir stående alene nederst i side/spalte.</li>
    </ul>
    <p>Målet er å unngå slike brudd fordi de ser uryddige ut og kan forstyrre lesingen.</p>

    <h3>Avsnittsmarkering</h3>
    <p>Avsnitt kan markeres med luft mellom avsnitt eller med innrykk. I samme tekst velger man vanligvis én hovedmetode for å holde uttrykket konsekvent.</p>

    <h2>Teksttyper i en layout</h2>
    <p>På en side eller en digital løsning har tekst ofte ulike roller. Disse rollene har egne typografiske behov.</p>

    <h3>Brødtekst (paragraph)</h3>
    <p>Brødtekst er den vanlige teksten i avsnittene - den du leser mest av. Den settes for rolig rytme og høy lesbarhet.</p>

    <h3>Alternativer til brødtekst (andre tekstroller)</h3>
    <p><b>Overskrifter</b> viser struktur og prioritet (hva som er viktigst). De skiller seg ofte ut med størrelse, vekt og ekstra luft før/etter.</p>

    <p><b>Ingress</b> er en kort introduksjon som oppsummerer eller lokker inn leseren; den er ofte større enn brødtekst, men ikke like dominerende som overskrift.</p>
    
    <p><b>Bildetekst</b> forklarer et bilde eller en figur; den er ofte mindre enn brødtekst, men må fortsatt være lett å lese.</p>

    <p><b>Sitat/uthevet tekst</b> brukes for å trekke fram et poeng og settes ofte med mer luft, annen størrelse eller annen stil.</p>

    <p><b>Tekst i navigasjon/knapper</b> er funksjonell tekst som må være svært tydelig og ofte kort.</p>
`
}