import {
    IonButtons,
    IonCardHeader,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonText
    } from '@ionic/react';
import React from 'react';
import gql from "graphql-tag";
import Query from '../components/Query/index'
import ReactMarkdown from "react-markdown";  
import { environment } from '../environments/environments';

  
  const AboutUs: React.FC = () => {
    return(
      <Query query={aboutUS_Query} id={null}>
      {(data:any) => {
        let aboutUsData=data.data.aboutuses[0];
        console.log(aboutUsData)
          return (
            <IonPage className="about-page">
              <IonHeader >
                <IonToolbar className="header" color="primary">
                  <IonButtons slot="start" >
                    <IonMenuButton />
                  </IonButtons>
                  <IonTitle className="header">
                    <div className="candidate-bar">
                      <div className="page-name "> About Us</div>
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
                <div className="profile-image bg-gray">
                  <img src={`${environment.api}${aboutUsData.profile_image.url}`} alt="Profile Image"/>
                </div>
                <div className="about-content bg-gray">
                  <div>
                    <IonCardHeader className="title-section bg-gray">
                      <IonCardTitle className="title ">{aboutUsData.first_name} {aboutUsData.last_name}</IonCardTitle>
                    </IonCardHeader>
                    <IonText>
                       <ReactMarkdown source={aboutUsData.info} />
                    </IonText>
                    </div>
                  <div>
                    <IonTitle className="sm-heading">Our Vision</IonTitle>
                    <IonText>
                    <ReactMarkdown source={aboutUsData.vision} />
                    </IonText>
                  </div>
                  <div>
                    <IonTitle className="sm-heading">Our Mission</IonTitle>
                      <IonText>
                      <ReactMarkdown source={aboutUsData.mission} />
                      </IonText>
                  </div>
                </div>
              </IonContent>
            </IonPage>
          );
      }}
    </Query>
  )
    
  };
  
  export default AboutUs;

  const aboutUS_Query = gql`  
  query {
    aboutuses {
      first_name
      last_name
      info
      vision
      mission
      profile_image {
        url
      }
    }
  }
  
`;
  