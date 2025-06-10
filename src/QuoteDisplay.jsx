import './QuoteDisplay.css'
import { useEffect, useState } from 'react'

const quotes = [
    "CODE", "INNOVATE", "CREATE", "EXPLORE", "THINK", "IMAGINE"
]

export default function QuoteDisplay(){
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
    const interval = setInterval(() => {
        setFade(false); //start to fade out the text
        setTimeout(() => {
            setIndex((prev) => (prev + 1) % quotes.length); //change quote
            setFade(true); //start to fade in the text
        }, 500); //fade out duration
    }, 2000); //change quote every 5 seconds
    return () => clearInterval(interval);
}, []); //clears interval timer to restart useEffect

    return (
    <h2 className={`quote ${fade ? 'fade-in' : 'fade-out'}`}>
      {quotes[index]}
    </h2>
  );
}