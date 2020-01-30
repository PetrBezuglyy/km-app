import React, {createContext, Component} from 'react';

export const AppContext= createContext();


export class ContextProvider extends Component{

constructor (props){
    super (props);
    this.LogOut= this.LogOut.bind(this);
    this.LogIn= this.LogIn.bind(this);

    
    this.state ={
        username:"",
        userLogged:false
     }
    } //end of a constructor

    LogOut(){
        this.setState({userLogged:false})
    }

    LogIn(username){
        this.setState({username:username})
        this.setState({userLogged:true})
        
    }

render(){
    return (
        <AppContext.Provider value =  {{
            ...this.state,
            LogOut:this.LogOut,
            LogIn:this.LogIn
        }}>
            {this.props.children}
        </AppContext.Provider>
    )
}

}// end of a class