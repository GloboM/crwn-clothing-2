import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

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

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
    console.log('submitted');
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

        <form onSubmit={this.handleSubmit}>
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
