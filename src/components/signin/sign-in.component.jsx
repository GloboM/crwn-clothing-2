import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {
  signInWithGoogle,
  signInWithEmailAndPassword,
} from '../../firebase/firebase.utils';

import './sign-in.styles.scss';
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async (e) => {
    const { email, password } = this.state;
    e.preventDefault();
    if (!email || !password) return;
    try {
      await signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (err) {
      console.log(
        'error while signing in with email and password : ',
        err.message
      );
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span className="subtitle">Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit} autoComplete="off">
          <FormInput
            label="Email"
            type="email"
            name="email"
            //required
            value={this.state.email}
            onChange={this.handleChange}
          />
          <FormInput
            label="Password"
            type="password"
            name="password"
            //required
            value={this.state.password}
            onChange={this.handleChange}
          />
          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton
              type="button"
              isGoogleButton
              onClick={signInWithGoogle}
            >
              Sign in with google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
