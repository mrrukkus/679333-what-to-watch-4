import React, {createRef} from "react";
import PropTypes from "prop-types";
import {Link, Redirect} from "react-router-dom";
import {AuthorizationStatus} from "../../reducer/user/user.js";

class SignIn extends React.PureComponent {
  constructor(props) {
    super(props);

    this.loginRef = createRef();
    this.passwordRef = createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    const {onSubmit} = this.props;

    evt.preventDefault();

    onSubmit({
      login: this.loginRef.current.value,
      password: this.passwordRef.current.value
    });
  }

  render() {
    const {authorizationStatus} = this.props;
    console.log(this.props);
    return (
      authorizationStatus === AuthorizationStatus.AUTH ?
        <Redirect to={`/`}/> :
        <React.Fragment>
          <div className="user-page">
            <header className="page-header user-page__head">
              <div className="logo">
                <Link to={`/`} className="logo__link">
                  <span className="logo__letter logo__letter--1">W</span>
                  <span className="logo__letter logo__letter--2">T</span>
                  <span className="logo__letter logo__letter--3">W</span>
                </Link>
              </div>

              <h1 className="page-title user-page__title">Sign in</h1>
            </header>

            <div className="sign-in user-page__content">
              <form action="#" className="sign-in__form" onSubmit={this.handleSubmit}>
                <div className="sign-in__fields">
                  <div className="sign-in__field">
                    <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" ref={this.loginRef}/>
                    <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
                  </div>
                  <div className="sign-in__field">
                    <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" ref={this.passwordRef}/>
                    <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
                  </div>
                </div>
                <div className="sign-in__submit">
                  <button className="sign-in__btn" type="submit">Sign in</button>
                </div>
              </form>
            </div>

            <footer className="page-footer">
              <div className="logo">
                <Link to={`/`} className="logo__link logo__link--light">
                  <span className="logo__letter logo__letter--1">W</span>
                  <span className="logo__letter logo__letter--2">T</span>
                  <span className="logo__letter logo__letter--3">W</span>
                </Link>
              </div>

              <div className="copyright">
                <p>© 2019 What to watch Ltd.</p>
              </div>
            </footer>
          </div>
        </React.Fragment>
    );
  }
}

SignIn.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default SignIn;
