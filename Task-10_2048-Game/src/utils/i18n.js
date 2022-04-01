const lang = 'en';

// i18n text
const data = {
  lang: ['en'],
  default: 'en',
  text: {
    title: { en: 'React 2048' },
    chartSubTitle: {
      en: 'Come on! (ง •̀_•́)ง'
    },
    score: { en: 'SCORE' },
    best: { en: 'BEST' },
    tipTitle: { en: 'Tips' },
    tipContent: {
      en:
        'Use keyboard arrow keys (or `WASD` if you like) control blocks; Click undo button to revert to last step status if you regrets.'
    },
    commentTitle: {
      en: 'Welcome to leave comments'
    }
  }
};

const text = {};
Object.keys(data.text).map(key =>
  Object.defineProperty(text, [key], {
    get: () => data.text[key][lang]
  })
);

export default text;
