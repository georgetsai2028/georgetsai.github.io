import './App.css'
import NavBar from './NavBar'
import QuoteDisplay from './QuoteDisplay'

function App() {

  return (
    <>
    <div className='mainContainer'>
      <div className='description'>
        <div className='photo'></div>
      </div>
      <NavBar></NavBar>
      <div id='about'>
      <QuoteDisplay></QuoteDisplay>
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
