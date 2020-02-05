import {combineReducers} from 'redux'

const songReducer = () => {
    return [
        { title: 'No Scrubs', duration: '4:04' },
        { title: 'Macarena', duration: '3:44' },
        { title: 'All Star', duration: '1:23' },
        { title: 'I want it that way', duration: '3:59' }
    ]
}

const selectedSongReducer = (selectSong = null, action) => {
    switch (action.type) {
        case 'SELECTED_SONG':
            console.log(action.payload)
            return action.payload;
        default:
            return selectSong;
    }
}

export default combineReducers({
    song: songReducer,
    selectSong: selectedSongReducer
})