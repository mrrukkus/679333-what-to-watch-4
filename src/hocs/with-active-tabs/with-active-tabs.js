import React from "react";
import PropTypes from "prop-types";

const withActiveTabs = (Component) => {
  class WithActiveTabs extends React.PureComponent {
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

  WithActiveTabs.propTypes = {
    defaultActiveTab: PropTypes.string.isRequired,
    onTabAction: PropTypes.func.isRequired,
    film: PropTypes.object.isRequired,
  };

  return WithActiveTabs;
};

export default withActiveTabs;
