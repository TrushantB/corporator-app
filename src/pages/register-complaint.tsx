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
    IonButton
    } from '@ionic/react';
  import React from 'react';
  import gql from "graphql-tag";
  import Query from '../components/Query/index'
  
  const RegisterComplaint: React.FC = () => {
    return(
      <Query query={registerComplaints_Query} id={null}>
      {(data:any) => {
        let registerComplaintsData=data.data.registerComplaints[0];
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
                  {registerComplaintsData.title}
                </IonTitle>
                <p>
                  {registerComplaintsData.description}
                </p>
              </div>
              <div className="form-wrapper"> 
                <IonTitle className="sm-heading">{registerComplaintsData.sub_title}</IonTitle> 
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
      }}
    </Query>
  )

  };
  
  export default RegisterComplaint;
  
  export const registerComplaints_Query = gql`
  query {
    registerComplaints{
      title
      description
      sub_title
    }
  }
  `