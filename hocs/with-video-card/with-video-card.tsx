import * as React from "react";

import {Film} from "../../adapters/films";


interface Props {
  id: number,
  film: object,
  onImageAndTitleClick: (index: number, Film) => void,
  filmIndex: number,
  loadComments: (Film) => void,
}

interface State {
  isPlayingCard: boolean,
  isMouseOvered: boolean
}

const withVideoCard = (Component) => {
  class WithVideoCard extends React.PureComponent<Props, State> {
    private _lastTimeout: number | null;

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
      this.props.onImageAndTitleClick(this.props.filmIndex, this.props.film);
      this.props.loadComments(this.props.film);
      clearTimeout(this._lastTimeout);
    }

    _changeCardToVideoCard() {
      this._lastTimeout = window.setTimeout(() => {
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

  return WithVideoCard;
};

export default withVideoCard;
