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
      <div>
        {this._render_progress()}
      </div>
    );
  }
}

WordProgress.propTypes = {
  cjcodes: PropTypes.string,
  progress: PropTypes.number
};

export default WordProgress;
