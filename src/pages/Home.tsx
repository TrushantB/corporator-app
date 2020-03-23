import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonItem,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  } from '@ionic/react';
import React, { useState } from 'react';
import gql from "graphql-tag";
import Query from '../components/Query/index'
import ReactMarkdown from "react-markdown";  
import { environment } from '../environments/environments';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

const RecentActivityDetails: React.FC = () => {
  const [ homeData, sethomeData ] = useState();
  const [ recentActivities, setecentActivities ] = useState([]);

  const { loading, error, data } = useQuery(home_Query);
  if(!loading && !homeData && !recentActivities.length) {
    setecentActivities(data.recentActivities)
    sethomeData(data.homes[0]);
}
  return(
    <Query query={aboutUS_Query} id={null}>
    {(data:any) => {
      let aboutUsData=data.data.aboutuses[0];
      return (  
        <IonPage className="home-page">
          <IonHeader >
            <IonToolbar className="header" color="primary">
              <IonButtons slot="start" >
                <IonMenuButton />
              </IonButtons>
              <IonTitle className="header">
                <div className="candidate-bar">
                  <div className="page-name ">{aboutUsData.first_name} {aboutUsData.last_name}</div>
                  <div className="logo">
                    <a href="home">
                      <img src={`${environment.api}${aboutUsData.party_symbol.url}`} alt="Logo"/>
                    </a> 
                  </div>
                </div>
              </IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
          <IonCard className="about-us"> 
              <div className="banner-image">
              {
                       homeData && homeData.banner.map((item:any,index:number) => {
                           return <img src={`${environment.api}${item.url}`} alt="banner image" key={index}/>
                        })
                      }
              </div>
              <div className="about-content">  
                <IonCardHeader className="title-section">
                  <IonCardTitle className="cadidate-name">{aboutUsData.first_name} {aboutUsData.last_name}</IonCardTitle>
                  <IonCardTitle className="title">About us</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <ReactMarkdown source={aboutUsData.info} />
                </IonCardContent>
                <IonItem className="read-more-button" routerLink="about" >
                  Read more
                </IonItem>
              </div>
            </IonCard>
            <div className="recent-activity">
              <IonCardHeader className="title-section">
                <IonCardTitle className="title">Recent Activity</IonCardTitle>
              </IonCardHeader>
              {
                recentActivities && recentActivities.map((item:any,index:number) => {
                  return (
                    <IonCard className="card" key={index}>
                  <IonCardHeader className="card-header">
                    <img src={`${environment.api}${item.image[0].url}`} alt="Recent Activity"/>
                  </IonCardHeader>
                  <div className="card-content-wrapper">
                    <IonCardTitle class="heading">{item.title}</IonCardTitle>
                    <IonCardContent className="card-content">
                     <ReactMarkdown source={item.description} />
                    </IonCardContent>
                  </div>
                  <IonItem className="read-more-button" routerLink={`recent-activity-details/${item.id}`} >
                    Read more
                  </IonItem>
              </IonCard>
                  )
                })
              }
              </div>
            {/* <div className="gallery">
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
            </div>*/}
           
            <IonGrid className="grid-section ion-justify-content-around">
              <IonRow className="ion-text-center">
                <IonCol className="column-section">
                  <Link to="social-work">
                    <img src="/assets/social_work.svg" alt="Social Work" className="icon"/>
                    <IonCardTitle className="title">Social Work</IonCardTitle>
                  </Link>
                </IonCol>
                <IonCol className="column-section">
                  <Link to="gallery">
                    <img src="/assets/gallery.svg" alt="Gallery" className="icon"/>  
                    <IonCardTitle className="title">Gallery</IonCardTitle>
                  </Link>
                </IonCol>
              </IonRow>
            </IonGrid>
            <IonGrid className="grid-section ion-justify-content-around">
              <IonRow className="ion-text-center">
                <IonCol className="column-section">
                  <Link to="contact-us">
                    <img src="/assets/contact.svg" alt="Contact" className="icon"/>  
                    <IonCardTitle className="title">Contact Us</IonCardTitle>
                  </Link>
                </IonCol>
                <IonCol className="column-section">
                  <Link to="register-complaint">
                    <img src="/assets/register.svg" alt="Register" className="icon"/>
                    <IonCardTitle className="title">Register Complaint</IonCardTitle>
                  </Link>
                </IonCol>
              </IonRow>
            </IonGrid>
            <IonGrid className="grid-section ion-justify-content-around">
              <IonRow className="ion-text-center">
                <IonCol className="column-section">
                  <Link to="emergancy-contact">
                    <img src="/assets/emergancy.svg" alt="About" className="icon"/>
                    <IonCardTitle className="title">Emergency Contact</IonCardTitle>
                  </Link>
                </IonCol>
                <IonCol className="column-section">
                  <div>
                    <Link to="about">
                      <img src="/assets/about.svg" alt="About" className="icon" />
                      <IonCardTitle className="title">About Us</IonCardTitle>
                    </Link>
                  </div>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonContent>
        </IonPage>
      );
    }}
  </Query>
)
 
};

export default RecentActivityDetails;


const aboutUS_Query = gql`  
  query {
    aboutuses {
      first_name
      last_name
      info
      profile_image {
        url
      }
      party_symbol {
        url
      }
    }
  }
  
`;

const home_Query = gql`  
  query {
    homes {
      title
      banner {
        url
      }
    }
    recentActivities {
      id
      title
      description
      image {
        url
      }
    }
  }
`;
