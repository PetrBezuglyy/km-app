import React from 'react';
import {AppContext} from '../Context/contextProvider';


class MainPage extends React.Component {
    
    static contextType = AppContext;
    constructor(props){
        super(props);

    }//end of the constructor
    render() {
        return this.context.userLogged && 
          <div>
          <p1>
                Welcome to the main page!
            </p1>
         <br/>
            <button onClick = {this.context.LogOut} >LogOut button</button>
            </div>
    }



}// end of a class

export default MainPage