// import logo from './logo.svg';
import React,{useState,useCallback} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom"
import User from './user/pages/User';
import NewPlace from './place/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserPlaces from './place/pages/UserPlaces';
import UpdatePlace from './place/pages/UpdatePlace';
import Auth from './user/pages/Auth';
import { AuthContext } from './shared/components/Context/AuthContext';



function App() {
  const[isLoggined,setIsLoggined]=useState(false);
  const login = useCallback(()=>{
    setIsLoggined(true)
  },[])

  const logout = useCallback(()=>{
    setIsLoggined(false)
  },[])
  let routes;
  if(isLoggined){
    routes=(
      <Switch>
         <Route path='/' exact>
              <User />
            </Route>
            <Route path='/:userId/places' exact>
              <UserPlaces />
            </Route>
            <Route path='/place/new' exact>
              <NewPlace />
            </Route>
            <Route path='/place/:placeId'>
             <UpdatePlace/>
            </Route>
            <Redirect to='/'/>
      </Switch>
    )
  }
  else{
    routes=(
      <Switch>
        <Route path='/' exact>
              <User />
            </Route>
            <Route path='/:userId/places' exact>
              <UserPlaces />
            </Route>
            <Route path='/auth'>
              <Auth/>
            </Route>
            <Redirect to='/auth'/>
      </Switch>

    )
  }

  return (
    <>
    <AuthContext.Provider value={{isLoggined:isLoggined,login:login,logout:logout}}>
      <Router >
        <MainNavigation />
        <main>
        {routes}
        </main>
      </Router>
      </AuthContext.Provider>
    </>
  );
}

export default App;
