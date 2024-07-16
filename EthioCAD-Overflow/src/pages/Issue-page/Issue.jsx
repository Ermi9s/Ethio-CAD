import React from 'react'

function Issue() {
  return (
    <div className="issue-content">
        <div className="topic">
            <h2>Topic</h2>
            <input type="text" />
        </div>

        <div className="desc">
            <h2>Description</h2>
            <textarea rows="10" cols="100" name="desc" id="desc"></textarea>
        </div>

        <button type="submit">Issue</button>
    </div>
  )
}

export default Issue
