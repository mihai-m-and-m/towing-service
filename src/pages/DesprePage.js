import React from "react";
import classes from "./DesprePage.module.css";
import Card from "../components/ui/Card";
import logo from "../images/sorin-tractariautodb.png";
import trust from "../images/trust.png";
import shield from "../images/shield.png";
import service from "../images/24-7.png";
import hands from "../images/hands.png";
import GalleryPhoto from "../components/modules/Gallery";

function DesprePage(props) {
  return (
    <>
      <Card>
        <div className={classes.form}>
          <div className={classes.block}>
            <img src={logo} alt={logo} />
          </div>
          <div className={classes.text}>
            <h4>
              Lupașcu Tractări Auto efectuează servicii de tractări auto și
              asistență rutiera non-stop începând cu zona sediului nostru din
              orașul Târgoviște extindându-ne în tot județul Dâmbovița cât și în
              toate județele din România pentru autovehicule noi, defecte sau
              avariate (tractari SUV-uri, tractari dube si dubite, tractari
              van-uri, rulote, atv-uri, etc).
            </h4>
          </div>
          <div className={classes.block2}>
            <img src={trust} alt={trust} />
          </div>
          <div className={classes.text}>
            <h4>
              Este o companie de încredere care te scoate cu succes din
              situațiile implicate în evenimente rutiere și nu numai.
              Seriozitate, promptitudine, corectitudine și respect! Încărcarea
              și descărcarea autovehiculului (și a resturilor acestuia) în
              condiții de siguranță.
            </h4>
          </div>
          <div className={classes.block3}>
            <img src={service} alt={service} />
          </div>
          <div className={classes.text}>
            <h4>
              Suntem întotdeauna pregătiți să vă ajutăm - 24/7. Firma noastră de
              tractări auto oferă servicii de tractare pentru mașina ta
              indiferent de oră, anotimp sau de împrejurarea în care te afli.
              Este suficient să ne suni și noi vom ajunge la adresa menționată
              de tine în cel mai scurt timp posibil.
            </h4>
          </div>
          <div className={classes.block4}>
            <img src={hands} alt={hands} />
          </div>
          <div className={classes.text}>
            <h4>
              Când nu poți să avansezi mai departe pe drum, serviciile noastre
              de tractări auto sunt concepute tocmai pentru astfel de momente,
              nu trebuie decât să ne salvezi datele de contact în telefon iar
              noi vom acționa cu promptitudine și vom fi acolo să rezolvăm
              problema pentru dumneavoastră.
            </h4>
          </div>
          <div className={classes.block5}>
            <img src={shield} alt={shield} />
          </div>
          <div className={classes.text}>
            <h4>
              Ținta noastră este sa ne îmbunătățim și să ne diversificăm
              calitatea serviciilor noastre de tractari pe toată plaja de auto
              și moto și să asigurăm transportul în siguranță a autoturismului
              pe toată suprafața țării.
            </h4>
          </div>
        </div>
      </Card>
      <Card>
        <GalleryPhoto />
      </Card>
    </>
  );
}

export default DesprePage;
