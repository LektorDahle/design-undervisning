
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

    Ulike typer skrift

    Skrifttyper kan beskrives med noen praktiske kategorier. Kategoriene er ikke absolutte, men brukes for å snakke presist om uttrykk og bruksområder.

    Serif
    Skrift der bokstavene har seriffer (små avslutninger på enden av strekene). Serif brukes ofte i lengre tekster, særlig i trykte tekster, og kan gi et mer klassisk preg.

    Sans serif
    Skrift uten seriffer. Sans serif er vanlig i digitale flater, presentasjoner og moderne design, og oppleves ofte som ren og tydelig.

    Geometrisk
    Skrift med former som virker “konstruert” med enkel geometri (runde former, jevne kurver, lik vekt). Brukes ofte i overskrifter og grafisk profil, men kan være mindre behagelig i lange tekster dersom den blir for stram.

    Monospace
    Skrift der alle tegn har samme bredde. Den brukes særlig til kode og tabeller fordi den gjør det enkelt å stille opp kolonner, men er vanligvis ikke førstevalg i løpende tekst.

    Script
    Skrift som etterligner håndskrift. Den brukes mest i korte mengder (for eksempel en tittel, en signatur eller et dekorativt element), fordi lesbarheten ofte faller når teksten blir lang.

    Display
    Skrifter laget for å gi tydelig karakter i store størrelser. De passer best i overskrifter og plakatelementer, ikke i løpende tekst.

    Justere typogafienj

    Når du har valgt skrifttype, kan du gjøre teksten mer lesbar ved å kontrollere avstander og tekstflyt.

    Skriftstørrelse
    Skriftstørrelsen må passe til situasjonen: skjerm, avstand til leseren og hvor mye tekst som skal leses. For liten tekst gir høyere belastning, mens for stor tekst kan gi for korte linjer og urolig rytme.

    Linjeavstand (line-height)
    Avstanden mellom linjene. For tett linjeavstand gir en kompakt tekstblokk; for stor linjeavstand gjør at linjene mister sammenheng. Linjeavstanden justeres ofte etter skriftstørrelse og linjelengde.

    Linjelengde
    Hvor lange linjene er. For lange linjer gjør det vanskelig å finne starten på neste linje. For korte linjer gir en “hakkete” leserytme. Målet er en stabil rytme der øyet lett finner neste linje.

    Ordmellomrom
    Avstanden mellom ord. For store mellomrom kan gi “hull” i teksten og urolig rytme, særlig i blokkjustert tekst. For små mellomrom kan gjøre at ordene flyter sammen.

    Bokstavavstand (tracking / letter-spacing)
    Justerer den generelle avstanden mellom bokstaver. Litt økning kan hjelpe i små størrelser eller i versaler, men for mye gjør at ordformene blir vanskeligere å lese.

    Kerning
    Justerer avstanden mellom bestemte bokstavpar (for eksempel A og V) for å få jevnere optisk avstand. Kerning er mest synlig i store størrelser, som overskrifter og logoer.

    Orddeling (hyphenation)
    Styrer når ord kan deles med bindestrek ved linjeskift. Riktig orddeling kan gi jevnere linjebrudd og mindre “store hull” i teksten, spesielt ved blokkjustering. For mye orddeling kan derimot gjøre teksten urolig.

    Orphans og widows
    Dette handler om uheldige linjebrudd i avsnitt.
    - Orphan: en kort linje som blir stående alene øverst i ny side/spalte.
    - Widow: en kort siste linje i avsnitt som blir stående alene nederst i side/spalte.
    Målet er å unngå slike brudd fordi de ser uryddige ut og kan forstyrre lesingen.

    Avsnittsmarkering
    Avsnitt kan markeres med luft mellom avsnitt eller med innrykk. I samme tekst velger man vanligvis én hovedmetode for å holde uttrykket konsekvent.

    Teksttyper i en layout

    I en side eller en digital løsning har tekst ofte ulike roller. Disse rollene har egne typografiske behov.

    Brødtekst (løpende tekst)
    Brødtekst er den vanlige teksten i avsnittene - den du leser mest av. Den settes for rolig rytme og høy lesbarhet.

    Alternativer til brødtekst (andre tekstroller)
    Overskrifter viser struktur og prioritet (hva som er viktigst). De skiller seg ofte ut med størrelse, vekt og ekstra luft før/etter.

    Ingress er en kort introduksjon som oppsummerer eller lokker inn leseren; den er ofte større enn brødtekst, men ikke like dominerende som overskrift.
    
    Bildetekst forklarer et bilde eller en figur; den er ofte mindre enn brødtekst, men må fortsatt være lett å lese.

    Sitat / uthevet tekst brukes for å trekke fram et poeng og settes ofte med mer luft, annen størrelse eller annen stil.

    Tekst i navigasjon/knapper er funksjonell tekst som må være svært tydelig og ofte kort.
`
}