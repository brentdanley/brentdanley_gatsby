import React from 'react'
import quotes from './quote_list.json'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../utils/fontawesome'

const RandomQuote = (props) => {
    const randomIndex = Math.floor(Math.random() * Math.floor(quotes.length))
    return (
        <div className={props.styles.quoteWrapper}>
            <FontAwesomeIcon icon='quote-left' className={props.styles.iconLeft} />
            <div className={props.styles.container}>
                <div className={props.styles.quotation}>{quotes[randomIndex].quotation}</div>
                <div className={props.styles.author}>~ {quotes[randomIndex].author}</div>
            </div>
            <FontAwesomeIcon icon='quote-right' className={props.styles.iconRight} />
        </div>
    )
}

export default RandomQuote