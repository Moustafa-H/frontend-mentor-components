'use client'

import styles from './TodoItem.module.css'

const TodoItem = ({text}: {text: string}) => {
  return (
    <div className={ styles.div }>
        <button className={ styles.check }></button>
        <p className={ styles.p }>{text}</p>
    </div>
  )
}

export default TodoItem