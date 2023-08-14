import { useState } from 'react'
import './App.css'

function App() {
 

  return (
    <>
      <header>
        <h1>login</h1>
      </header>

      <main>
        <form action="">
          <div>
            <label htmlFor="usuario">usuario</label>
            <input type="text" id='usuario' placeholder='digite seu ususario' />
          </div>
          <div>
            <label htmlFor="senha">senha</label>
            <input type="password" id='senha' placeholder='digite sua senha' />
          </div>
          <button>Entrar</button>
        </form>
      </main>
    </>
  )
}

export default App
