import React from "react";
import PropTypes from "prop-types";

const withVideoCard = (Component) => {
  class WithVideoCard extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlayingCard: false,
        isMouseOvered: false
      };

      this._lastTimeout = null;
      this._renderDetailsHandler = this._renderDetailsHandler.bind(this);
      this._changeCardToVideoCard = this._changeCardToVideoCard.bind(this);
      this._changeVideoCardToCard = this._changeVideoCardToCard.bind(this);
    }

    _renderDetailsHandler() {
      this.props.onImageAndTitleClick(this.props.filmIndex);
      clearTimeout(this._lastTimeout);
    }

    _changeCardToVideoCard() {
      this._lastTimeout = setTimeout(() => {
        this.setState({isMouseOvered: true});
      }, 1000);
    }

    _changeVideoCardToCard() {
      clearTimeout(this._lastTimeout);
      this.setState({isMouseOvered: false});
    }

    render() {
      return (
        <Component
          {...this.props}
          isMouseOvered={this.state.isMouseOvered}
          onCardClick={this._renderDetailsHandler}
          onCardMouseOver={this._changeCardToVideoCard}
          onCardMouseOut={this._changeVideoCardToCard}
        />
      );
    }
  }

  WithVideoCard.propTypes = {
    film: PropTypes.object.isRequired,
    onImageAndTitleClick: PropTypes.func.isRequired,
    filmIndex: PropTypes.number.isRequired
  };

  return WithVideoCard;
};

export default withVideoCard;
