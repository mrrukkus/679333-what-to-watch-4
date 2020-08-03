import React, {createRef} from "react";
import PropTypes from "prop-types";
import {DEFAULT_RATE} from "../../utils.js";

const withReview = (Component) => {
  class WithReview extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: DEFAULT_RATE,
        comment: null
      };

      this.commentRef = createRef();

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
      this._lastTimeout = setTimeout(() => {
        this.setState({
          comment: commentValue
        });
      }, 400);
    }

    handleSubmitComment(evt) {
      evt.preventDefault();

      const {postComment, film} = this.props;

      postComment({
        id: film.id,
        rating: this.state.rating,
        comment: this.state.comment,
      });
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

  WithReview.propTypes = {
    film: PropTypes.object.isRequired,
    postComment: PropTypes.func.isRequired
  };

  return WithReview;
};

export default withReview;
