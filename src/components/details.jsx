import React from 'react';
import { Form} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';  

import {useSelector} from 'react-redux';

function Views() {   
    const name= useSelector(state=>state.user.fname);
    const lname= useSelector(state=>state.user.lname);
    const gender=useSelector(state=>state.user.gender);
    const email= useSelector(state=>state.user.email);

        return(
            <Form size="large" >
            <Form.Group widths='equal'>
            <Form.Input fluid label='First name' icon="user" iconPosition="left" placeholder={name} readOnly  />
              <Form.Input fluid label='Last name' placeholder={lname} readOnly />
            </Form.Group>
            <Form.Input fluid label='Gender' icon="user" iconPosition="left" placeholder={gender} readOnly />
            <Form.Input fluid label='Email' icon="mail" iconPosition="left" placeholder={email} readOnly />
            
          </Form>
        );
}

export default Views;