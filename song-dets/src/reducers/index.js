import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Soapy', duration: '3:12' },
    { title: 'Jogor', duration: '4:02' },
    { title: 'What the Price', duration: '4:36' },
    { title: 'Blowing Money Fast', duration: '3:28' },
  ];
};

const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};


export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});