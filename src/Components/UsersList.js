import React from 'react';
import {AppContext} from '../Context/contextProvider';
import auth  from './../utils/auth'
import Navbar from './Navbar/Navbar'

class UsersList extends React.Component {
    
    static contextType = AppContext;
    constructor(props){
        super(props);
        this.goToTheMain= this.goToTheMain.bind(this);
        this.userList= this.userList.bind(this)
    }//end of the constructor

     userList() {
        const users= auth.users;
        return (
            <ol>
              {users.map(users => <li>{users}</li>)}
            </ol>
          );
     }
      
     
   
    goToTheMain(){
       
        this.props.history.push('/mainpage')
    }

    render() {
        return     <div className="container">
            <Navbar {...this.props}/>
 <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav" style= {
      {backgroundColor: "blue", color: "white"}
    }>
 TopBar for searching users
    </div>
   

  </div>
</nav>
              <div className="card-body">
            <p>Merche</p>
            <p>Marcos</p>
            <p>Adrian</p>
            <p>Zsofi</p>
            <p>Petr</p>
                  <br/>
                  <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" onClick = {this.goToTheMain}>Main Page</button>
                    
               
              </div>
        
        
          
         </div>
          

          
    }



}// end of a class

export default UsersList