import React, { useState } from "react"
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("")
  const [isError, setIsError] = useState(false)

  // const firstValue = text || "hello world"
  // const secondValue = text && "hello world"

  return (
    <>
      <h1>{text || "John Doe"}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        Toddle Error
      </button>
      {isError && <h1>Error...</h1>}
      {isError ? (
        <p>There's an error...</p>
      ) : (
        <div>
          <h2>There's No Error</h2>
        </div>
      )}
    </>
  )
}

export default ShortCircuit
