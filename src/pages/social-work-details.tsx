import {
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonGrid,
    IonCol,
    IonRow,
    IonText
    } from '@ionic/react';
import React from 'react';
import gql from "graphql-tag";
import Query from '../components/Query/index'
import ReactMarkdown from "react-markdown";  
import { environment } from '../environments/environments';
const SocialWorkDetails: React.FC = (props:any) => {
  
 const socialWorkDetails_Query =  gql`
  query {
    socialWorkDetails(where: { id: ${props.match.params.id} }) {
      id
      title
      image {
        url
      }
      description
      date
      gallery {
        url
      }
    }
  }
  `
    return(
      <Query query={socialWorkDetails_Query} id={null}>
      {(data:any) => {
        let socialWorkData=data.data.socialWorkDetails[0];
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
                    <img src={`${environment.api}${socialWorkData.image.url}`} alt="Social Work Image" title="Social Work Image"/>
                    </div>
                    <IonCardHeader className="card-header">
                      <IonCardSubtitle className="date">
                       {socialWorkData.date}
                      </IonCardSubtitle>
                      <IonCardTitle className="sm-heading">
                        {socialWorkData.title}
                      </IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent className="card-text">
                      <IonText>
                       <ReactMarkdown source={socialWorkData.description} />
                      </IonText>  
                    </IonCardContent>
                  </div>
                  <div>
                    <IonCardTitle className="title ">More Images</IonCardTitle>
                    <div>
                      {
                        socialWorkData.gallery.map((item:any,index:number) => {
                          return (
                            <IonGrid className="section ion-justify-content-around" key={index}>
                            <IonRow className="ion-text-center">
                              <IonCol >
                                <img src={`${environment.api}${item.url}`} alt="Gallery Image" title="Gallery Image" className="image"/>
                              </IonCol>
                              {/* <IonCol >
                                <img src={`${environment.api}${item.url}`} alt="Gallery Image" title="Gallery Image" className="image"/>
                              </IonCol> */}
                            </IonRow>
                          </IonGrid>
                          )
                        })
                      }
                     
                    </div>
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
  
  export default SocialWorkDetails;

  
  