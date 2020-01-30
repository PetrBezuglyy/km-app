import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ContextProvider } from './Context/contextProvider';
import LoginForm from './Components/LoginForm';
import MainPage from './Components/MainPage'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class  App extends React.Component {
  constructor(props) {
    super(props);
    /*this.state ={
      userLogged: context.userLogged
    };*/
    
    };


 render() {
  return (
    <ContextProvider>
      <Router>
        <Switch>
     <Route path ="/mainpage" exact component = {MainPage }/>
     <Route path ="/" exact component = {LoginForm }/>
    </Switch>
    </Router>
    </ContextProvider>
  );
}
}
export default App;
