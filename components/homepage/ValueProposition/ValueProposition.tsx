import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const ValueProposition = () => {
  return (
    <section style={{ backgroundColor: "#37384e" }} className="pt-5 mt-5">
      <div className="container-lg pb-5">
        <div className="row">
          <div className="col-md-6">
            <div className="mr-lg-5" style={{ maxWidth: "495px" }}>
              <h1 className="display-4 text-light pb-2">
                <span className="font-weight-light">Professionista in </span>
                Marketing Digitale
              </h1>
              <p className="h4 font-weight-light text-light opacity-70 line-height-base">
                Strategia, Formazione, e Trasformazione Digitale per le Piccole
                e Medie Imprese
              </p>
              <Button variant="outline-primary" className="mt-4 mb-5">
                <FontAwesomeIcon icon={faArrowDown} className="mr-2" />
                Call to action
              </Button>
              {/* <hr className="hr-light mb-5" /> */}
              <div className="font-size-sm mb-2 text-white">Esperienza</div>
              <div className="progress mb-3">
                <div
                  className="progress-bar font-weight-medium bg-success"
                  role="progressbar"
                  style={{ width: "65%" }}
                >
                  25 anni
                </div>
              </div>

              <div className="font-size-sm mb-2 text-white">
                Certificato Google Partner
              </div>
              <div className="progress mb-3">
                <div
                  className="progress-bar font-weight-medium bg-warning"
                  role="progressbar"
                  style={{ width: "40%" }}
                >
                  10 anni
                </div>
              </div>

              <div className="font-size-sm mb-2 text-white">
                Budget pubblicitario gestito negli ultimi 12 mesi
              </div>
              <div className="progress mb-3">
                <div
                  className="progress-bar font-weight-medium bg-info"
                  role="progressbar"
                  style={{ width: "55%" }}
                >
                  &gt; 500.000&euro;
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img
              src="/paolo-imperiale.jpg"
              className="selfie rounded-circle img-fluid d-none d-md-block"
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
  );
};

export default ValueProposition;
