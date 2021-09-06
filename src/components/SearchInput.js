import React, { useState } from 'react'

function SearchInput() {
  return (
    <form>
      <div className="ui icon input">
        <input className="prompt" />
        <i className="search icon" />
      </div>
    </form>
  )
}

export default SearchInput