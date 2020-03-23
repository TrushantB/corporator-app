import {
    IonButtons,
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonInput,
    IonTextarea,
    IonButton,
    IonText
    } from '@ionic/react';
    
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faHome,faPhoneAlt, faEnvelope, } from '@fortawesome/free-solid-svg-icons'
  import React from 'react';
  import gql from "graphql-tag";
import Query from '../components/Query/index'
import ReactMarkdown from "react-markdown";  
import { environment } from '../environments/environments';
  const Contact: React.FC = () => {
    return(
      <Query query={contactUs_Query} id={null}>
      {(data:any) => {
        let contactUsData=data.data.aboutuses[0];
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
                        <img src={`${environment.api}${contactUsData.party_symbol.url}`} alt="Logo" title="Logo"/>
                      </a> 
                    </div>
                  </div>
                </IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent className="content-wrapper">
              <div>
                <IonTitle className="page-title">
                  Contact Us  
                </IonTitle>
                <IonText> 
                  <ReactMarkdown source={contactUsData.contact_us_info} />
                </IonText>
              </div>
              <div className="contact-wrapper">
                <IonTitle className="sm-heading">Reach Us</IonTitle> 
                <div>
                  <IonText>
                    <h4> 
                      <FontAwesomeIcon icon={faHome} color="black" className="icon" /> Address:
                    </h4>
                       <p>{contactUsData.office_address}</p>
                  </IonText>
                  <IonText>
                    <h4> 
                      <FontAwesomeIcon icon={faEnvelope} color="black" className="icon" />  Email: 
                    </h4>
                    <p><a href="mailto:devendrafadnavis@gmail.com">{contactUsData.mail_id}</a></p>
                  </IonText>
                  <IonText>
                    <h4> 
                    <FontAwesomeIcon icon={faPhoneAlt} color="black" className="icon" /> Mobile no:
                    </h4>
                    <a href={`tel:${contactUsData.mob_no}`}>+91 {contactUsData.mob_no}</a>
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
      }}
    </Query>
  )
   
  };
    
  export default Contact;

  const contactUs_Query = gql`  
  query {
    aboutuses {
      contact_us_info
      party_symbol {
        url
      }
      mob_no
      mail_id
      office_address
    }
  } 
`;

  