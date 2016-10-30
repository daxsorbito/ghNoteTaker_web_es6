import React from 'react'

const NotesList = ({notes}) => {
  const notesList = notes.map((note, index) => {
    return <li className="list-group-item" key={index}>{note}</li>
  })

  return (
    <ul className="list-group">
    { notesList }
    </ul>
  )
}

// class NotesList extends React.Component {
//   render() {
//     const { notes } = this.props
//     const notesList = notes.map((note, index) => {
//       return <li className="list-group-item" key={index}>{note}</li>
//     })

//     return (
//       <ul className="list-group">
//       { notesList }
//       </ul>
//     )
//   }
// }

export default NotesList
