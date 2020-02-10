import React from "react";
import { AppContext } from "./../context/ContextProvider";
import Navbar from "./Navbar";
import Topbar from "./Topbar";

class Users extends React.Component {
    static contextType = AppContext;

    constructor(props) {
        super(props);
        this.state = {}//{listOfUsers: []}
       this.showUserPost=this.showUserPost.bind(this)
    }

    componentDidMount() {
        !this.context.userLogged && this.props.history.push("/");
        this.retrieveUsers();
        this.retrievePosts()
    }

    retrieveUsers(){
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then((json) => {
        //this.setState({ listOfUsers: json })
        this.context.setListOfUsers(json);
        this.context.setOriginalUsers(json);
         
      })
    }

    retrievePosts(){
        fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => {
    this.context.setListOfPosts(json)
  })
    }

    showUserPost(event){
      this.context.listofPosts.filter(post => (post.userId===event.target.id) && alert("Posts of user are: "+ post.body))
    }

    render() {
        return <div>
            <Navbar />
            <Topbar />
            <h6>This is the list of users:</h6>
            <ol> 
        
    {this.context.listOfUsers.map(user => 
    <li id={user.id} onClick={this.showUserPost}>{user.name}-{user.email}-{user.id}</li>)}
            </ol>
        </div>
    }

    //ol: ordered list (números) envuelve a li: list item

}

export default Users;