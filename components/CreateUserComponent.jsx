import React, {Component} from "react";
import UserService from '../service/UserService';

class CreateUserComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            id: this.props.match.params.id,
            
        }
    }
}