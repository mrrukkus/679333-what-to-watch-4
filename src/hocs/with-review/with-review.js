import React, {createRef} from "react";
import PropTypes from "prop-types";
import {DEFAULT_RATE} from "../../utils.js";

const withReview = (Component) => {
  class WithReview extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: DEFAULT_RATE,
      };

      this.commentRef = createRef();

      this.handleSubmitComment = this.handleSubmitComment.bind(this);
      this._setRating = this._setRating.bind(this);
    }

    _setRating(rateValue) {
      this.setState({
        rating: rateValue
      });
    }

    handleSubmitComment(evt) {
      evt.preventDefault();

      const {postComment, film} = this.props;

      postComment({
        id: film.id,
        rating: this.state.rating,
        comment: this.commentRef.current.value,
      });
    }

    render() {
      return (
        <Component
          commentRef={this.commentRef}
          submitComment={this.handleSubmitComment}
          changeRating={this._setRating}
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
