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
      <div className="row">
        <div className="col-md-12">
          <div className="form">
            <div className="form-group">
              <label htmlFor="paragraph">Paragraph</label>
              <textarea
                id="paragraph"
                className="form-control"
                onChange={({target: { value }}) => this.setState({ input_paragraph: value })}
                value={this.state.input_paragraph} />
            </div>
            <button
              onClick={() => _.invoke(this.props, 'on_paragraph_input', this.state.input_paragraph)}
              className="btn btn-default"
              >OK</button>
          </div>
        </div>
      </div>
    );
  }
}

ParagraphInput.propTypes = {
  on_paragraph_input: PropTypes.func
};

export default ParagraphInput;
