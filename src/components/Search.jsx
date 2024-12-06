import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const Search = ({ setCity }) => {
  const [input, setInput] = useState('')

  const handleSearch = (event) => {
    event.preventDefault()
    if (input) {
      setCity(input)
      setInput('')
    }
  }

  return (
    <Form onSubmit={handleSearch}>
      <Form.Group controlId="citySearch">
        <Form.Control
          type="text"
          placeholder="Enter city name"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </Form.Group>
      <Button
        className="d-flex justify-content-center my-3"
        variant="primary"
        type="submit"
        block
      >
        Search
      </Button>
    </Form>
  )
}

export default Search
