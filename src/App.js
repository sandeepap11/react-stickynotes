import React, { Component } from 'react'
import Note from './Note'
import './App.css';


class App extends Component {

  state = { notes :
                [{id: 1, value: 'This is a note'},
                 {id: 2, value: 'This is also a note'},
                 {id: 3, value: 'This is a third note'}]
           }

  onEdit = (value, note) => {

    note.value = value
    this.setState((state) => {state.notes.concat([note])})

  }

  onAdd = () => {
    const note = {id: this.state.notes.length + 1,
                  value: ''}
    this.setState((state)=>({notes: state.notes.concat([note])}))

    console.log(this.state.notes)

  }

  render() {
    return (
      <div className="App">
        <div><ul>
      {this.state.notes.map((note) => (
          <li className='notes-list' key={note.id}>
            <Note note={note} onEdit={this.onEdit}/>
          </li>
      ))}
        </ul></div>

        <button onClick={this.onAdd}>Add</button>
      </div>
    );
  }
}

export default App;
