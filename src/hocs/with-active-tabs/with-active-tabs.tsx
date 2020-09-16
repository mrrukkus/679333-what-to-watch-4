import * as React from "react";
import {Subtract} from "utility-types";

import {Film} from "../../adapters/films";

interface State {
  activeTab: string
}

interface InjectingProps {
  defaultActiveTab: string,
  film: Film,
  onTabAction: () => void,
  loadComments: () => void,
}

const withActiveTabs = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;

  class WithActiveTabs extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);

      this.state = {
        activeTab: this.props.defaultActiveTab
      };

      this._changeTabHandler = this._changeTabHandler.bind(this);
    }

    _changeTabHandler(evt, title) {
      evt.preventDefault();
      this.setState({activeTab: title});
      this.props.onTabAction();
    }

    componentDidMount() {
      const {loadComments} = this.props;
      loadComments(this.props.film);
    }

    render() {
      return (
        <Component
          {...this.props}
          activeTab={this.state.activeTab}
          onTabChange={this._changeTabHandler}
        />
      );
    }
  }

  return WithActiveTabs;
};

export default withActiveTabs;
