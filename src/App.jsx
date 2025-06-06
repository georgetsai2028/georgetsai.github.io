import './App.css'
import NavBar from './NavBar'
import QuoteDisplay from './QuoteDisplay'

function App() {

  return (
    <>
    <div className='mainContainer'>
      <div className='description'>
        <h1></h1>
        <div className='photo'></div>
      </div>
      <NavBar></NavBar>
      <QuoteDisplay/>
      <div id='about'>

      </div>
      <div id='project'>

      </div>
      <div id='resume'>

      </div>
    </div>
    </>
  )
}

export default App
