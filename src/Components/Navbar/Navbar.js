import React from 'react';
import Items from './Items'
import {AppContext, ContextConsumer} from './../../Context/contextProvider'
import WelcomeMessage from './WelcomeMessage'
import ThemeMessage from './../ThemeMessage'
import LogOut from './../logOut'
import ChangeTheme from './../ChangeTheme'
class Navbar extends React.Component{

static contextType = AppContext;
  constructor(props) {
    super(props);
    this.state = {show: false};
    };

    render(){ 
      
return this.context.userLogged && <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav" style= {
      this.context.theme === "light"?
      {backgroundColor: "grey", color: "white"}:
      {backgroundColor: "blue", color: "black"}
    }>
  Home
    </div>
    <WelcomeMessage/>
    <ContextConsumer>
      {({theme, name}) => (
       <div> 
         <ThemeMessage/>
        <LogOut/>
        <ChangeTheme/>
        </div>)}
    </ContextConsumer>

  </div>
</nav>
}
}
export default Navbar;