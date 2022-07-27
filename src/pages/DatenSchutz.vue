<template>
  <div class="wrapper">
    <p><strong>Datenschutzerklärung</strong></p>

    <p>
      In dieser Datenschutzerklärung informieren wir Sie über die Verarbeitung
      personenbezogener Daten bei der Nutzung dieser Website.
    </p>
    <p><strong>Verantwortlicher</strong></p>
    <p>
      Verantwortlich für die Datenverarbeitung ist<br /><em
        >Natalia Ehret, Karl-Oldewurtel-Strasse 25 33659 Bielefeld Deutschland,
        +4917634483555, natalia.ehret@gmail.com</em
      >
    </p>
    <p><strong>Personenbezogene Daten</strong></p>
    <p>
      Personenbezogene Daten sind alle Informationen, die sich auf eine
      identifizierte oder identifizierbare natürliche Person (im Folgenden
      "betroffene Person") beziehen. Als identifizierbar wird eine natürliche
      Person angesehen, die direkt oder indirekt, insbesondere mittels Zuordnung
      zu einer Kennung wie einem Namen, zu einer Kennnummer, zu Standortdaten,
      zu einer Online-Kennung oder zu einem oder mehreren besonderen Merkmalen
      identifiziert werden kann, die Ausdruck der physischen, physiologischen,
      genetischen, psychischen, wirtschaftlichen, kulturellen oder sozialen
      Identität dieser natürlichen Person sind.
    </p>
    <p><strong>Daten beim Websiteaufruf</strong></p>
    <p>
      Wenn Sie diese Website nur nutzen, um sich zu informieren und keine Daten
      angeben, dann verarbeiten wir nur die Daten, die zur Anzeige der Website
      auf dem von Ihnen verwendeten internetfähigen Gerät erforderlich sind. Das
      sind insbesondere:
    </p>
    <ul>
      <li>IP-Adresse</li>
      <li>Datum und Uhrzeit der Anfrage</li>
      <li>jeweils übertragene Datenmenge</li>
      <li>die Website, von der die Anforderung kommt</li>
      <li>Browsertyp und Browserversion</li>
      <li>Betriebssystem</li>
    </ul>
    <p>
      Rechtsgrundlage für die Verarbeitung dieser Daten sind berechtigte
      Interessen gemäß Art. 6 Abs. 1 UAbs. 1 Buchstabe f) DSGVO, um die
      Darstellung der Website grundsätzlich zu ermöglichen.
    </p>
    <p>
      Darüber hinaus können Sie verschiedene Leistungen auf der Website nutzen,
      bei der weitere personenbezogene und nicht personenbezogene Daten
      verarbeitet werden.
    </p>
    <p><strong>Ihre Rechte</strong></p>
    <p>Als betroffene Person haben Sie folgende Rechte:</p>
    <ul>
      <li>
        Sie haben ein Auskunftsrecht bezüglich der Sie betreffenden
        personenbezogenen Daten, die der Verantwortliche verarbeitet (Art. 15
        DSGVO),
      </li>
      <li>
        Sie haben das Recht auf Berichtigung der Sie betreffenden Daten, wenn
        diese unrichtig oder unvollständig gespeichert werden (Art. 16 DSGVO),
      </li>
      <li>Sie haben das Recht auf Löschung (Art. 17 DSGVO),</li>
      <li>
        Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer
        personenbezogenen Daten zu verlangen (Art. 18 DSGVO),
      </li>
      <li>Sie haben das Recht auf Datenübertragbarkeit (Art. 20 DSGVO),</li>
      <li>
        Sie haben ein Widerspruchsrecht gegen die Verarbeitung Sie betreffender
        personenbezogener Daten (Art. 21 DSGVO),
      </li>
      <li>
        Sie haben das Recht nicht einer ausschließlich auf einer automatisierten
        Verarbeitung – einschließlich Profiling – beruhenden Entscheidung
        unterworfen zu werden, die Ihnen gegenüber rechtliche Wirkung entfaltet
        oder sie in ähnlicher Weise erheblich beeinträchtigt (Art. 22 DSGVO),
      </li>
      <li>
        Sie haben das Recht, sich bei einem vermuteten Verstoß gegen das
        Datenschutzrecht bei der zuständigen Aufsichtsbehörde zu beschweren
        (Art. 77 DSGVO). Zuständig ist die Aufsichtsbehörde an Ihrem üblichen
        Aufenthaltsort, Arbeitsplatz oder am Ort des vermuteten Verstoßes.
      </li>
    </ul>
    <br />
    <p><strong>Einsatz von Cookies</strong></p>
    <p>
      Beim Besuch der Website können Cookies auf Ihrem Gerät gespeichert werden.
      Cookies sind kleine Textdateien, die von dem von Ihnen verwendeten Browser
      gespeichert werden. Cookies können keine Programme ausführen und auch
      keine Viren auf Ihr Gerät übertragen. Die Stelle, die den Cookie setzt,
      kann darüber jedoch bestimmte Informationen erhalten. Cookies dienen dazu,
      das Internetangebot benutzerfreundlicher zu machen. Mithilfe von Cookies
      kann beispielsweise das Gerät, mit dem diese Website aufgerufen wurde, bei
      einem erneuten Aufruf erkannt werden.
    </p>
    <p>
      Durch die Browsereinstellungen lässt sich das Setzen von Cookies
      einschränken oder verhindern. So kann z. B. nur die Annahme von Cookies,
      die von Drittanbietern stammen, blockiert werden oder aber auch die
      Annahme von allen Cookies. Durch das Blockieren sind jedoch möglicherweise
      nicht mehr alle Funktionen dieser Website nutzbar. Im weiteren Text dieser
      Datenschutzerklärung informieren wir Sie konkret, an welchen Stellen und
      zu welchen Zwecken Cookies auf den Seiten zum Einsatz kommen.
    </p>
    <projects-footer></projects-footer>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrapper {
  padding-top: 80px;
  width: 95%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  letter-spacing: -0.7px;
  line-height: 1.2;
  margin-bottom: 15rem;
  font-size: 2rem;
}

@media (max-width: 1293px) {
  .wrapper {
    grid-template-columns: 1fr;
    gap: 2%;
  }

  .photo {
    justify-self: center;
    /* margin-right: 25px; */
  }

  .text {
    margin-left: 25px;
    font-size: 30px;
    margin-top: 90px;
  }
}

@media (max-width: 460px) {
  .text {
    font-size: 25px;
  }
}
</style>
