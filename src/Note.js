import React, { Component } from 'react';

class Note extends Component {


  saveFile = (value, note) => {

    this.props.onEdit(value, note)

  }

  render(){

    return(

      <div className='notes-area-top'>
      <div>X</div>
        <textarea className='notes-area' defaultValue={this.props.note.value} type='textarea' name='notesvalue' rows='20' cols='35' onChange={(event) => this.saveFile(event.target.value, this.props.note)}/>
      </div>
    )
  }

}

export default Note
