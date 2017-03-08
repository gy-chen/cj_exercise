import React, { PropTypes } from 'react';

const CurrentWord = ({ current_word }) => {
  if (!current_word) {
    return null;
  }

  return (
    <div className="row">
      <div className="col-sm-12 col-md-offset-4 col-md-4 text-center">
        <span className="h1">{ current_word }</span>
      </div>
    </div>
  );
};

CurrentWord.propTypes = {
  current_word: PropTypes.string
};

export default CurrentWord;
