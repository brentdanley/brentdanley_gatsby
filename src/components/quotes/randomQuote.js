import React from 'react'
import quotes from './quote_list.json'

const RandomQuote = (props) => {
    const randomIndex = Math.floor(Math.random() * Math.floor(quotes.length))
    return (
        <div className={props.styles.quoteWrapper}>
            <div className={props.styles.container}>
                <div className={props.styles.quotation}>{quotes[randomIndex].quotation}</div>
                <div className={props.styles.author}>~ {quotes[randomIndex].author}</div>
            </div>
        </div>
    )
}

export default RandomQuote