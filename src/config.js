const config = {
  GAME: {
    DIFFICULTY: {
      EASY: 4,
      MEDIUM: 5,
      HARD: 6
    },
    TYPE: {
      PRACTICE: 1,
      CHALLENGE: 2,
      COUNTDOWN: 3
    },
    ACTIONS: {
      SOLUTION: 1,
      NEW_GAME: 2,
      BACK_HOME: 3
    }
  },
  SOCIAL: {
    PLATFORMS: {
      FB: {
        NAME: 'Facebook',
        ICON: 'facebook',
        URL: (url) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURI(url)}`
      },
      TWITTER: {
        NAME: 'Twitter',
        ICON: 'twitter',
        URL: (url, msg, tags) => {
          return `http://twitter.com/` +
            (url  ? `share?` : `intent/tweet?`) +
            (msg  ? `text=${encodeURI(msg)}&` : '') +
            (url  ? `url=${encodeURI(url)}&`  : '') +
            (tags ? `hashtags=${encodeURI(tags.join(','))}` : '')
        }
      }
    },
    MESSAGE: 'I use GuessLock and it help me to remember my pattrn.',
    TAGS: ['guesslock']
  },
  URL: 'https://66ton99.github.io/guesslock/',
  COLORS: {
    BRIGHT:  '#ffffff',
    DARK:    '#000000',
    SUCCESS: '#116699',
    ERROR:   '#ff0000'
  },
  PATTERN: {
    HEX_COLOR_START: '66',
    HEX_COLOR_END:   'FF'
  }
}

export default config
