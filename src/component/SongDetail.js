import React from 'react';
import {connect} from 'react-redux'
import { statement } from '@babel/template';

const SongDetail = ({selected}) => {
    console.log(selected)
   if(!selected){
       return (
           <div>Select a song</div>
       )
   }
   return (
       <div>
           <h3>{selected.title}</h3>
           <p>{selected.duration}</p>
       </div>
   )
}

const mapStateToProps = (state) => {
    return{
        selected: state.selectSong
    }
}
export default connect(mapStateToProps)(SongDetail)