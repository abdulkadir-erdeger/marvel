export default (state, action) => {
  switch (action.type) {
    case 'ADD_FAVOURITE':
      const {favouriteCharacter} = action.payload;
      return {
        ...state,
        favouriteCharacter: [...state.favouriteCharacter, favouriteCharacter],
      };
    case 'REMOVE_FAVOURITE':
      return {
        favouriteCharacter: [
          ...state.favouriteCharacter.filter(
            char => char !== action.payload.char,
          ),
        ],
      };
    default:
      return state;
  }
};
