import React from 'react'
import { useState } from 'react'

function App() {
  const [jd, setJd] = useState("");
  const [resume, setResume] = useState("");

  return (
    <>
      <textarea
        value={jd}
        onChange={(e) => setJd(e.target.value)}
      />

      <textarea 
        value={resume}
        onChange={(e) => setResume(e.target.value)}
      />

      <button onClick={() => console.log(jd.length, resume.length)}>
        Analyse
      </button>

       <pre>{jd.length} characters</pre>
    </>
  )
}

export default App