import React from 'react';
import {AppContext} from '../Context/contextProvider';
import Navbar from './Navbar/Navbar'
class MainPage extends React.Component {
    
    static contextType = AppContext;
    constructor(props){
        super(props);
        this.logOut= this.logOut.bind(this)
    }//end of the constructor

    logOut(){
        this.context.LogOut('') // we need to use context function inside the component function...
        this.props.history.push('/') //... because we can push info to the routers from components only
    }

    render() {
        return this.context.userLogged && 
        <div className="container">
        <Navbar {...this.props}/>
              <div className="card-body">
                <h5 className="card-title text-center">Welcome to the main page!</h5>

                  </div>
                  <br/>

                  <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" onClick = {this.logOut}>Log Out</button>
                    
               
              </div>
          
          
      
    }



}// end of a class

export default MainPage