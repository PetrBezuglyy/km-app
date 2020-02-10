import React from 'react';
import { createContext } from "react";
import Auth from '../utils/Auth';

export const AppContext = createContext();

export class ContextProvider extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        userName: "",
        userLogged: false, 
        listOfUsers: [], 
        originalUsers: [],
        listofPosts:[],
        choosenUser:""
    
    };
        this.processLogout = this.processLogout.bind(this);
        this.setUserLogged = this.setUserLogged.bind(this);
        this.setUserName = this.setUserName.bind(this);
        this.setListOfUsers = this.setListOfUsers.bind(this);
        this.setOriginalUsers = this.setOriginalUsers.bind(this);
        this.setListOfPosts= this.setListOfPosts.bind(this)
        this.testMessage= this.testMessage.bind(this)
        this.setChoosenUser=this.setChoosenUser.bind(this)
    }


    processLogout(){
        this.setState({userLogged: false, userName: ""});
        Auth.removeUserCredentials();
    }

    setUserLogged(status){
        this.setState({userLogged: status}); 
        
    }

    setUserName(user){
        this.setState({userName: user});
    }

    componentDidMount(){
        Auth.checkLocalAuth() && this.setUserValues();
    }
   

    setUserValues(){
        this.setState({userLogged: true, userName: Auth.getUserName()});
    }

    setListOfUsers(list){
        this.setState({listOfUsers: list});
    }

    setListOfPosts(list){
        this.setState({listofPosts: list})
    }
    setOriginalUsers(list){
        this.setState({originalUsers: list});
    }
    setChoosenUser(event){
        this.setState({choosenUser:event.target.id})
    }

    testMessage(){
        alert("Last user post is:")

    }


    render() {
        return (
            <AppContext.Provider
                value={{ ...this.state, setUserLogged: this.setUserLogged, processLogout:this.processLogout, setUserName: this.setUserName,
                    setListOfUsers: this.setListOfUsers, setOriginalUsers: this.setOriginalUsers,
                    setListOfPosts:this.setListOfPosts,testMessage:this.testMessage,
                    setChoosenUser: this.setChoosenUser}}
            >

                {this.props.children}

            </AppContext.Provider>
        );
    }

}

export const ContextConsumer = AppContext.Consumer;