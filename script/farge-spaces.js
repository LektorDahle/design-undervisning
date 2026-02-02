function drawSpaces() {
    const main = document.querySelector("main");
    main.id = "";
    main.innerHTML = "";
    const article = document.createElement("article");
    main.append(article);
    article.id = "main-text-content";
    article.innerHTML = `
    <h1>CIE og oppfattelse av farger</h1>
   <p> CIE er en fargemodell som beskriver hvordan vi mennesker oppfatter farger. CIE tar utgangspunkt i 
   en gjennomsnittsperson uten synsutfordringer.</p>
   <img src="./img/farger/staver-tapper.svg" alt="Illustrasjon av øyet med staver og tapper på retina">
   <p>Menneskeøyet har to typer sanseceller, staver (rods) og tapper (cones). Stavene (ca. 75-80 millioner celler) er veldig 
   lysfølsomme og ser bare i gråtoner, ikke farger. Disse gjør det mulig for oss å se i mørket. Tappene 
   (ca. 4-6 millioner celler) gjør at vi kan se farger og at vi ser skarpt i dagslys.</p>
   <img src="./img/farger/cones.png" alt="LMS Cones space">
   <p>Vi har tre typer tapper. Lange tapper (L), medium (M) og korte tapper (S). Disse sanser ulike farge-frekvenser.
   L sanser oransje best, M snaser grønn best og S sanser blå best. </p>
   <h2>RGB</h2>
   <p>RGB er et additivt fargesystem. Det betyr at farger kommer fra en kilde, og at vi får ulike farger ved å 
   legge til nye frekvenser. Moderne digitale skjermer bruker RGB for å skape farger.</p>
   <img src="./img/farger/rgb.avif" alt="RGB-eksempler">
   <h2>CMY</h2>
   <img src="./img/farger/cmy.avif" alt="CMY-eksempler">
   <p>Printere bruke CMYK, der K er key-value for å oppnå bedre svart farge. CMY er et subtraktivt fargesystem,
   dette betyr at fargene vi ser er refleksjoner på en overflate, og at farger skapes ved å fjerne ulike frekvenser.
   <img src="./img/farger/cmyk-refleksjon.svg" alt="CMYK-refleksjon">
 `;
}