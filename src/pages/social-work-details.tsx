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
    IonCol,
    IonRow,
    IonText
    } from '@ionic/react';
  import { book, build, colorFill, grid} from 'ionicons/icons';
  import { home, list, person, image, contact, call, images, create,} from 'ionicons/icons';
  import React from 'react';
  
  const SocialWorkDetails: React.FC = () => {
    return (
        <IonPage className="social-page social-work-detail">
          <IonHeader >
            <IonToolbar className="header" color="primary">
              <IonButtons slot="start" >
                  <IonMenuButton />
              </IonButtons>
              <IonTitle className="header">
                <div className="candidate-bar">
                  <div className="page-name ">Social Work</div>
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
            <div className="breadcrumbs">
              <ul className="breadcrumbs-menu">
                <li className="breadcrumbs-item">
                  <a href="home">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="s-ion-icon"><path d="M208 448V320h96v128h97.6V256H464L256 64 48 256h62.4v192z"></path></svg>
                      Home >
                  </a> 
                </li>
                <li className="breadcrumbs-item">
                    <a href="social-work">Social Work</a>
                </li>
              </ul>
            </div>
            <div className="card">
              <IonCard className="card-wrapper">
                <div>
                  <div className="Social-work-image">
                    <img src="/assets/social_work_2.jpg" alt="Social Work Image" title="Social Work Image"/>
                  </div>
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
                    <IonText>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry 
                        Lorem Ipsum is simply dummy  printing and typesetting industry Lorem
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry 
                        Lorem Ipsum is simply dummy  printing and typesetting industry Lorem
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry 
                        Lorem Ipsum is simply dummy  printing and typesetting industry Lorem
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry 
                        Lorem Ipsum is simply dummy  printing and typesetting industry Lorem
                      </p>
                    </IonText>  
                  </IonCardContent>
                </div>
                <div>
                  <IonCardTitle className="title ">More Images</IonCardTitle>
                  <div>
                    <IonGrid className="section ion-justify-content-around">
                      <IonRow className="ion-text-center">
                        <IonCol >
                          <img src="/assets/gallery_8.jpg" alt="Gallery Image" title="Gallery Image" className="image"/>
                        </IonCol>
                        <IonCol >
                          <img src="/assets/gallery_9.jpg" alt="Gallery Image" title="Gallery Image" className="image"/>
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                    <IonGrid className="section ion-justify-content-around">
                      <IonRow className="ion-text-center">
                        <IonCol >
                          <img src="/assets/gallery_5.jpg" alt="Gallery Image" title="Gallery Image" className="image"/>
                        </IonCol>
                        <IonCol >
                          <img src="/assets/gallery_6.jpg" alt="Gallery Image" title="Gallery Image" className="image"/>
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  </div>
                </div>
              </IonCard>
            </div>
          </IonContent>
        </IonPage>
    );
  };
  
  export default SocialWorkDetails;
  