/**
 * Paragraph input
 *
 * Input paragraph for exercise.
 */
import _ from 'lodash';
import React, { Component, PropTypes } from 'react';

class ParagraphInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      input_paragraph: ''
    };
  }

  render() {

    return (
      <div>
        <textarea
          onChange={({target: { value }}) => this.setState({ input_paragraph: value })}
          value={this.state.input_paragraph} />
        <button onClick={() => _.invoke(this.props, 'on_paragraph_input', this.state.input_paragraph)}>OK</button>
      </div>
    );
  }
}

ParagraphInput.propTypes = {
  on_paragraph_input: PropTypes.func
};

export default ParagraphInput;
