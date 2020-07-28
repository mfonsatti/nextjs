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
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useCallback } from "react";

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

  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Navbar
        expand="lg"
        variant="dark"
        sticky="top"
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
      <main>
        <section style={{ backgroundColor: "#37384e" }} className="pt-lg-5">
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
                  className="selfie rounded-circle"
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
        <section>
          <div className="container pt-5 pb-4 py-md-6 py-lg-7">
            <div className="text-center mb-5 pt-3 pt-lg-4">
              <h2 className="h1 mb-4">
                Garanzia{" "}
                <span className="bg-faded-primary rounded text-primary px-3 py-2">
                  Certificata
                </span>
              </h2>
              <p className="text-muted">
                Consulente Certificato Google Partner e Bing Ads
              </p>
            </div>
            <div className="row">
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
              <div className="col-lg-8 col-md-7 bg-position-center bg-no-repeat">
                <div className="mx-auto" style={{ maxWidth: "610px" }}>
                  <div className="row align-items-center">
                    <div className="col-sm-6">
                      <Accordion defaultActiveKey="0">
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
                          </CustomToggle>
                          <Accordion.Collapse eventKey="0">
                            <p className="font-size-sm">
                              Le piccole o medie imprese (PMI) oggi hanno due
                              importanti problemi con i dati: il primo è la loro
                              qualità e attendibilità (spesso ne raccolgono
                              troppi e/o in forma fallace). Il secondo è la
                              difficoltà ad assumere risorse interne
                              specializzate nell’analisi e manipolazione dei
                              dati per ottenere gli “insights” utili a guidare
                              le decisioni strategiche. Una consulenza esterna
                              qualificata può rappresentare una soluzione a
                              costi decisamente inferiori all’assunzione di una
                              risorsa, o all’affidarsi ad una agenzia.
                            </p>
                          </Accordion.Collapse>
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
                          </CustomToggle>
                          <Accordion.Collapse eventKey="1">
                            <p className="font-size-sm">
                              Esecuzione della strategia concordata e suo
                              allineamento agli obiettivi. Pianificazione e
                              gestione operativa quotidiana delle campagne di
                              marketing digitale (Google Ads e Bing Ads) e loro
                              continua ottimizzazione per il raggiungimento del
                              miglior ritorno sull’investimento possibile.
                              Continua misurazione, testing, e comprensibile
                              reporting completano l’attività consulenziale
                              offerta al Cliente.
                            </p>
                          </Accordion.Collapse>
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
                          </CustomToggle>
                          <Accordion.Collapse eventKey="2">
                            <p className="font-size-sm">
                              Lorem ipsum dolor sit amet
                            </p>
                          </Accordion.Collapse>
                        </div>
                      </Accordion>
                    </div>
                    <div className="col-sm-6">
                      <Accordion>
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
                          </CustomToggle>
                          <Accordion.Collapse eventKey="3">
                            <p className="font-size-sm">
                              Lorem ipsum dolor sit amet
                            </p>
                          </Accordion.Collapse>
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
                          </CustomToggle>
                          <Accordion.Collapse eventKey="4">
                            <p className="description font-size-sm">
                              In oltre 10 anni di esperienza come consulente, ho
                              sempre privilegiato i valori della trasparenza,
                              onestà intellettuale, riservatezza, ed il rispetto
                              dei ruoli. Ho maturato un metodo operativo
                              collaudato che garantisce a tutti i clienti
                              risultati in tempi ragionevolmente brevi. I
                              Clienti sono seguiti personalmente e con molti di
                              essi mi pregio di aver instaurato rapporti di
                              collaborazione continuativi. Abbiamo raggiunto
                              obiettivi ambiziosi e ho potuto nel tempo,
                              trasferire quella conoscenza degli strumenti
                              necessaria a comprendere il valore generato.
                            </p>
                          </Accordion.Collapse>
                        </div>
                      </Accordion>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
