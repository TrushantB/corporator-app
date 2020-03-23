import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { AppPage } from './declarations';
import Menu from './components/Menu';
import Home from './pages/Home';
import { home, person, image, call, images, create,} from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import './theme/css/custom.css'

/* Theme variables */
import './theme/variables.css';
import AboutUs from './pages/about';
import Gallery from './pages/gallery';
import SocialWork from './pages/social-work';
import RegisterComplaint from './pages/register-complaint';
import EmergancyContact from './pages/emergancycontact';
import Contact from './pages/contact-us';
import SocialWorkDetails from './pages/social-work-details';
import LatestNewsDetails from './pages/latest-news-details';
import RecentActivityDetails from './pages/recent-activity-details';
import Language from './pages/language';

// 

const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '/home',
    icon: home
  },
  {
    title: 'About Us',
    url: '/about',
    icon: person
  },
  {
    title: 'Gallery',
    url: '/gallery',
    icon: images
  },
  {
    title: 'Social Work',
    url: '/social-work',
    icon: image
  },
  {
    title: 'Ragister Complaint',
    url: '/register-complaint',
    icon: create
  },
  {
    title: 'Emergancy Contact',
    url: '/emergancy-contact',
    icon: call
  },
  {
    title: 'Contact Us',
    url: '/contact-us',
    icon:  image
  },
  {
    title: 'Select Language',
    url: '/language',
    icon:  create
  },
  
  // {
  //   title: 'List',
  //   url: '/home/list',
  //   icon: list
  // }
];

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonSplitPane contentId="main">
        <Menu appPages={appPages} />
        <IonRouterOutlet id="main">
          <Route path="/home" component={Home}  />
          {/* <Route path="/home/list" component={List} exact={true} /> */}
          <Route path="/about" component={AboutUs} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/social-work" component={SocialWork}/>
          <Route path="/register-complaint" component={RegisterComplaint}/>
          <Route path="/emergancy-contact" component={EmergancyContact}/>
          <Route path="/contact-us" component={Contact}/>
          <Route path="/social-work-details/:id" component={SocialWorkDetails}/>
          <Route path="/latest-news-details" component={LatestNewsDetails}/>
          <Route path="/recent-activity-details/:id" component={RecentActivityDetails}/>
          <Route path="/" render={() => <Redirect to="/language"/> } exact={true} />
          <Route path="/language" component={Language} exact={true}/>
        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
  </IonApp>
);
export default App;
