import React from 'react';
import { AppContext} from './../context/ContextProvider.js';
import Users from "./Users";

class Topbar extends React.Component {

    static contextType = AppContext;

    constructor(props) {
        super(props);
        this.searchUsers = this.searchUsers.bind(this);
        this.positiveLat = this.positiveLat.bind(this);
        this.negativeLat = this.negativeLat.bind(this);
       this.registrationRedirect = this.registrationRedirect.bind(this)
        this.createUser=this.createUser.bind(this)
    }


    searchUsers(event){
        this.context.setListOfUsers(this.context.originalUsers.filter(item=>item.name.toUpperCase().includes(event.target.value.toUpperCase())));
    }

    positiveLat(event){
        this.context.setListOfUsers(this.context.originalUsers.filter(item=>parseInt(item.address.geo.lat)>0));
    }

    negativeLat(event){
        this.context.setListOfUsers(this.context.originalUsers.filter(item=>parseInt(item.address.geo.lat)<0));
    }
    registrationRedirect(){
        this.props.history.push("/register");
      }
      createUser(){
        this.context.listOfUsers.push({
            name: "Petr",
            email:"3000@tropico.com",
            id:11
        })
        alert(this.context.listOfUsers[10].name)
        
      }
//{user.name}-{user.email}-{user.id}
    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                    <a className="form-inline"></a>
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" onChange={this.searchUsers} placeholder="Search" aria-label="Search"></input>
                    </form>
                    
<label >
positiveLat
</label>

                    <input type="checkbox" onChange={this.positiveLat} />
                    <label >
negativeLat
</label>
                    <input type="checkbox" onChange={this.negativeLat} />
                    <button  type="submit" onClick={this.registrationRedirect}>Register new User</button>
                </nav>
            </div>

        );
    }

}

export default Topbar;