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
    IonButton
    } from '@ionic/react';
  import { book, build, colorFill, grid } from 'ionicons/icons';
  import React from 'react';
  
  const RegisterComplaint: React.FC = () => {
    return (
      <IonPage className="register-comlaint-page">
        <IonHeader >
          <IonToolbar className="header" color="primary">
            <IonButtons slot="start" >
              <IonMenuButton />
            </IonButtons>
            <IonTitle className="header">
              <div className="candidate-bar">
                 <div className="page-name "> Register Complaint</div>
                  <div className="logo">
                    <a href="home">
                      <img src="/assets/logo.png" title="Logo" alt="Logo"/>
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
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting 
              industry the printing and typesetting industry 
            </p>
          </div>
          <div className="form-wrapper"> 
            <IonTitle className="sm-heading">Any Complaint? Let Us Know</IonTitle> 
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
                <IonLabel position="floating" className="label"> Area</IonLabel>
                <IonInput type="text" className="input"></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="floating" className="label"> What Happened?</IonLabel>
                <IonInput type="text" className="input"></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="floating" className="label">How Can we make things right for you:</IonLabel>
                <IonTextarea> </IonTextarea>
              </IonItem>
              <IonButton expand="full" className="full-button">Send</IonButton>
            </div>
          </div>
        </IonContent>
      </IonPage>
    );
  };
  
  export default RegisterComplaint;
  