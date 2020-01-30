import React, {useContext} from 'react';
import {AppContext, ContextConsumer} from './../Context/contextProvider'



function ThemeMessage(props){
    const context = useContext(AppContext)
return <p1> {context.username} is using: {context.theme} theme</p1>
}

export default  ThemeMessage