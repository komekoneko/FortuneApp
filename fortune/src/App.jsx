import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

    const [input, setInput] = useState[""]

  const fortuneFm = () => {

  }

  return (
    <>
     <h1>今日の占い</h1>
     <label htmlFor="name">名前:</label>
      <input type="text" id='name' value={input}  onChange={(e) => setInput(e.target.value)} placeholder='名前を入力してください'/>
      <label htmlFor="born">生年月日:</label>
      <input type="date" placeholder='年/月/日' />
    <button onClick={fortuneFn}>占いを開始</button>
    </>
  )
}

export default App
