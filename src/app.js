import React, { Component } from 'react';
import CurrentWord from './containers/current_word';
import WordProgress from './containers/word_progress';
import ParagraphProgress from './containers/paragraph_progress';
import ParagraphInput from './containers/paragraph_input';
import Navbar from './components/navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <ParagraphInput />
          <CurrentWord />
          <WordProgress />
          <ParagraphProgress />
        </div>
      </div>
    );
  }
}

export default App;
