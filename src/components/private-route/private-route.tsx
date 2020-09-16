import * as React from "react";
import {Route, Redirect} from "react-router-dom";

import {AuthorizationStatus} from "../../reducer/user/user";

interface Props {
  render: (otherProps?: any) => JSX.Element,
  path: string,
  authorizationStatus: string,
  exact?: any,
}

const PrivateRoute: React.FC<Props> = (props: Props) => {
  const {render, path, exact, authorizationStatus} = props;

  return (
    <Route
      path={path}
      exact={exact}
      render={(otherProps) => {
        return (
          authorizationStatus === AuthorizationStatus.AUTH ?
            render(otherProps) :
            <Redirect to="/login" />
        );
      }}
    />
  );
};

export default PrivateRoute;
