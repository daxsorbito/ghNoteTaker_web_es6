import React from 'react'
import { Router } from 'react-router'
import { hashHistory } from 'react-router'

class SearchGithub extends React.Component {
  getRef(ref) {
    this.usernameRef = ref
  }
  handleSubmit() {
    const username = this.usernameRef.value
    if(username) {
      this.usernameRef.value = ''
      hashHistory.push({pathname: "/profile/" + username})
    }
  }
  render() {
    return (
      <div className="col-sm-12">
        <form onSubmit={() => this.handleSubmit()}>
          <div className="form-group col-sm-7">
            <input type="text" className="form-control" ref={(ref) =>this.getRef(ref)} />
          </div>
          <div className="form-group col-sm-5">
            <button type="submit" className="btn btn-block btn-primary">Search Github</button>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchGithub
