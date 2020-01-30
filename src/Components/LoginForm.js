import React from 'react';
import {AppContext} from '../Context/contextProvider';

class LoginForm extends React.Component {
    
    static contextType = AppContext;
    constructor(props){
        super(props);

    }//end of the constructor
    render() {
        return !this.context.userLogged && 
                <form>
                    <label>
                        Enter name and passwords
                    </label>
                    <br></br>
                    <label>
                        Name:<input /*value= {this.state.username} onChange = {this.handleUserName}*//>
                    </label>
                    <br></br>
                    <label>
                        Password:<input /* value= {this.state.password} onChange = {this.handleUserPass}*//>
                    </label>
                    <br></br>
                    <input type="submit" value="Submit" onClick = {this.context.LogIn} />
                </form>
    }



}// end of a class

export default LoginForm