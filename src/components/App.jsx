import React from 'react'
import { camelCase } from 'lodash'


const App = () => {
    return (
        <div>
            {camelCase("Hello World React")}
        </div>
    )
}

export default App;