import React from 'react'

const NotesList = React.createClass({
  render: function() {
    const notes = this.props.notes.map((note, index) => {
      return <li className="list-group-item" key={index}>{note['.value']}</li>
    })

    return (
      <ul className="list-group">
      { notes }
      </ul>
    )
  }
})

module.exports = NotesList;
