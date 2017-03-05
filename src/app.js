import React, { Component } from 'react';
import CurrentWord from './containers/current_word';
import WordProgress from './containers/word_progress';
import ParagraphProgress from './containers/paragraph_progress';
import ParagraphInput from './containers/paragraph_input';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <CurrentWord />
        <WordProgress />
        <ParagraphProgress />
        <ParagraphInput />
      </div>
    );
  }
}

export default App;
