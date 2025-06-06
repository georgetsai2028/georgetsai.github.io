import './QuoteDisplay.css'
import { useState } from 'react'

const quotes = [
    "CODE", "INNOVATE", "CREATE", "EXPLORE", "THINK", "IMAGINE"
]

export default function QuoteDisplay(){
    const [quote, setQuote] = useState(1)

    function handleDisplay(){
        {quotes.map(quotes[quote])}
    }

    return(
        <h2>
            {quotes.map(quotes[quote])}
        </h2>
    )
}