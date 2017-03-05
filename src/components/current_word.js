import React, { PropTypes } from 'react';

const CurrentWord = ({ current_word }) => {
  if (!current_word) {
    return null;
  }

  return (
    <div>
      { current_word }
    </div>
  );
};

CurrentWord.propTypes = {
  current_word: PropTypes.string
};

export default CurrentWord;
