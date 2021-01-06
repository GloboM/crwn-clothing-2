import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: '', password: '' });
    console.log('submitted');
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
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton>Sign in with google</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
