export const setCurrentWord = (word) => (
  {
    type: 'SET_CURRENT_WORD',
    payload: word
  }
);

export const nextWordProgress = () => (
  {
    type: 'NEXT_WORD_PROGRESS'
  }
);

export const nextWord = () => (
  {
    type: 'NEXT_WORD'
  }
);

export const setCurrentParagraph = (paragraph) => (
  {
    type: 'SET_CURRENT_PARAGRAPH',
    payload: paragraph
  }
);

export const nextParagraphProgress = () => (
  {
    type: 'NEXT_PARAGRAPH_PROGRESS'
  }
);

export const reset = () => (
  {
    type: 'RESET'
  }
);
