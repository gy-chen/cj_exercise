/**
 * WordProgress component
 *
 * Show cj exercise progress of the specified word keycodes.
 */
import _ from 'lodash';
import React, { Component, PropTypes } from 'react';


class WordProgress extends Component {

  _render_progress() {
    const { cjcodes, progress } = this.props;
    const combied_progress = _.map(cjcodes, (value, index) => {
      return index === progress ? <span key={value} className="current_keycode">{value}</span> : value;
    });
    return <p>{combied_progress}</p>;
  }

  render() {
    return (
      <div className="row row-current-progress">
        <div className="col-sm-12 col-md-4 col-md-offset-4 text-center">
          <span className="h2">{this._render_progress()}</span>
        </div>
      </div>
    );
  }
}

WordProgress.propTypes = {
  cjcodes: PropTypes.string,
  progress: PropTypes.number
};

export default WordProgress;
