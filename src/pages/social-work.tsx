import {
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonItem,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    } from '@ionic/react';
import React from 'react';
import gql from "graphql-tag";
import Query from '../components/Query/index'
import ReactMarkdown from "react-markdown";  
import { environment } from '../environments/environments';

  
  const SocialWork: React.FC = () => {
    return(
      <Query query={socialWork_Query} id={null}>
      {(data:any) => {
        let socialWorkData=data.data.socialWorkDetails;
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
              {
                socialWorkData.map((item:any,index:number) => {
                   return (
                    <div className="card" key={index}>
                    <IonCard className="card-wrapper">
                      <div className="social-work-image">
                        <img src={`${environment.api}${item.image.url}`} alt="Social Work Image" title="Social Work Image"/>
                      </div>
                      <div>
                        <IonCardHeader className="card-header">
                          <IonCardSubtitle className="date">
                            {socialWorkData.date}
                          </IonCardSubtitle>
                          <IonCardTitle className="sm-heading">
                            {item.title}
                          </IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent className="card-text">
                          <ReactMarkdown source={item.description}/>
                        </IonCardContent>
                        <IonItem className="read-more-button" routerLink={`social-work-details/${item.id}`} >
                          read more
                        </IonItem>
                      </div>
                    </IonCard>
                  </div>
                   )
                })
              }
           </IonContent>
          </IonPage>
        )
      }}
    </Query>
  )
   ;
  };
  
  export default SocialWork;

  export const socialWork_Query = gql`
  query {
    socialWorkDetails{
      id
      title
      image{
        url
      }
      description
      date
    }
    }
  `
  
  