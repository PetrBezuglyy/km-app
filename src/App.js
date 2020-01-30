import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ContextProvider } from './Context/contextProvider';
import LoginForm from './Components/LoginForm';
import MainPage from './Components/MainPage'

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
    <div className="App">
     <MainPage {...this.props}/>


<LoginForm {...this.props}/>
    </div>
    </ContextProvider>
  );
}
}
export default App;
