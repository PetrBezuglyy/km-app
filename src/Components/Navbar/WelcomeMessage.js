import React from 'react';
import {AppContext, ContextConsumer} from './../../Context/contextProvider'


class WelcomeMessage extends React.Component{
  
    static contextType= AppContext;
     
        render() {
            return  (
                <div>
                    Welcome {this.context.username}
                        
                </div>
            );
        }
     
        
    }
     

export default WelcomeMessage;