import React from 'react'
import Repos from './Github/Repos'
import UserProfile from './Github/UserProfile'
import Notes  from './Notes/Notes'
import getGithubInfo from '../utils/helpers'
import Rebase from 're-base'

var config = {
  apiKey: "AIzaSyDllhCt5rBItT1Rrd44SJtiZ9jmJGs0Q00",
  authDomain: "ghnotetaker-1abd0.firebaseio.com",
  databaseURL: "https://ghnotetaker-1abd0.firebaseio.com",
  storageBucket: "ghnotetaker-1abd0.firebaseio.com"
}

const base = Rebase.createClass(config)

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: [],
      bio: {},
      repos: []
    }
  }

  componentDidMount() {
    this.ref && base.removeBinding(this.ref)
    this.init(this.props.params.username)
  }
  componentWillReceiveProps(nextProps) {
    this.init(nextProps.params.username)
  }
  init(username) {
    this. ref = base.bindToState(username, {
      context: this,
      asArray: true,
      state: 'notes'
    })
     getGithubInfo(username)
     .then(function(data) {
       this.setState({
         bio: data.bio,
         repos: data.repos
       })
     }.bind(this))

  }
  componentWillUnmount() {
    base.removeBinding(this.ref)
  }
  handleAddNote(newNote) {
    base.post(this.props.params.username, {
      data: this.state.notes.concat([newNote])
    })
  }
  render() {
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
            addNote={(newNote) => this.handleAddNote(newNote)}
            />
        </div>
      </div>
    )
  }
}

export default Profile
