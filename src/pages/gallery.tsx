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
    IonRow,
    IonCol,
    IonGrid
    } from '@ionic/react';
import React from 'react';
import gql from "graphql-tag";
import Query from '../components/Query/index'
import { environment  } from "../environments/environments";
  
  const Gallery: React.FC = () => {
    return(
      <Query query={gallery_Query} id={null}>
      {(data:any) => {
        let galleriesData=data.data.galleries[0];
          console.log(galleriesData)
          return (
            <IonPage className="gallery-page">
              <IonHeader >
                <IonToolbar className="header" color="primary">
                  <IonButtons slot="start" >
                    <IonMenuButton />
                  </IonButtons>
                  <IonTitle className="header">
                    <div className="candidate-bar">
                      <div className="page-name ">Gallery </div>
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
                <div className="gallery">
                  <div className="gallery-images">
                    {
                      galleriesData.images.map((item:any,index:number) => {
                        return(
                     <IonGrid className="section ion-justify-content-around" key={index}>
                      <IonRow className="ion-text-center">
                        <IonCol>
                           <img src={`${environment.api}${item.url}`} alt="Gallery Image" title="Gallery Image" className="image"/>
                        </IonCol>
                        {/* <IonCol>
                        <img src={`${environment.api}${item.url}`} alt="Gallery Image" title="Gallery Image" className="image"/>
                        </IonCol> */}
                      </IonRow>
                    </IonGrid>
                        )
                      })
                    }
                   </div>    
                </div>
              </IonContent>
            </IonPage>
          );
      }}
    </Query>
  )

    
  };
  
  export default Gallery;

  const gallery_Query = gql`  
  query {
    galleries{
     id
     title
     images{
       url
     }
   }
   }
  
`;
  