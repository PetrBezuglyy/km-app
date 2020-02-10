import React from 'react';
import Auth from './../utils/Auth';
import { AppContext } from './../context/ContextProvider.js';

class Registration extends React.Component {

  static contextType = AppContext;

  constructor(props) {
    super(props);
    this.state = { };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.processLogin = this.processLogin.bind(this);
    this.redirect=this.redirect.bind(this)
    this.createUser=this.createUser.bind(this)
    //this.registrationRedirect = this.registrationRedirect.bind(this)
  }

 

 

  redirect() {
    //reusamos esta función en todo el componente
    //this.context.setUserLogged(true);
    //this.context.setUserName(Auth.getUserName()); //mejor de Auth que de window.localstorage.getItem("user") pq es el nivel más bajo y requiere menores cambios ulteriores
    this.props.history.push("/dashboard");
  }

  processLogin(event) {
    if (Auth.checkCredentials(this.state.username, this.state.password)) {
      Auth.storeAuth(this.state.username, this.state.password);
      this.redirect();
    } else {
      alert("Username and pass: " + this.state.username + " - " + this.state.password + " FAILED");
    }


    event.preventDefault();
  }

  

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }



  render() {
    return  (
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-xl-9 mx-auto">
            <div className="card card-signin flex-row my-5">
              <div className="card-img-left d-none d-md-flex">
              </div>
              <div className="card-body">
                <h5 className="card-title text-center">Registration</h5>
                <form className="form-signin">
                  <div className="form-label-group">
                    <input type="text" id="inputUserame" className="form-control" value={this.state.username} onChange={this.handleUsernameChange} placeholder="Username" required autofocus />
                    <label for="inputUserame">User</label>
                  </div>

                  <div className="form-label-group">
                    <input type="password" id="inputPassword" className="form-control" value={this.state.password} onChange={this.handlePasswordChange} placeholder="Password" required />
                    <label for="inputPassword">Password</label>
                  </div>
                  <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" onClick={this.createUser}>Register User</button>
                  <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" onClick={this.redirect}>Back to Login Page</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  }

}

export default Registration;