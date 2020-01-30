import React from 'react';
import {AppContext} from '../Context/contextProvider';

class LoginForm extends React.Component {
    
    static contextType = AppContext;
    constructor(props){
        super(props);
        this.logIn= this.logIn.bind(this)

    }//end of the constructor

    logIn(){
        this.context.LogIn('')
        this.props.history.push('/mainpage')
    }
    
    render() {
        return !this.context.userLogged && 

      
  <div className="container">
    <div className="row">
      <div className="col-lg-10 col-xl-9 mx-auto">
        <div className="card card-signin flex-row my-5">
          <div className="card-img-left d-none d-md-flex">

          </div>
          <div className="card-body">
            <h5 className="card-title text-center">Login</h5>
            <form className="form-signin">
              <div className="form-label-group">
                <input type="text" id="inputUserame" className="form-control" placeholder="Username" required autofocus/>
                <label for="inputUserame">Username</label>
              </div>


              <div className="form-label-group">
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                <label for="inputPassword">Password</label>
              </div>

              <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" onClick = {this.logIn}>Log In</button>
                
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
    }



}// end of a class

export default LoginForm