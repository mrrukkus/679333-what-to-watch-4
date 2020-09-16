import * as React from "react";

import {DEFAULT_RATE} from "../../utils";
import {Film} from "../../adapters/films";

interface Props {
  film: Film,
  postComment: ({}: {
    id: number,
    rating: number,
    comment: string,
    target: {}
    history: any
  }, Film) => void,
  historyProp: any
}

interface State {
  rating: number,
  comment: string
}

const withReview = (Component) => {
  class WithReview extends React.PureComponent<Props, State> {
    private commentRef: React.RefObject<HTMLTextAreaElement>;
    private _lastTimeout: number | null;

    constructor(props) {
      super(props);

      this.state = {
        rating: DEFAULT_RATE,
        comment: null
      };

      this.commentRef = React.createRef();

      this.handleSubmitComment = this.handleSubmitComment.bind(this);
      this._setRating = this._setRating.bind(this);
      this._setComment = this._setComment.bind(this);

      this._lastTimeout = null;
    }

    _setRating(rateValue) {
      this.setState({
        rating: rateValue
      });
    }

    _setComment(commentValue) {
      clearTimeout(this._lastTimeout);
      this._lastTimeout = window.setTimeout(() => {
        this.setState({
          comment: commentValue
        });
      }, 400);
    }

    handleSubmitComment(evt) {
      evt.preventDefault();
      if (evt.target.tagName === `BUTTON`) {
        evt.target.disabled = true;
      }

      const {postComment, film, historyProp} = this.props;

      postComment({
        id: film.id,
        rating: this.state.rating,
        comment: this.state.comment,
        target: evt.target,
        history: historyProp
      }, film);
    }

    render() {
      return (
        <Component
          submitComment={this.handleSubmitComment}
          changeRating={this._setRating}
          changeComment={this._setComment}
        />
      );
    }
  }

  return WithReview;
};

export default withReview;
