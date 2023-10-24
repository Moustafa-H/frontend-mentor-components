'use client'

import Image from 'next/image'
import styles from './todo-app.module.css'
import { useEffect, useRef, useState } from 'react'
import TodoItem from '../_components/todo-app/TodoItem/TodoItem'
import Cookies from 'js-cookie'

interface TodoDictionary {
  id: number,
  element: JSX.Element,
}

const TodoApp = () => {
  const [inputText, setInputText] = useState('')

  const [darkMode, setDarkMode] = useState(true)
  const handleModeClick = () => {
    setDarkMode(!darkMode)
  }

  const inputTextRef = useRef<HTMLInputElement | null>(null)
  useEffect(() => {
    inputTextRef.current?.focus()
  }, [])


  const [todos, setTodos] = useState<TodoDictionary[]>([])
  useEffect(() => {
    const todosFromCookies = Cookies.get('todos')
    console.log('todosFromCookies:', todosFromCookies)
    if (todosFromCookies) {
      console.log('Setting todos from cookies:', JSON.parse(todosFromCookies))
      setTodos(JSON.parse(todosFromCookies))
    }
  }, [])

  useEffect(() => {
    if (todos.length > 0)
      Cookies.set('todos', JSON.stringify(todos))
  }, [todos])

  const handleAddTodoItem = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newTodo = {
      id: todos.length,
      element: <><TodoItem text={inputText} /><hr className={styles.hr} /></>,
    }
    setTodos((prevTodos) => [...prevTodos, newTodo])
    setInputText('')
  }

  return (
    <main className={ darkMode?styles.mainDark:styles.main }>
      <Image
        src={ darkMode?'./todo-app/bg-desktop-dark.jpg':'./todo-app/bg-desktop-light.jpg' }
        alt='background'
        width={1440}
        height={300}
        className={ styles.desktopBg }
        priority={true}
      />
      <section className={ styles.section }>
        <div className={ styles.topDiv }>
          <h1 className={ styles.h1 }>Todo</h1>
          <button onClick={handleModeClick} className={ styles.modeButton }><Image
            src={ darkMode?'./todo-app/icon-sun.svg':'./todo-app/icon-moon.svg' }
            alt='mode'
            width={26}
            height={26}
          /></button>
        </div>
        <div className={ styles.inputDiv }>
          <button className={ styles.inputCheck }></button>
          <form onSubmit={handleAddTodoItem}>
            <input
              type='text'
              placeholder='Create a new todo...'
              id='text'
              ref={ inputTextRef }
              value={ inputText }
              onChange={ (e)=>{setInputText(e.target.value)} }
              className={ styles.input }
              autoComplete='off'
            />
          </form>
        </div>
        <ul className={ styles.ul }>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.element}</li>
          ))}
        </ul>
        <p className={ styles.bottomText }>Drag and drop to reorder list</p>
      </section>
    </main>
  )
}

export default TodoApp