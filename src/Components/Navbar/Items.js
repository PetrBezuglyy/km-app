import React from 'react';


class Items extends React.Component{
    constructor(props) {
        super(props);
        };
render(){
    return (
        <a className={"nav-item nav-link " + this.props.active} href="#">{this.props.name} <span className="sr-only">(current)</span></a>
    )
}

}

export default Items;


