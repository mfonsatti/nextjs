import Head from "next/head";
import Link from "next/link";
import { Button, na, Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Navbar expand="lg" variant="dark" sticky="top" className="container py-4">
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
                  <h1 class="display-4 text-light pb-2">
                    <span class="font-weight-light">Professionista in </span>
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
                      <div className="h1 text-light mb-1">> 500k</div>
                      <div className="h5 text-light font-weight-normal opacity-70 mb-1">
                        Budget gestito nel 2020
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <img src="/paolo-imperiale.jpg" className="selfie rounded-circle" />
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
          </div>
        </section>
      </main>
    </>
  );
}
