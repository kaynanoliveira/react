import { useState } from "react"

const Teste = () => {

    const [name, setName] = useState('Kaynan')
    const HandleName = () => {
        setName('Kevin')
    }

  return (
    <div>
        <p>{name}</p>
        <button onClick={HandleName}>Alterar</button>
    </div>
  )
}

export {Teste}