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
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  } from '@ionic/react';
import { book, build, colorFill, grid } from 'ionicons/icons';
import { home, list, person, image, contact, call, images, create,} from 'ionicons/icons';
import React from 'react';

const RecentActivityDetails: React.FC = () => {
  return (
    <IonPage className="language-page">
      <IonHeader >
        <IonToolbar className="header" color="primary">
          <IonButtons slot="start" >
            <IonMenuButton />
          </IonButtons>
          <IonTitle className="header">
            <div className="candidate-bar">
               <div className="page-name "> Language </div>
               <div className="logo">
                  <a href="home">
                    <img src="/assets/logo.png" alt="Logo"/>
                  </a> 
              </div>
            </div>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent >
        <div className="wrapper">  
          <div className="cadidate-info">
            <div className="cadidate-image">
              <img src="./assets/about_us.jpg" alt=""/>
            </div>
            <div className="candidate-name">
              <h2 className="title">Devendra Fadnavis</h2>
            </div>
            <div className="ward-name">
              <h5>
                Corporater - Wrad No.111
              </h5>
            </div>
            <div className="corporation-name">
              <h6>
                Pune Corporation
              </h6>
            </div>
          </div>
          <div className="select-language">
            <h3>Select Language</h3>
            <div className="language"> 
              <a href="home" className="laguage-button">English</a>
              <a href="home" className="laguage-button">Marathi</a>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default RecentActivityDetails;
