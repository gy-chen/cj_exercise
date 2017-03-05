import React, { Component } from 'react';
import { connect } from 'react-redux';
import ParagraphInput from '../components/paragraph_input';
import { setCurrentParagraph } from '../actions';


class ParagraphInputContainer extends Component {

  render() {
    const { current_paragraph } = this.props;
    if (current_paragraph) {
      return null;
    }
    return <ParagraphInput {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    current_paragraph: state.current_paragraph
  };
}

const mapDispatchToProps = {
  on_paragraph_input: setCurrentParagraph
};

export default connect(mapStateToProps, mapDispatchToProps)(ParagraphInputContainer);
