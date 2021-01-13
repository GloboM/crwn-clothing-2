import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {
  auth,
  createUserProfile,
  createUserWithEmailAndPassword,
} from '../../firebase/firebase.utils';

import './sign-up.styles.scss';
class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleSubmit = async (e) => {
    const { email, password, confirmPassword, displayName } = this.state;
    e.preventDefault();
    if (!email || !displayName || password != confirmPassword)
      return alert("Passwords d'ont match");
    try {
      const { user } = await createUserWithEmailAndPassword(email, password);
      await createUserProfile(user, { displayName });
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (err) {
      console.log(
        'error while creating account with email and password : ',
        err.message
      );
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    e.preventDefault();
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-up">
        <h2 className="title">I don't have an account</h2>
        <span className="subtitle">Sign up with your email and password</span>

        <form onSubmit={this.handleSubmit} className="sign-up-form">
          <FormInput
            label="Display Name"
            type="text"
            name="displayName"
            required
            value={this.state.displayName}
            onChange={this.handleChange}
          />
          <FormInput
            label="Email"
            type="email"
            name="email"
            required
            value={this.state.email}
            onChange={this.handleChange}
          />
          <FormInput
            label="Password"
            type="password"
            name="password"
            required
            value={this.state.password}
            onChange={this.handleChange}
          />
          <FormInput
            label="confirm password"
            type="password"
            name="confirmPassword"
            required
            value={this.state.confirmPassword}
            onChange={this.handleChange}
          />
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
