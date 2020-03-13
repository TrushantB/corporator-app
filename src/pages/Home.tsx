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
    <IonPage className="home-page">
      <IonHeader >
        <IonToolbar className="header" color="primary">
          <IonButtons slot="start" >
            <IonMenuButton />
          </IonButtons>
          <IonTitle className="header">
            <div className="candidate-bar">
              <div className="page-name ">Devendra Fadnavis</div>
              <div className="logo">
                <a href="home">
                  <img src="/assets/logo.png" alt="Logo"/>
                </a> 
              </div>
            </div>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {/* <IonCard className="about-us">
        <img src="/assets/banner_1.jpg" alt="Banner Image"/>
          <IonCardHeader className="title-section">
            <IonCardTitle className="title">About Us</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>             
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type 
              specimen book. It has survived not.
            </p>
          </IonCardContent>
          <IonItem className="read-more-button" routerLink="about" >
              Read more
          </IonItem>
        </IonCard>
        <div className="recent-activity">
          <IonCardHeader className="title-section">
            <IonCardTitle className="title">Recent Activity</IonCardTitle>
          </IonCardHeader>
          <IonCard className="card">
              <IonCardHeader className="card-header">
                <img src="/assets/recent_activity.jpg" alt="Recent Activity"/>
              </IonCardHeader>
              <div className="card-content-wrapper">
                <IonCardTitle class="heading">Lorem Ipsum dummy text</IonCardTitle>
                <IonCardContent className="card-content">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  tially unchanged. It was popularised in the 1960s   
                </IonCardContent>
              </div>
              <IonItem className="read-more-button" routerLink="recent-activity-details" >
                Read more
              </IonItem>
          </IonCard>
          <IonCard className="card">
            <div>
              <IonCardHeader className="card-header">
                <img src="/assets/recent_activity_2.jpg" alt="Recent Activity"/>
              </IonCardHeader>
          
              <div className="card-content-wrapper">
                <IonCardTitle class="heading">Lorem Ipsum dummy text</IonCardTitle>
                <IonCardContent className="card-content">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  tially unchanged. It was popularised in the 1960s   
                </IonCardContent>
              </div>
            </div>
            <IonItem className="read-more-button" routerLink="recent-activity-details">
                Read more
            </IonItem>
          </IonCard>
        </div>
        <div className="gallery">
          <IonCardHeader className="title-section">
            <IonCardTitle className="title">Gallery</IonCardTitle>
          </IonCardHeader>
          <div className="gallery-images">
            <img src="/assets/gallery_3.jpg" alt="Gallery Image" className="image"/>
            <img src="/assets/gallery_4.jpg" alt="Gallery Image" className="image"/>
            <img src="/assets/gallery_6.jpg" alt="Gallery Image" className="image"/>
            <img src="/assets/gallery_7.jpg" alt="Gallery Image" className="image"/>
            <img src="/assets/gallery_8.jpg" alt="Gallery Image" className="image"/>
          </div>
        </div>
        <div className="latest-news">
          <IonCardHeader className="title-section">
            <IonCardTitle className="title">Latest News</IonCardTitle>
          </IonCardHeader>
          <IonCard className="card">
              <IonCardHeader className="card-header">
                <img src="/assets/news_1.jpg" alt="Recent Activity"/>
              </IonCardHeader>
              
              <div className="card-content-wrapper">
                <IonCardTitle class="heading">Lorem Ipsum dummy text</IonCardTitle>
                <IonCardContent className="card-content">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  tially unchanged. It was popularised in the 1960s   
                </IonCardContent> 
              </div>
              <IonItem className="read-more-button" routerLink="latest-news-details" >
                Read more
              </IonItem>
          </IonCard>
          <IonCard className="card">
            <div>
              <IonCardHeader className="card-header">
                <img src="/assets/gallery_9.jpg" alt="Recent Activity"/>
              </IonCardHeader>
              <div className="card-content-wrapper">
                <IonCardTitle class="heading">Lorem Ipsum dummy text</IonCardTitle>
                <IonCardContent className="card-content">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  tially unchanged. It was popularised in the 1960s   
                </IonCardContent>
              </div>
              <IonItem className="read-more-button" routerLink="latest-news-details" >
                Read more
              </IonItem> 
            </div>
          </IonCard>
        </div> */}
        <IonCard className="about-us">
          <div className="banner-image">
            <img src="/assets/banner_1.jpg" alt="Banner Image"/>
          </div>
          <div className="about-content">  
            <IonCardHeader className="title-section">
              <IonCardTitle className="cadidate-name">Devendra Fadnavis</IonCardTitle>
              <IonCardTitle className="title">Welcome to Application</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <p>             
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley.
              </p>
            </IonCardContent>
            <IonItem className="read-more-button" routerLink="about" >
              Read more
            </IonItem>
          </div>
        </IonCard>
        <IonGrid className="grid-section ion-justify-content-around">
          <IonRow className="ion-text-center">
            <IonCol className="column-section">
              <a href="social-work">
                <img src="/assets/social_work.svg" alt="Social Work" className="icon"/>
                <IonCardTitle className="title">Social Work</IonCardTitle>
              </a>
            </IonCol>
            <IonCol className="column-section">
              <a href="gallery">
                <img src="/assets/gallery.svg" alt="Gallery" className="icon"/>  
                <IonCardTitle className="title">Gallery</IonCardTitle>
              </a>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonGrid className="grid-section ion-justify-content-around">
          <IonRow className="ion-text-center">
            <IonCol className="column-section">
              <a href="contact-us">
                <img src="/assets/contact.svg" alt="Contact" className="icon"/>  
                <IonCardTitle className="title">Contact Us</IonCardTitle>
              </a>
            </IonCol>
            <IonCol className="column-section">
              <a href="register-complaint">
                <img src="/assets/register.svg" alt="Register" className="icon"/>
                <IonCardTitle className="title">Register Complaint</IonCardTitle>
              </a>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonGrid className="grid-section ion-justify-content-around">
          <IonRow className="ion-text-center">
            <IonCol className="column-section">
              <a href="emergancy-contact">
                <img src="/assets/emergancy.svg" alt="About" className="icon"/>
                <IonCardTitle className="title">Emergency Contact</IonCardTitle>
              </a>
            </IonCol>
            <IonCol className="column-section">
              <div>
                <a href="about">
                  <img src="/assets/about.svg" alt="About" className="icon" />
                  <IonCardTitle className="title">About Us</IonCardTitle>
                </a>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default RecentActivityDetails;
