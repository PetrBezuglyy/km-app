import React, { useContext } from 'react';
import {AppContext, ContextConsumer} from './../Context/contextProvider'

function ChangeTheme(props){
    const context = useContext(AppContext);
 return  <input type="button" value="Change Theme" onClick={/*this. not needed */context.toggleTheme}/>
}

export default ChangeTheme