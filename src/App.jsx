import './App.css'
import NavBar from './NavBar'
import QuoteDisplay from './QuoteDisplay'

function App() {

  return (
    <>
    <div className='mainContainer'>
      <div className='description'>
        <h1>Hey my name is George!</h1>
        <QuoteDisplay></QuoteDisplay>
        <div className='photo'></div>
      </div>
      <NavBar></NavBar>
      <div id='about'>
        <h1>About Me</h1>
        <p>Second Year CS Major at Chaffey College with an interest in Web Development and Embedded Systems.
          My programming journey begin in 2023, and since then I have created various of projects in many different technologies. 
          I love playing basketball, rock climbing and going to the gym. Some other hobbies I love doing are making videos, playing piano, and learning languages
        </p>
        <p>I love making cool stuff! </p>
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
