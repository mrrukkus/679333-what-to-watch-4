import * as React from "react";
import {Link, Redirect} from "react-router-dom";
import {connect} from "react-redux";

import {AuthorizationStatus} from "../../reducer/user/user";
import {getAuthorizationStatus} from "../../reducer/user/selectors";
import {Operation as UserOperation} from "../../reducer/user/user";

interface Props {
  authorizationStatus: string,
  onLogin: ({}) => void,
}

class SignIn extends React.PureComponent<Props> {
  private loginRef: React.RefObject<HTMLInputElement>;
  private passwordRef: React.RefObject<HTMLInputElement>;
  
  constructor(props) {
    super(props);

    this.loginRef = React.createRef();
    this.passwordRef = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    const {onLogin} = this.props;

    evt.preventDefault();

    onLogin({
      login: this.loginRef.current.value,
      password: this.passwordRef.current.value
    });
  }

  render() {
    const {authorizationStatus} = this.props;

    return (
      authorizationStatus === AuthorizationStatus.AUTH ?
        <Redirect to="/"/> :
        <React.Fragment>
          <div className="user-page">
            <header className="page-header user-page__head">
              <div className="logo">
                <Link to="/" className="logo__link">
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
                <Link to="/" className="logo__link logo__link--light">
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

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLogin(authData) {
    dispatch(UserOperation.login(authData));
  },
});

export {SignIn};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
