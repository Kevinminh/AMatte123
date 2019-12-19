import React, { Component } from "react";
import ContactForm from "./contactForm";

class aboutUs extends Component {
  render() {
    return (
      <div>
        <div className="aboutUS-container">
          <div className="aboutUs-title">
            <h1>Hvem er vi?</h1>
          </div>
          <div className="aboutUS-content">
            <div className="aboutUS-info">
              <h2>Helt rå matte undervisning</h2>
              <p>
                I 2019 er det ikke lenger behov for dyre, tunge bøker og
                avanserte bøker. Vi tilbyr videoforelesninger, oppgaveløsning og
                fagrelatert hjelp. Alt samlet på en platform for deg.
              </p>
            </div>
            <div className="aboutUS-img"></div>
            <div className="aboutUS-img"></div>
            <div className="aboutUS-info">
              <h2>Enklere og billigere</h2>
              <p>
                Alle kapitlene er satt opp slik at vi har teorivideoer i tillegg
                til at vi løser eksempeloppgaver. Du kommer deg enkelt gjennom
                pensum, og alt skjer på ditt eget tempo. Ta kontroll over din
                egen undervisning idag.
              </p>
            </div>
          </div>
          <div className="aboutUS-mainContainer">
            <div className="aboutUS-mainImg"></div>
          </div>
          <div className="aboutUS-container">
            <div className="aboutUs-title">
              <h1>Vår motivasjon</h1>
              <p>
                AMatte er stiftet av studenter som har gått lei av det
                konvensjonelle utdanningssystemet hvor man våkner opp tidlig for
                å dra til en forelesning eller en øvingstime som er stappa full.
                Hvor mange ganger har ikke du dratt til en forelesning hvor
                læreren bruker de første 30 minuttene på å fortelle om sine
                livshistorier som egentlig ikke interesserer deg…
              </p>
              <br />
              <p>
                Eller hvor du drar helt til skolen, kun for å finne ut at
                forelesningen har blitt avlyst? Hvor mange ganger har du ikke
                vært på en øvingstime som er stappa full hvor du egentlig ikke
                får hjelpen du trenger siden det er 30 stk foran deg i kø…?
                Frykt ikke! Vi har tatt alle disse skuddene for deg og
                konkludert med at nok er nok! På det grunnlaget har vi opprettet
                oslomath. Nettsiden gir deg en video-gjennomgang av hele pensum;
                når du vil og hvor du vil. På den måten kan du alltid:
              </p>
            </div>
            <div className="ourTeam-container">
              <div className="aboutUs-title">
                <h1>Vårt team</h1>
              </div>
              <div className="flex flex-center">
                <div className="team-sec flex-gap"></div>
                <div className="team-sec flex-gap"></div>
                <div className="team-sec flex-gap"></div>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    );
  }
}

export default aboutUs;
