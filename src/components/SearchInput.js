import React, { useState } from 'react'

function SearchInput({ onSearch }) {
  const [prompt, setPrompt] = useState('')

  function handleInputChange(event) {
    setPrompt(event.target.value)
  }

  function handleFormSubmit(event) {
    event.preventDefault()
    onSearch(prompt)
    setPrompt('')
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="ui icon input">
        <input className="prompt" value={prompt} onChange={handleInputChange}/>
        <i className="search icon" />
      </div>
    </form>
  )
}

export default SearchInput