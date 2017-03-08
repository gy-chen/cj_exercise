/**
 * ParagraphProgress component
 *
 * Show the progress in the specified paragrah.
 */
import _ from 'lodash';
import React, { Component, PropTypes } from 'react';


class ParagraphProgress extends Component {

  _render_progress() {
    const { paragraph, progress } = this.props;
    const combied_progress = _.map(paragraph, (value, index) => {
      return index === progress ? <span key={index} className="current_word">{value}</span> : <span key={index}>{value}</span>;
    });
    return <p>{combied_progress}</p>;
  }

  render() {
    return (
      <div className="row row-current-progress">
        <div className="col-md-12">
          {this._render_progress()}
        </div>
      </div>
    );
  }
}

ParagraphProgress.propTypes = {
  paragrah: PropTypes.string,
  progress: PropTypes.number
};

export default ParagraphProgress;
