import React, { Component } from "react";

class testFAQ extends Component {
  render() {
    return (
      <div className="FAQ-body">
        <div className="FAQ-container">
          <h3 className="FAQ-heading">Ofte stilte spørsmål</h3>
          <div className="faqs">
            <details className="FAQ-details">
              <summary className="FAQ-answer">
                Er det gratis å prøve AMatte?
              </summary>
              <p className="text">
                Ja, du får tilgang til første del av de fleste kursene våre hos
                EnkelMatte når du registrer deg helt gratis. På den måten kan du
                prøve ut kursene før du betaler for å få tilgang til hele kurset
                du ønsker.
              </p>
            </details>
            <details className="FAQ-details">
              <summary className="FAQ-answer">
                Hva lærer jeg meg med AMatte?
              </summary>
              <p className="text">
                Du vil kunne innhente deg relevant kompetanse innenfor ditt
                trinn i matematikk. Gjennom videoforelesninger og fagrelevante
                quizoppgaver vil du bygge din fundamentale kunnskap innenfor
                fagtrinnet ditt i matematikk.
              </p>
            </details>
            <details className="FAQ-details">
              <summary className="FAQ-answer">
                Får jeg bedre karakter om jeg bruker AMatte?
              </summary>
              <p className="text">
                Vi garanterer ikke at du får en bedre karakter ved å bruke oss
                da dette er helt opp til den enkelte hvor mye tid personen
                legger inn arbeidet selv. Men vi henviser til at tidligere
                elever (faktisk 8 av 10) har forbedret sine karakterer drastisk.
              </p>
            </details>
            <details className="FAQ-details">
              <summary className="FAQ-answer">
                Hvem holder kursene hos AMatte? Kan jeg være sikker på at de kan
                faget?
              </summary>
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                aliquam sem vitae nibh hendrerit eleifend vitae aliquet ligula.
                Mauris rutrum elit ac sapien mattis, at imperdiet nunc commodo.
              </p>
            </details>
            <details className="FAQ-details">
              <summary className="FAQ-answer">
                Lurer du fortsatt på noe?
              </summary>
              <p className="text">
                Svarte ikke noen av spørsmålene på spørsmålet ditt?
                <br />
                <br />
                Ta hjerne direkte kontakt med oss! Send inn din hendvendelse og
                vi tar kontakt med deg så raskt som mulig.
              </p>
            </details>
          </div>
        </div>
      </div>
    );
  }
}

export default testFAQ;
