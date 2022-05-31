// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route ,Redirect,Switch} from "react-router-dom"
import User from './user/pages/User';
import NewPlace from './place/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserPlaces from './place/pages/UserPlaces';


function App() {
  return (
   <>
   <Router >
     <MainNavigation/>
     <main>
     <Switch>
     <Route path='/' exact>
       <User/>
     </Route>
     <Route path='/:userId/places' exact>
      <UserPlaces/>
     </Route>
     <Route path='/place/new' exact>
       <NewPlace/>
     </Route>
    <Route path='/place/:placeId'>
      <UserPlaces/>
    </Route>
     <Redirect to="/"/>
     </Switch>
     </main>

   </Router>
   </>
  );
}

export default App;
