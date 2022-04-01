const initState = {
  list: []
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export const GAMEOVER = 'GAMEOVER';

export const gameOver = () => ({ type: GAMEOVER });
