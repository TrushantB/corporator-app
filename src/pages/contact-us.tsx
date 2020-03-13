import {
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonInput,
    IonTextarea,
    IonButton,
    IonText
    } from '@ionic/react';
    
  import { book, build, colorFill, grid, square } from 'ionicons/icons';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faHome,faPhoneAlt, faEnvelope, } from '@fortawesome/free-solid-svg-icons'
  import React from 'react';
  
  const Contact: React.FC = () => {
    return (
      <IonPage className="contact-page">
        <IonHeader>
          <IonToolbar className="header" color="primary">
            <IonButtons slot="start" >
              <IonMenuButton />
            </IonButtons>
            <IonTitle className="header">
              <div className="candidate-bar">
                <div className="page-name">Contact Us</div>
                <div className="logo">
                  <a href="home">
                    <img src="/assets/logo.png" alt="Logo" title="Logo"/>
                  </a> 
                </div>
              </div>
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="content-wrapper">
          <div>
            <IonTitle className="page-title">
              Lorem Ipsum  
            </IonTitle>
            <IonText> 
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting 
                industry the printing and typesetting industry 
              </p>
            </IonText>
          </div>
          <div className="contact-wrapper">
            <IonTitle className="sm-heading">Reach Us</IonTitle> 
            <div>
              <IonText>
                <h4> 
                  <FontAwesomeIcon icon={faHome} color="black" className="icon" /> Address:
                </h4>
                <p>ABC, street road, pune, 411030.</p>
              </IonText>
              <IonText>
                <h4> 
                  <FontAwesomeIcon icon={faEnvelope} color="black" className="icon" />  Email: 
                </h4>
                <p><a href="mailto:devendrafadnavis@gmail.com">devendrafadnavis@gmail.com</a></p>
              </IonText>
              <IonText>
                <h4> 
                <FontAwesomeIcon icon={faPhoneAlt} color="black" className="icon" /> Mobile no:
                </h4>
                <a href="tel:8796969608">+91 879 696 9608</a>
              </IonText>
            </div>
          </div>
          {/* <div className="contact-wrapper follow-section">
            <IonTitle className="sm-heading">Follow Us</IonTitle> 
            <IonText>
              <a href="">
              <FontAwesomeIcon icon={faEnvelope} color="black" className="icon" />
              </a>
              <a href="">
              <FontAwesomeIcon icon={faEnvelope} color="black" className="icon" />
              </a>
              <a href="">
              <FontAwesomeIcon icon={""} color="black" className="icon" />
              </a>
            </IonText>
            
          </div> */}
          <div className="form-wrapper"> 
            <IonTitle className="sm-heading">Get In Touch</IonTitle> 
            <div>
              <IonItem>
                <IonLabel position="floating" className="label"> Your Name:</IonLabel>
                <IonInput type="text" className="input"></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="floating" className="label"> Email address:</IonLabel>
                <IonInput type="email" className="input"></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="floating" className="label"> Mobile Number:</IonLabel>
                <IonInput type="number" className="input"></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="floating" className="label"> Subject:</IonLabel>
                <IonInput type="text" className="input"></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="floating" className="label">Comment:</IonLabel>
                <IonTextarea>   </IonTextarea> 
              </IonItem>
              <IonButton expand="full" className="full-button">Submit</IonButton>
            </div>
          </div>
        </IonContent>
      </IonPage>
    );
  };
    
  export default Contact;
  