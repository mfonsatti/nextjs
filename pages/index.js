import Head from "next/head";
import Link from "next/link";
import {
  Button,
  na,
  Navbar,
  Nav,
  Accordion,
  Card,
  useAccordionToggle,
  AccordionContext,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faArrowDown,
  faPlus,
  faMinus,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useCallback } from "react";
import { urlObjectKeys } from "next/dist/next-server/lib/utils";

const getContents = () => {
  fetch("http://localhost:1337/contents?page.name=home")
    .then((response) => response.json())
    .then((contents) => contents);
};

export default function Home() {
  const CustomToggle = ({ children, eventKey, callback }) => {
    const currentEventKey = useContext(AccordionContext);
    const decoratedOnClick = useAccordionToggle(
      eventKey,
      () => callback && callback(eventKey)
    );

    const isCurrentEventKey = currentEventKey === eventKey;

    const getIcon = useCallback(() => {
      return isCurrentEventKey ? faMinus : faPlus;
    }, [isCurrentEventKey]);

    return (
      <div
        onClick={decoratedOnClick}
        className="custom-toggle position-relative"
      >
        {children}
        <Button variant="outline-primary" className="btn-sm indicator">
          <FontAwesomeIcon icon={getIcon()} />
        </Button>
      </div>
    );
  };

  const FaqToggle = ({ children, eventKey, callback }) => {
    const currentEventKey = useContext(AccordionContext);
    const decoratedOnClick = useAccordionToggle(
      eventKey,
      () => callback && callback(eventKey)
    );

    const isCurrentEventKey = currentEventKey === eventKey;

    const getIcon = useCallback(() => {
      return isCurrentEventKey ? faMinus : faPlus;
    }, [isCurrentEventKey]);

    const isCollapsed = useCallback(() => {
      return !isCurrentEventKey ? "collapsed" : "";
    }, [isCurrentEventKey]);

    return (
      <div
        onClick={decoratedOnClick}
        className={`faq-toggle position-relative mb-3 ${isCollapsed()}`}
      >
        {children}
        <FontAwesomeIcon icon={getIcon()} className="indicator" />
      </div>
    );
  };

  const ScrollToBtn = () => {
    const handleClick = useCallback(() => {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }, []);
    return (
      <Button variant="outline-primary" onClick={handleClick}>
        <FontAwesomeIcon icon={faArrowUp} className="mr-2" />
        Top
      </Button>
    );
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <header id="header" className="fixed-top">
        <Navbar
          expand="lg"
          variant="dark"
          fixed="top"
          className="container py-4"
        >
          <Navbar.Brand href="#home" className="font-weight-bolder">
            Paolo Imperiale
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Chi sono</Nav.Link>
              <Nav.Link href="#link">Servizi di consulenza</Nav.Link>
              <Nav.Link href="#link">Clienti</Nav.Link>
              <Nav.Link href="#link">Certificazioni</Nav.Link>
              <Nav.Link href="#link">Contatti</Nav.Link>
            </Nav>
            <Button>
              <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
              Call to action
            </Button>
          </Navbar.Collapse>
        </Navbar>
      </header>
      <main>
        <section style={{ backgroundColor: "#37384e" }} className="pt-5 mt-5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 d-flex justify-content-end">
                <div className="mr-lg-5" style={{ maxWidth: "495px" }}>
                  <h1 className="display-4 text-light pb-2">
                    <span className="font-weight-light">
                      Professionista in{" "}
                    </span>
                    Marketing Digitale
                  </h1>
                  <p className="h4 font-weight-light text-light opacity-70 line-height-base">
                    Strategia, Formazione, e Trasformazione Digitale per le
                    Piccole e Medie Imprese
                  </p>
                  <Button variant="outline-primary" className="mt-4 mb-5">
                    <FontAwesomeIcon icon={faArrowDown} className="mr-2" />
                    Call to action
                  </Button>
                  <hr className="hr-light mb-5" />
                  <div className="row">
                    <div className="col-sm-4 mb-4 mb-sm-0">
                      <div className="h1 text-light mb-1">25</div>
                      <div className="h5 text-light font-weight-normal opacity-70 mb-2">
                        Anni di esperienza
                      </div>
                    </div>
                    <div className="col-sm-4 mb-4 mb-sm-0">
                      <div className="h1 text-light mb-1">44</div>
                      <div className="h5 text-light font-weight-normal opacity-70 mb-1">
                        Certificazioni conseguite
                      </div>
                      <span className="badge badge-pill badge-success">
                        More coming
                      </span>
                    </div>
                    <div className="col-sm-4">
                      <div className="h1 text-light mb-1">&gt; 500k</div>
                      <div className="h5 text-light font-weight-normal opacity-70 mb-1">
                        Budget gestito nel 2020
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <img
                  src="/paolo-imperiale.jpg"
                  className="selfie rounded-circle img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="cs-shape cs-shape-bottom cs-shape-curve bg-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3000 185.4">
              <path
                fill="currentColor"
                d="M3000,0v185.4H0V0c496.4,115.6,996.4,173.4,1500,173.4S2503.6,115.6,3000,0z"
              ></path>
            </svg>
          </div>
        </section>
        <section className="pt-5 mt-5">
          <div className="col-md-5 mx-auto text-center mb-5 pt-3 pt-lg-4">
            <h2 className="h1 mb-4">
              Garanzia{" "}
              <span className="bg-faded-primary rounded text-primary px-3 py-2">
                Certificata
              </span>
            </h2>
            <p className="text-muted">
              Consulente Certificato Google Partner e Microsoft Advertising.
              Esperto professionista in marketing digitale, specializzato in
              Google Analytics e gestione campagne Google Ads e Bing Ads.
              Delineo ed implemento efficaci strategie ‘data driven‘ per
              convertire le visite al vostro sito in vendite o contatti utili al
              vostro business.
            </p>
            <Button>
              <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
              Call to action
            </Button>
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-8">
                <img src="googlePartner.svg" className="img-fluid" />
              </div>
            </div>
            <div className="row">
              <div className="col-8 offset-4">
                <div className="microsoft-ads bg-white p-5">
                  <img src="MicrosoftAds.svg" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-5 mt-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-5 text-center text-md-left mb-5 mb-md-0">
                <h2 className="mb-3">Al tuo servizio</h2>
                <p className="text-muted mb-4 pb-2">
                  Esperto professionista in marketing digitale, specializzato in
                  Google Analytics e gestione campagne Google Ads e Bing Ads.
                  Delineo ed implemento efficaci strategie ‘data driven‘ per
                  convertire le visite al vostro sito in vendite o contatti
                  utili al vostro business.
                </p>
                <a className="btn btn-primary" href="#">
                  <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                  Call to action
                </a>
              </div>
              <div className="bg-shape col-lg-8 col-md-7">
                <div className="mx-auto" style={{ maxWidth: "610px" }}>
                  <div className="row align-items-center">
                    <div className="col-sm-6">
                      <Accordion>
                        <div className="card bg-light shadow-lg rounded-lg p-4 mb-4 text-center text-sm-left">
                          <CustomToggle eventKey="0">
                            <img
                              className="d-inline-block mb-4 mt-2"
                              width="100"
                              src="strategy-and-innovation.svg"
                              alt="Icon"
                            />
                            <h3 className="h5 mb-2">Strategie “Data-Driven”</h3>
                            <p className="subtitle">
                              Insights utili per le vostre decisioni di business
                            </p>
                            <Accordion.Collapse eventKey="0">
                              <p className="font-size-sm">
                                Le piccole o medie imprese (PMI) oggi hanno due
                                importanti problemi con i dati: il primo è la
                                loro qualità e attendibilità (spesso ne
                                raccolgono troppi e/o in forma fallace). Il
                                secondo è la difficoltà ad assumere risorse
                                interne specializzate nell’analisi e
                                manipolazione dei dati per ottenere gli
                                “insights” utili a guidare le decisioni
                                strategiche. Una consulenza esterna qualificata
                                può rappresentare una soluzione a costi
                                decisamente inferiori all’assunzione di una
                                risorsa, o all’affidarsi ad una agenzia.
                              </p>
                            </Accordion.Collapse>
                          </CustomToggle>
                        </div>
                        <div className="card bg-light shadow-lg rounded-lg p-4 mb-4 text-center text-sm-left">
                          <CustomToggle eventKey="1">
                            <img
                              className="d-inline-block mb-4 mt-2"
                              width="100"
                              src="hr-and-talent.svg"
                              alt="Icon"
                            />
                            <h3 className="h5 mb-2">
                              Pianificazione e Gestione operativa
                            </h3>
                            <p className="subtitle">
                              Implementazione e pianificazione della strategia
                            </p>
                            <Accordion.Collapse eventKey="1">
                              <p className="font-size-sm">
                                Esecuzione della strategia concordata e suo
                                allineamento agli obiettivi. Pianificazione e
                                gestione operativa quotidiana delle campagne di
                                marketing digitale (Google Ads e Bing Ads) e
                                loro continua ottimizzazione per il
                                raggiungimento del miglior ritorno
                                sull’investimento possibile. Continua
                                misurazione, testing, e comprensibile reporting
                                completano l’attività consulenziale offerta al
                                Cliente.
                              </p>
                            </Accordion.Collapse>
                          </CustomToggle>
                        </div>
                        <div className="card bg-light shadow-lg rounded-lg p-4 mb-4 text-center text-sm-left">
                          <CustomToggle eventKey="2">
                            <img
                              className="d-inline-block mb-4 mt-2"
                              width="100"
                              src="training-and-certifications.svg"
                              alt="Icon"
                            />
                            <h3 className="h5 mb-2">
                              Aggiornamento Professionale
                            </h3>
                            <p className="font-size-sm">
                              Continuo aggiornamento su piattaforme in costante
                              evoluzione
                            </p>
                            <Accordion.Collapse eventKey="2">
                              <p className="font-size-sm">
                                Lorem ipsum dolor sit amet
                              </p>
                            </Accordion.Collapse>
                          </CustomToggle>
                        </div>
                      </Accordion>
                    </div>
                    <div className="col-sm-6">
                      <Accordion defaultActiveKey="4">
                        <div className="card bg-light shadow-lg rounded-lg p-4 mb-4 text-center text-sm-left">
                          <CustomToggle eventKey="3">
                            <img
                              className="d-inline-block mb-4 mt-2"
                              width="100"
                              src="advanced-analytics.svg"
                              alt="Icon"
                            />
                            <h3 className="h5 mb-2">Advanced Analytics</h3>
                            <p>
                              Find aute irure dolor in reprehend in voluptate
                              velit esse cillum dolore eu fugiat nulla pariatur.{" "}
                            </p>
                            <Accordion.Collapse eventKey="3">
                              <p className="font-size-sm">
                                Lorem ipsum dolor sit amet
                              </p>
                            </Accordion.Collapse>
                          </CustomToggle>
                        </div>
                        <div className="card bg-light shadow-lg rounded-lg p-4 mb-4 text-center text-sm-left">
                          <CustomToggle eventKey="4">
                            <img
                              className="d-inline-block mb-4 mt-2"
                              width="100"
                              src="sales-and-marketing.svg"
                              alt="Icon"
                            />
                            <h3 className="h5 mb-2">
                              Creazione e Trasferimento del Valore
                            </h3>
                            <p className="subtitle">
                              Principi e metodo della mia attività di consulente
                            </p>
                            <Accordion.Collapse eventKey="4">
                              <p className="description font-size-sm">
                                In oltre 10 anni di esperienza come consulente,
                                ho sempre privilegiato i valori della
                                trasparenza, onestà intellettuale, riservatezza,
                                ed il rispetto dei ruoli. Ho maturato un metodo
                                operativo collaudato che garantisce a tutti i
                                clienti risultati in tempi ragionevolmente
                                brevi. I Clienti sono seguiti personalmente e
                                con molti di essi mi pregio di aver instaurato
                                rapporti di collaborazione continuativi. Abbiamo
                                raggiunto obiettivi ambiziosi e ho potuto nel
                                tempo, trasferire quella conoscenza degli
                                strumenti necessaria a comprendere il valore
                                generato.
                              </p>
                            </Accordion.Collapse>
                          </CustomToggle>
                        </div>
                      </Accordion>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-5 mt-5 bg-white">
          <div className="container pt-5 pb-4 py-md-6 py-lg-7">
            <div className="text-center mb-5 pt-3 pt-lg-4">
              <h2 className="h1 mb-4">
                Aree{" "}
                <span className="bg-faded-primary rounded text-primary px-3 py-2">
                  Operative
                </span>
              </h2>
              <p className="text-muted">
                Scopri a quale dei vertical di mercato in cui opero appartiene
                la tua azienda
              </p>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <Accordion defaultActiveKey="1">
                  <FaqToggle eventKey="0">
                    <h3 className="h5 title">
                      Aziende B2C e Studi Professionali
                    </h3>
                    <Accordion.Collapse eventKey="0">
                      <p className="font-size-md description">
                        In questa categoria rientrano tutte quelle aziende e
                        studi professionali che non “vendono” online prodotti o
                        servizi ma desiderano ricevere dai visitatori del sito
                        richieste di informazioni e/o preventivi (via form o
                        telefono), iscrizioni a newsletters, etc. In questo
                        particolare segmento particolare attenzione è rivolta al
                        costo di acquisizione di un “lead”, e alla sua “qualità”
                        (propensione a convertirsi da richiesta a conferimento
                        di servizi). Nel corso degli anni ho generato importanti
                        risultati nei servizi alla persona (catena di dentisti
                        nazionale), per un importante gruppo di residenze
                        sanitarie assistite, e studi professionali.
                      </p>
                    </Accordion.Collapse>
                  </FaqToggle>
                  <FaqToggle eventKey="1">
                    <h3 className="h5 title">E-commerce, vendite online</h3>
                    <Accordion.Collapse eventKey="1">
                      <p className="font-size-md description">
                        Nel segmento e-commerce (vendite dirette online) ho
                        maturato esperienze per prodotti di largo consumo (B2C)
                        e prodotti rivolti ad aziende (B2B). In questo comparto
                        particolare attenzione viene rivolta al tracciamento e
                        misurazione del “negozio” (enhanced ecommerce tracking)
                        e quindi del ritorno dell’investimento online.
                      </p>
                    </Accordion.Collapse>
                  </FaqToggle>
                  <FaqToggle eventKey="2">
                    <h3 className="h5 title">
                      Aziende B2B e SAAS (software as a service)
                    </h3>
                    <Accordion.Collapse eventKey="2">
                      <p className="font-size-md description">
                        Nel segmento B2B e Saas ho seguito e seguo tutt’ora
                        importanti clienti operanti nel settore Eventi e
                        Congressi, vendita e noleggio Containers e software as a
                        service. Per queste tipologie di clienti la misurazione
                        della vendita “diretta” è più complessa perchè il ciclo
                        di vendita nel canale aziendale può richiedere tempi
                        lunghi e coinvolgere più stake-holders.
                      </p>
                    </Accordion.Collapse>
                  </FaqToggle>
                  <FaqToggle eventKey="3">
                    <h3 className="h5 title">Agenzie e Sviluppo Web</h3>
                    <Accordion.Collapse eventKey="3">
                      <p className="font-size-md description">
                        Molte agenzie di sviluppo siti non dispongono nel loro
                        staff di professionisti specializzati o risorse dedicate
                        alla gestione del marketing digitale dei loro clienti.
                        Offro alle agenzie la possibilità di gestire il loro
                        intero centro clienti (o solo di alcuni account compresi
                        in essi).
                      </p>
                    </Accordion.Collapse>
                  </FaqToggle>
                  <FaqToggle eventKey="4">
                    <h3 className="h5 title">Travels, Hotels</h3>
                    <Accordion.Collapse eventKey="4">
                      <p className="font-size-md description">
                        Il travel è uno dei mercati online più competitivi sui
                        motori di ricerca, per la presenza di un elevato numero
                        di operatori e players mondiali come le OTA’s (Booking,
                        Expedia etc.). La crisi del Covid-19 trasformerà
                        radicalmente l’offerta ed al tempo stesso la domanda dei
                        servizi alberghieri e delle vacanze. Attraverso gli
                        strumenti digitali è possibile scoprire il nuovo
                        “customer journey” del cliente, individuare la
                        comunicazione più efficace, ricalibrare il budget e il
                        mix dei canali, e/o riposizionare l’offerta.
                      </p>
                    </Accordion.Collapse>
                  </FaqToggle>
                  <FaqToggle eventKey="5">
                    <h3 className="h5 title">
                      Onlus e No-Profit (Google Grants)
                    </h3>
                    <Accordion.Collapse eventKey="5">
                      <p className="font-size-md description">
                        Google supporta le organizzazioni no-profit e Onlus con
                        un programma dedicato chiamato Google Grants. Una volta
                        approvata la domanda, il programma prevede
                        l’assegnazione di 10’000USD mensili di pubblicità
                        gratuita da pianificare sul motore di ricerca. Google
                        richiede che l’attività pubblicitaria avviata con il
                        Grant risponda a determinati e stringenti requisiti di
                        qualità di gestione pena la sospensione del supporto.
                        Posso aiutare la vostra organizzazione no-profit/Onlus a
                        presentare la domanda per il Google Grants e quindi la
                        sua quotidiana gestione.
                      </p>
                    </Accordion.Collapse>
                  </FaqToggle>
                </Accordion>
              </div>
              <div className="col-lg-6">
                <img src="faq-image.jpg" className="img-fluid" />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container pt-5 pb-4 py-md-6 py-lg-7">
            <div className="text-center mb-5 pt-3 pt-lg-4">
              <h2 className="h1 mb-4">
                Preventivo{" "}
                <span className="bg-faded-primary rounded text-primary px-3 py-2">
                  Gratuito
                </span>
              </h2>
              <p className="text-muted">
                Fai crescere il tuo business migliorando il tuo Marketing Online
              </p>
              <Button>
                <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                Contattami ora
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <Navbar expand="lg" variant="dark" className="container py-4">
          <Navbar.Brand href="#home" className="font-weight-bolder">
            Paolo Imperiale
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">
              &copy; All rights reserved. Made by Matteo Fonsatti
            </Nav.Link>
            <Nav.Link href="#link">P.IVA 0123456789</Nav.Link>
          </Nav>
          <ScrollToBtn />
        </Navbar>
      </footer>
    </>
  );
}
