import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import Card from "../ui/Card";
import classes from "./ContactForm.module.css";
import MapSection from "../map/Map";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_aa1qim8",
        "template_ltfkhfh",
        form.current,
        "user_hoB1Ged5o0EMRhgXIFK9S"
      )
      .then(
        (result) => {
          alert(
            "Mesajul a fost trimis, vă vom contacta în cel mai scurt timp!",
            result.text
          );
        },
        (error) => {
          alert(
            "A apărut o eroare, vă rugăm încercați mai tarziu!",
            error.text
          );
        }
      );
  };

  return (
    <>
      <Card>
        <form className={classes.form} ref={form} onSubmit={sendEmail}>
          <div className={classes.titles}>
            <h1>
              <div className={classes.text}>
                Completează formularul de mai jos și trimite-ne un e-mail și vă
                răspundem în cel mai scurt timp sau sună la numarul de telefon:
              </div>
              <div className={classes.telephone}>
                <a href="tel:0762.604.936">0762.604.936</a>
              </div>
            </h1>
          </div>
          <div className={classes.control}>
            <label htmlFor="title">Subiect</label>
            <input type="text" required id="title" name="title" />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Nume</label>
            <input type="text" required id="name" name="user_name" />
          </div>
          <div className={classes.control}>
            <label htmlFor="address">E-mail</label>
            <input type="text" required id="address" name="user_email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="description">Descriere</label>
            <textarea id="description" required rows="3" name="message" />
          </div>
          <div className={classes.actions}>
            <button type="submit" value="Send">
              Trimite
            </button>
          </div>
        </form>
      </Card>
      <Card>
        <MapSection />
      </Card>
    </>
  );
};

export default ContactForm;

// function ContactForm(props) {
//   const titleInputRef = useRef();
//   const nameInputRef = useRef();
//   const addressInputRef = useRef();
//   const descriptionInputRef = useRef();

//   function submitHandler(event) {
//     event.preventDefault();

//     const enteredTitle = titleInputRef.current.value;
//     const enteredName = nameInputRef.current.value;
//     const enteredAddress = addressInputRef.current.value;
//     const enteredDescription = descriptionInputRef.current.value;

//     const mainData = {
//       title: enteredTitle,
//       name: enteredName,
//       address: enteredAddress,
//       description: enteredDescription,
//     };
//   }

//   return (

//   );
// }

// export default ContactForm;
