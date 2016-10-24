import React from 'react'
import Router from 'react-router'
import Repos from './Github/Repos'
import UserProfile from './Github/UserProfile'
import Notes  from './Notes/Notes'
import ReactFireMixin from 'reactfire'
import Firebase from 'firebase'
import helpers from '../utils/helpers'

var config = {
  apiKey: "AIzaSyDllhCt5rBItT1Rrd44SJtiZ9jmJGs0Q00",
  authDomain: "ghnotetaker-1abd0.firebaseio.com",
  databaseURL: "https://ghnotetaker-1abd0.firebaseio.com",
  storageBucket: "ghnotetaker-1abd0.firebaseio.com"
};
Firebase.initializeApp(config);

const Profile = React.createClass({
  mixins: [ReactFireMixin],
  getInitialState: function() {
    return {
      notes: [],
      bio: {},
      repos: []
    }
  },
  componentDidMount: function() {
     this.ref = new Firebase.database().ref('/')
     this.init(this.props.params.username)
  },
  componentWillReceiveProps: function(nextProps) {
    this.unbind('notes')
    this.init(nextProps.params.username)
  },
  init: function(username) {
     const childRef = this.ref.child(username)
     this.bindAsArray(childRef, 'notes')

     helpers.getGithubInfo(username)
     .then(function(data) {
       this.setState({
         bio: data.bio,
         repos: data.repos
       })
     }.bind(this))

  },
  componentWillUnmount: function() {
     this.unbind('notes')
  },
  handleAddNote: function(newNote) {
     this.ref.child(this.props.params.username).child(this.state.notes.length).set(newNote)
  },
  render: function() {
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={this.props.params.username} bio={this.state.bio}/>
        </div>
        <div className="col-md-4">
          <Repos username={this.props.params.username} repos={this.state.repos}/>
        </div>
        <div className="col-md-4">
          <Notes
            username={this.props.params.username}
            notes={this.state.notes}
            addNote={this.handleAddNote}
            />
        </div>
      </div>
    )
  }
})

module.exports = Profile
