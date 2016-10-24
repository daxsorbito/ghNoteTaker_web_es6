import React from 'react'
import { Router } from 'react-router'
import { hashHistory } from 'react-router'

const SearchGithub = React.createClass({
  getRef: function(ref) {
    this.usernameRef = ref
  },
  handleSubmit: function() {
    const username = this.usernameRef.value
    this.usernameRef.value = ''
    hashHistory.push({pathname: "/profile/" + username})
  },
  render: function() {
    return (
      <div className="col-sm-12">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group col-sm-7">
            <input type="text" className="form-control" ref={this.getRef} />
          </div>
          <div className="form-group col-sm-5">
            <button type="submit" className="btn btn-block btn-primary">Search Github</button>
          </div>
        </form>
      </div>
    )
  }
})

module.exports = SearchGithub
