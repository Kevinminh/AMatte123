import React, { Component } from "react";

class Cookies extends Component {
  render() {
    return (
      <div>
        <div className="grid grid-column-box">
          <div className="box-container">
            <span className="">
              <h3>Informasjonskapsler (cookies)</h3>
              <p>
                Informasjonskapsler kan være til stor hjelp og gi en bedre
                brukeropplevelse. www.amatte.no bruker Informasjonskapsler i
                sine nettløsninger.
              </p>
              <p>Det finnes to hovedtpyer av cookies:</p>
              <p className="no-margin">
                1. En permanent cookie ligger igjen på besøkerens datamaskin for
                en bestemt tid.
              </p>
              <p>
                2. En sessioncookie lagres midlertidig i datamaskinens
                hukommelse i løpet av tiden en besøker er inne på en nettside.
                Sessioncookies forsvinner når du lukker din nettleser.
              </p>
            </span>
            <span className="">
              <h3 style={{ paddingTop: "15px" }}>Samtykke</h3>
              <p className="no-margin">
                Ved å benytte AMattes nettsider samtykker du i at vi kan
                etterlate informasjonskapsler i din nettleser. De fleste moderne
                nettlesere (Google Chrome, Internet Explorer, Firefox, Safari,
                Opera, etc.) er innstilt på å akseptere informasjonskapsler
                automatisk.
              </p>
              <p style={{ fontWeight: "700" }}>
                Dersom du ønsker å deaktivere informasjonskapsler for din
                nettleser, kan du gjøre dette via nettleserens
                sikkerhetsinnstillinger. Mer om fremgangsmåte nederst på siden.
              </p>
            </span>
            <span className="">
              <h3 style={{ paddingTop: "15px" }}>
                Hva bruker AMatte informasjonskapsler til?
              </h3>
              <p>
                www.amatte.no benytter aldri informasjonskapsler i den hensikt å
                kartlegge enkeltbrukeres bruksmønster eller annen informasjon
                som vil kunne krenke personvernet.
              </p>
              <p>AMatte bruker informasjonskapsler til følgende formål:</p>
              <ul>
                <li>
                  For å lagre brukerinnstillinger - som f.eks visningsspråk
                </li>
                <li>For å håndtere pålogging og sesjoner</li>
              </ul>
            </span>
            <span className="">
              <h3 style={{ paddingTop: "15px" }}>
                Hvordan fjener man cookies?
              </h3>
              <p>
                Dersom du ikke lenger vil bruke cookies, kan du slå av cookies i
                innstillingene til din nettleser. Du kan også stille inn
                nettleseren slik at du blir spurt hver gang Enkeleksamens
                nettsiden prøver å plassere en cookie på din datamaskin. Du kan
                også bruke nettleseren din til å slette tidligere lagrede
                cookies.
              </p>
              <p>
                Om du bruker PC, kan cookies fjernes ved hjelp av
                snarveiskommandoen [CTRL]+[SHIFT]+[Delete].
              </p>
              <p>
                Hvis det ikke fungerer eller hvis du bruker en MAC, klikk på
                linken for den nettleseren du bruker:
              </p>
              <ul>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://support.mozilla.org/no/kb/slett-informasjonskapsler-fjerne-informasjon-netts"
                  >
                    Mozilla Firefox
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://support.google.com/chrome/answer/95647?hl=no"
                  >
                    Google Chrome
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://support.apple.com/no-no/guide/safari/sfri11471/mac"
                  >
                    Safari
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://support.microsoft.com/nb-no/help/17442/windows-internet-explorer-delete-manage-cookies#ie=ie-11"
                  >
                    Internet Explorer
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://help.opera.com/en/opera/Windows/1918/en/"
                  >
                    Opera
                  </a>
                </li>
              </ul>
              <p>
                Dersom du deaktiverer cookies vil deler til hele nettsidens
                funksjonalitet være begrenset. Du kan for eksempel ikke
                gjennomføre et kjøp eller logge inn.
              </p>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Cookies;
