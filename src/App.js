import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ContextProvider } from './Context/contextProvider';
import LoginForm from './Components/LoginForm';
import MainPage from './Components/MainPage'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import auth from './utils/auth'


class  App extends React.Component {
  constructor(props) {
    super(props);
    /*this.state ={
      userLogged: context.userLogged
    };*/
    this.state ={loginStatus: auth.checkLocalAuth()};
    this.loginStatusUpdated= this.loginStatusUpdated.bind(this);
    };

    loginStatusUpdated(loginStatus){
      this.setState({loginStatus})
    }

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
