import './App.css'
import Education from './Education'
import General from './General'
import Practical from './Practical'

function generateCV(e) {
  e.preventDefault();
  return false;
}

function App() {
  return (
    <>
      <form onSubmit={generateCV}>
        <General />
        <hr></hr>
        <Education />
        <hr></hr>
        <Practical />
        <hr></hr>
        <button type="submit">Generate</button>
      </form>
    </>
  )
}

export default App
