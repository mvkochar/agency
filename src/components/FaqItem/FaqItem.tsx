import React from 'react'
import classes from './FaqItem.module.css'

type FaqItemProps = {
    id: number
    question: string
    answer: string
}

const FaqItem = ({ question, answer }: FaqItemProps) => {
    const [showAnswer, setShowAnswer] = React.useState(false)
    const handleAnswer = () => {
        setShowAnswer((prevState) => {
            return (
                !prevState
            )
        })
    }

    return (
        <div className={showAnswer ? `${classes.faq_item} ${classes.faq_item__active}` : classes.faq_item}>
            <div className={classes.faq_item_top}>
                <h4 className={classes.faq_item_title}>{question}</h4>
                <button className={classes.faq_item_action} onClick={handleAnswer}>
                    <img src={showAnswer ? "/images/up.png" : "/images/down.png"} alt="up/down" />
                </button>
            </div>
            <p className={showAnswer ? classes.faq_item_answer : classes.d_n}>{answer}</p>
        </div>
    )
}

export default FaqItem