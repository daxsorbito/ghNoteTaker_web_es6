import React from 'react'
import NotesList from './NotesList'
import AddNote from './AddNote'

const Notes = ({username, notes, addNote}) => {
  return (
    <div>
      <h3> Notes for {username} </h3>
      <AddNote username={username} addNote={addNote} />
      <NotesList notes={notes} />
    </div>
  )
}

// class Notes extends React.Component {
//   render () {
//     return (
//       <div>
//         <h3> Notes for {this.props.username} </h3>
//         <AddNote username={this.props.username} addNote={this.props.addNote} />
//         <NotesList notes={this.props.notes} />
//       </div>
//     )
//   }
// }

Notes.proptTypes =  {
  username: React.PropTypes.string.isRequired,
  notes: React.PropTypes.array.isRequired,
  addNote: React.PropTypes.func.isRequired
}

export default Notes

