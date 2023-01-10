import React from "react";
import ImagesList from "../components/modules/MainList.js";
import Card from "../components/ui/Card.js";
import logo from "../images/logo.png";
import trust from "../images/trust.png";
import shield from "../images/shield.png";
import service from "../images/24-7.png";
import hands from "../images/hands.png";

import img1 from "../images/image1.jpg";
import img2 from "../images/image2.jpg";
import img3 from "../images/image3.jpg";
import img4 from "../images/image4.jpg";
import img5 from "../images/image5.jpg";
import img6 from "../images/image6.jpg";

const DUMMY_DATA = [
  {
    id: "1",
    title: "Calitate",
    image: img1,
    description:
      "Ținta noastră este sa ne îmbunătățim și să ne diversificăm calitatea serviciilor noastre de tractari pe toată plaja de auto și moto și să asigurăm transportul în siguranță a autoturismului pe toată suprafața țării.",
  },
  {
    id: "2",
    title: "Încredere",
    image: img2,
    description:
      "Seriozitate, promptitudine, corectitudine și respect! Încărcarea și descărcarea autovehiculului (și a resturilor acestuia) în condiții de siguranță.",
  },
  {
    id: "3",
    title: "Non-Stop 24/7",
    image: img3,
    description:
      "Suntem întotdeauna pregătiți să vă ajutăm - 24/7. Firma noastră de tractări auto oferă servicii de tractare pentru mașina ta indiferent de oră, anotimp sau de împrejurarea în care te afli. Este suficient să ne suni și noi vom ajunge la adresa menționată de tine în cel mai scurt timp posibil.",
  },
  {
    id: "4",
    title: "Preț Corect",
    image: img4,
    description:
      "Când aveți nevoie de un expert de remorcare în zona dvs., ajutorul profesionist este doar la un apel telefonic distanță cu o ofertă de preț imbatabilă.",
  },
  {
    id: "5",
    title: "Acoperire Națională",
    image: img5,
    description:
      "Lupașcu Tractări Auto efectuează servicii de tractări auto și asistență rutiera non-stop începând cu zona sediului nostru din orașul Târgoviște extindându-ne în tot județul Dâmbovița cât și în toate județele din România pentru autovehicule noi, defecte sau avariate (tractari SUV-uri, tractari dube si dubite, tractari van-uri, rulote, atv-uri, etc)",
  },
  {
    id: "6",
    title: "Seriozitate",
    image: img6,
    description:
      "Te trezești că nu poți să avansezi mai departe pe drum. Serviciile noastre de tractări auto sunt concepute tocmai pentru astfel de momente, nu trebuie decât să ne salvezi datele de contact în telefon iar noi vom acționa cu promptitudine și vom fi acolo să rezolvăm problema pentru dumneavoastră.",
  },
];

function MainPage() {
  return (
    <div>
      <section>
        <div className="mainlogo">
          <center>
            <img
              src={logo}
              alt={logo}
              width="40%"
              height="40%"
              style={{ padding: "0.5rem" }}
            />
          </center>
        </div>
        <Card>
          <div>
            <h1>
              <center>
                Lupașcu Tractări Auto Dâmbovița este o companie de încredere
                care te scoate cu succes din situațiile implicate în evenimente
                rutiere și nu numai, fie cu automobilul, cu autoutilitara sau
                orice alt tip de mijloc de transport (autotren, autobuze,
                autocare, etc).
              </center>
            </h1>
          </div>
        </Card>
        <ImagesList main={DUMMY_DATA} />
        <div className="mini-logos" style={{ height: "17vw" }}>
          <img
            src={trust}
            alt={trust}
            width="33%"
            height="auto"
            style={{
              padding: "6%",
              display: "flex",
              float: "left",
              marginTop: "-2%",
            }}
          />
          <img
            src={service}
            alt={service}
            width="23%"
            height="auto"
            style={{ padding: "5%", display: "flex", float: "left" }}
          />
          <img
            src={shield}
            alt={shield}
            width="20%"
            height="auto"
            style={{ padding: "5%", display: "flex", float: "left" }}
          />
          <img
            src={hands}
            alt={hands}
            width="22%"
            height="auto"
            style={{ padding: "5%", display: "flex", float: "left" }}
          />
        </div>
      </section>
    </div>
  );
}

export default MainPage;
