import React from 'react'
import { MouseEventHandler } from 'react'
import { default as styles } from './App.module.css'
import Button from './components/button'

const onButtonClick: MouseEventHandler = (): void => {
  console.log('clicked')
}

function App() {
  return (
    <div className={styles.App}>
      <Button
        onClick={onButtonClick}
        backgroundColor={'lightgreen'}
        color={'black'}
      />
    </div>
  )
}

export default App
