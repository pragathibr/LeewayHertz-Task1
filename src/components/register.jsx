import React from 'react';
import { Form, Message} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';  
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {setFname,setLname,setGender,setEmail,setPassword} from '../actions/index';

class Register extends React.Component{
    state={
        fname:'',
        lname:'',
        gender:'',
        email:'',
        password:'',
        error:'non',
    }

    handleChange= event =>{
        this.setState({ [event.target.name]: event.target.value})
    }

    handleSubmit = event =>{
        event.preventDefault();
        if(this.isFormEmpty(this.state)){
          this.setState({error: 'true'})
          console.log("Failure");
        }
        else{
          console.log("Success");
          this.setState({error: 'false'})

        }
    }

    isFormEmpty= ({fname,lname,gender,email,password}) =>{
        return !fname.length || !lname.length || !gender.length || !email.length || !password.length;
    }

    render(){
        const{fname, lname,gender,email,password, error}=this.state; 
        let button;
        if(error==='non'){
          button=<Form.Button>Submit</Form.Button>;
        }
        if(error==='true'){
          button=<Form.Button>Submit</Form.Button>
        }
        if(error==='false'){
          button=<Link to='/view'><Form.Button onClick={()=>{
            this.props.setFname(this.state.fname)
            this.props.setLname(this.state.lname)
            this.props.setGender(this.state.gender)
            this.props.setEmail(this.state.email)
          }}>View Details</Form.Button></Link>
        }

        return(
          <div> 
            <Form onSubmit={this.handleSubmit}>
            <Form.Group widths='equal'>
            <Form.Input fluid name="fname" icon="user" iconPosition="left" label='First name' placeholder='First name' onChange={this.handleChange} value={fname}/>
            <Form.Input fluid name="lname" icon="user" iconPosition="left" label='Last name' placeholder='Last name' onChange={this.handleChange} value={lname} />
            </Form.Group>
            <Form.Input name="gender" icon="genderless" iconPosition="left" label='Gender' placeholder='Gender' onChange={this.handleChange} value={gender}/>
            <Form.Input name="email" icon="mail" iconPosition="left" label='Email' placeholder='Enter Your Email...' onChange={this.handleChange} value={email}/>
            <Form.Input name="password" icon="lock" iconPosition="left" label='Password' placeholder='Enter Your Password...' type="password" onChange={this.handleChange} value={password}/>   
            {button}
            {
              error==='true' &&
              (
                <Message>
                  <h3>Form Empty</h3>
                </Message>
              )
            }
          </Form>
        </div>
        );
    }
}

const mapStateToProps= (state)=>{
  return{
    user: state.user
  }
}

const mapDispatchtoProps= ()=>{
  return{
    setFname,
    setLname,
    setGender,
    setEmail,
    setPassword
  }
}


export default connect(mapStateToProps,mapDispatchtoProps())(Register);