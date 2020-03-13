import {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonSearchbar,
    IonToolbar
    } from '@ionic/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHospital,faClinicMedical } from '@fortawesome/free-solid-svg-icons'
import React, { useState, useEffect } from 'react';
import gql from "graphql-tag";
import Query from '../components/Query/index'
import { useQuery } from '@apollo/react-hooks';
  

  const EmergancyContact: React.FC = (props) => {
     const [ hospitalData, sethospitalData ] = useState([]);
     const [ pstationData, setpstationData ] = useState([]);
     const { loading, error, data } = useQuery(emergancyContact_Query);
     
     if(!hospitalData.length && !loading){
       sethospitalData(data.emergencyContacts[0].Hospitals);
       setpstationData(data.emergencyContacts[0].pstation)
     } 
     
    return(
      <Query query={emergancyContact_Query} id={null}>
      {(data:any) => {
        let emergencyContactData=data.data.emergencyContacts[0];
          return (
            <IonPage className="emergency-contact">
              <IonHeader >
                <IonToolbar className="header" color="primary">
                    <IonButtons slot="start" >
                    <IonMenuButton />
                  </IonButtons>
                  <IonTitle className="header">
                    <div className="candidate-bar">
                      <div className="page-name ">Emergancy Contact</div>
                      <div className="logo">
                        <a href="home">
                          <img src="/assets/logo.png" title="Logo" alt="Logo"/>
                        </a> 
                      </div>
                    </div>
                  </IonTitle>
                </IonToolbar>
              </IonHeader>
              <IonContent className="contact-wrapper">
                <div className="search-bar">
                  <IonSearchbar showCancelButton="focus" onIonChange={(e:any) => {
                   let hospital=emergencyContactData.Hospitals.filter((res:any) => {
                     return res.Name.toLocaleLowerCase().match(e.target.value.toLocaleLowerCase());
                    })
                    let pstation=emergencyContactData.pstation.filter((res:any) => {
                      return res.name.toLocaleLowerCase().match(e.target.value.toLocaleLowerCase());
                     })
                    sethospitalData(hospital);
                    setpstationData(pstation);
                  }}></IonSearchbar>
                </div>
                <div className="hospital-no">
                  <h4 className="m-0 sm-heading ">
                      <FontAwesomeIcon icon={faClinicMedical} color="black" className="icon" />  Hospital
                  </h4>
                  <table className="table">
                    <thead> 
                      <tr>
                        <th>Name</th>
                        <th>Contact No.</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        hospitalData.map((item:any,index:number) => {
                          return (
                            <tr key={index}>
                            <td>{item.Name}</td>
                            <td><a href={`tel:${item.mobile_no}`}>+91 {item.mobile_no}</a></td>
                          </tr>
                          )
                        })
                      }
                    </tbody>
                  </table>                        
                </div>
                <div className="police-no">
                  <h4 className="m-0 sm-heading"> 
                      <FontAwesomeIcon icon={faHospital} color="black" className="icon" />  Police Station
                  </h4>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Contact No.</th>
                      </tr>
                    </thead>
                    <tbody>
                    {
                        pstationData.map((item:any,index:number) => {
                          return (
                            <tr key={index}>
                            <td>{item.name}</td>
                            <td><a href={`tel:${item.mobile_no}`}>+91 {item.mobile_no}</a></td>
                          </tr>
                          )
                        })
                      }
                    </tbody>
                  </table>                       
                </div>
              </IonContent>
            </IonPage>
          );
      }}
    </Query>
  )

    
  };
  
  export default EmergancyContact;

  export const emergancyContact_Query = gql`
  query {
    emergencyContacts {
      Hospitals {
        Name
        mobile_no
      }
      pstation {
        name
        mobile_no
      }
    }
  }
  `
  