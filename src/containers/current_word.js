import { connect } from 'react-redux';
import CurrentWord from '../components/current_word';
import { current_word_selector } from '../selectors';

const mapStateToProps = (state) => (
  {
    current_word: current_word_selector(state)
  }
);

const CurrentWordContainer = connect(
  mapStateToProps
)(CurrentWord);


export default CurrentWordContainer;
