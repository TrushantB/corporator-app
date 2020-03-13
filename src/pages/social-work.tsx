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
    IonButton
    } from '@ionic/react';
  import { book, build, colorFill, grid} from 'ionicons/icons';
  import React from 'react';
  
  const SocialWork: React.FC = () => {
    return (
      <IonPage className="social-page">
        <IonHeader >
          <IonToolbar className="header" color="primary">
            <IonButtons slot="start" >
              <IonMenuButton />
            </IonButtons>
            <IonTitle className="header">
              <div className="candidate-bar">
                <div className="page-name ">Social Work </div>
                <div className="logo">
                  <a href="home">
                    <img src="/assets/logo.png" title="Logo" alt="Logo"/>
                  </a> 
                </div>
              </div>
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <div className="card">
            <IonCard className="card-wrapper">
              <div className="social-work-image">
                <img src="/assets/social_work_1.jpg" alt="Social Work Image" title="Social Work Image"/>
              </div>
              <div>
                <IonCardHeader className="card-header">
                  <IonCardSubtitle className="date">
                    Friday June 14th, 2019
                  </IonCardSubtitle>
                  <IonCardTitle className="sm-heading">
                    Shetkari Sanman Bhavan – One Roof 
                    Complex for All Agriculture Offices
                  </IonCardTitle>
                </IonCardHeader>
                <IonCardContent className="card-text">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry 
                    Lorem Ipsum is simply dummy  printing and typesetting industry Lorem
                  </p>
                </IonCardContent>
                <IonItem className="read-more-button" routerLink="social-work-details" >
                  read more
                </IonItem>
              </div>
            </IonCard>
          </div>
          <div className="card">
            <IonCard className="card-wrapper">
              <div className="social-work-image">
                <img src="/assets/social_work_2.jpg" alt="Social Work Image" title="Social Work Image"/>
              </div>
              <div>
                <IonCardHeader className="card-header">
                  <IonCardSubtitle className="date">
                    Friday June 14th, 2019
                  </IonCardSubtitle>
                  <IonCardTitle className="sm-heading">
                    Shetkari Sanman Bhavan – One Roof 
                    Complex for All Agriculture Offices
                  </IonCardTitle>
                </IonCardHeader>
                <IonCardContent className="card-text">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry 
                    Lorem Ipsum is simply dummy  printing and typesetting industry Lorem
                  </p>
                </IonCardContent>
                <IonItem className="read-more-button" routerLink="social-work-details" >
                    read more
                </IonItem>
              </div>
            </IonCard>
          </div>
          <div className="card">
            <IonCard className="card-wrapper">
              <div className="social-work-image">
                <img src="/assets/social_work_3.jpg" alt="Social Work Image" title="Social Work Image"/>
              </div>
              <div>
                <IonCardHeader className="card-header">
                  <IonCardSubtitle className="date">
                    Friday June 14th, 2019
                  </IonCardSubtitle>
                  <IonCardTitle className="sm-heading">
                    Shetkari Sanman Bhavan – One Roof 
                    Complex for All Agriculture Offices
                  </IonCardTitle>
                </IonCardHeader>
                <IonCardContent className="card-text">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry 
                    Lorem Ipsum is simply dummy  printing and typesetting industry Lorem
                  </p>
                </IonCardContent>
                <IonItem className="read-more-button" routerLink="social-work-details" >
                    read more
                </IonItem>
              </div>
            </IonCard>
          </div>
          <div className="card">
            <IonCard className="card-wrapper">
              <div className="social-work-image">
                <img src="/assets/social_work_1.jpg" alt="Social Work Image" title="Social Work Image"/>
              </div>
              <div>
                <IonCardHeader className="card-header">
                  <IonCardSubtitle className="date">
                    Friday June 14th, 2019
                  </IonCardSubtitle>
                  <IonCardTitle className="sm-heading">
                    Shetkari Sanman Bhavan – One Roof 
                    Complex for All Agriculture Offices
                  </IonCardTitle>
                </IonCardHeader>
                <IonCardContent className="card-text">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry 
                    Lorem Ipsum is simply dummy  printing and typesetting industry Lorem
                  </p>
                </IonCardContent>
                <IonItem className="read-more-button" routerLink="social-work-details" >
                    read more
                </IonItem>
              </div>
            </IonCard>
          </div>
        </IonContent>
      </IonPage>
    );
  };
  
  export default SocialWork;
  