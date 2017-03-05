/**
 * WordProgress container
 *
 * Inject some logic of keep the progress of exercise of the word to component.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { current_word_keycodes_selector } from '../selectors';
import WordProgress from '../components/word_progress';
import { current_word_cjcode_selector } from '../selectors';
import { nextWordProgress } from '../actions';

// HOC that deals with cjcode input from user
function hoc(WrappedComponent) {
  const mapStateToProps = (state) => ({
    cjcode: current_word_cjcode_selector(state),
    cjcodes: current_word_keycodes_selector(state),
    progress: state.current_word_progress
  });

  const mapDispatchToProps = {
    on_cjcode_input_correct: nextWordProgress
  };

  class HOC extends Component {

    componentDidMount() {
      window.addEventListener('keydown', (event) => this.handle_keydown(event));
    }

    handle_keydown({ key }) {
      // TODO now check cjcode logic put in this hoc. maybe has a better place
      // for this.
      if (key === this.props.cjcode) {
        // input is correct.
        this.props.on_cjcode_input_correct();
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(HOC);
}



export default hoc(WordProgress);
