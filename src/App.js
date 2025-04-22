import React, { useState } from 'react'

const App = () => {

    const [usuarios, setUsuarios] = useState(["Kevin", "Kaynan", "Matheus"])

    return(
        <div className="App">
            <h1>Hello World!</h1>
            {usuarios.map((item) => (
                <p>{item}</p>
            
            ))}
        </div>
    )
}
export default App;