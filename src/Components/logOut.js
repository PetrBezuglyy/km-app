import React, { useContext } from 'react';
import {AppContext} from './../Context/contextProvider';
import {withRouter} from 'react-router'

function LogOut(props){

const LogOut= () =>{
    context.LogOut();
    props.history.push('/')
}

    const context = useContext(AppContext) 
 return  <input type="button" value="Logout" onClick={LogOut}/>
}

export default withRouter(LogOut);