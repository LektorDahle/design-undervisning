function drawBrief() {
    const main = document.querySelector("main");
    main.id = "";
    main.innerHTML = "";
    const article = document.createElement("article");
    main.append(article);
    article.id = "main-text-content";
    article.innerHTML = `
    <h1> Designbrief </h1>
    <h2> Innledning </h2>
    <p>Skolen ønsker en kampanje som forbedrer 
    elevenes mappe- og filstruktur ved bruk av plakater.</p>
    <h2>Bakgrunn</h2>
    <p>Ustrukturert lagring og manglende kontroll på filer
    skaper tap av tid og tap av arbeid for elevene på skolen.</p>
    <h2>Ønsket resultat</h2>
    <p>Ryddig filstruktur.</p>
    <h2>Strategi</h2>
    <p>Resultatet av dette arbeidet skal støtte arbeidsvaner
    som gir effektivitet, kvalitet og relevans i de fagene
    og på linjene skolen har.</p>
    <h2>Krav til designers kompetanse</h2>
    <p>Designer må forstå mappestruktur og kunne forenkle
    informasjon, bruke tydelig visuelt hierarki, sikre tilgjengelighet
    og levere kanaltilpassede filer til klient.</p>
    <h2>Evaluering</h2>
    <p>Levere arbeid med tydelig visuelt hierarki, god lesbarhet
    og kanaltilpassede filer. Designer klarer å kommunisere arbeid
    underveis på en god måte.</p>
    <h2>Fremdriftsplan</h2>
    <p>1. Gjøre seg kjent med relevant programvare.</p>
    <p>2. Følge designprosessen, med minst én revisjonsrunde.</p>
    <p>3. Endlig leveranse, av kanaltilpassede filtyper.</p>
    `
}