import {
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonText,
    } from '@ionic/react';
  import React from 'react';
  import gql from "graphql-tag";
import Query from '../components/Query/index'
import ReactMarkdown from "react-markdown";  
import { environment } from '../environments/environments';
  
  const RecentActivityDetails: React.FC = (props:any) => {
    const recentActivityDetails_Query =  gql`
    query {
      recentActivities(where: { id: ${props.match.params.id} }) {
        title
        description
        image {
          url
        }
      }
    }
    `
    
    return(
      <Query query={recentActivityDetails_Query} id={null}>
      {(data:any) => {
        let socialWorkData=data.data.recentActivities[0];
        return (
          <IonPage className="recent-activity-details">
            <IonHeader >
              <IonToolbar className="header" color="primary">
                <IonButtons slot="start" >
                    <IonMenuButton />
                </IonButtons>
                <IonTitle className="header">
                  <div className="candidate-bar">
                    <div className="page-name ">Recent Activity </div>
                    <div className="logo">
                      <a href="home">
                        <img src="/assets/logo.png" title="logo" alt="Logo"/>
                      </a> 
                    </div>
                  </div>
                </IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent>
              <div className="recent-activity">
                <IonCardHeader className="title-section">
                  <IonCardTitle className="title">Recent Activity</IonCardTitle>
                </IonCardHeader>
                <IonCard className="card">
                  <IonCardHeader className="card-header">
                      <img src={`${environment.api}${socialWorkData.image[0].url}`} alt="Recent Activity" title="Recent Activity"/>
                  </IonCardHeader>
                  <div className="card-content-wrapper">
                    <IonCardTitle class="heading">{socialWorkData.title}</IonCardTitle>
                    <IonCardContent className="card-content">
                      <IonText>
                        <ReactMarkdown source={socialWorkData.description} />
                      </IonText>
                    </IonCardContent>
                  </div>
                </IonCard>
              </div>
            </IonContent>
        </IonPage>
      );
      }}
    </Query>
  )
  };
  
  export default RecentActivityDetails;
  