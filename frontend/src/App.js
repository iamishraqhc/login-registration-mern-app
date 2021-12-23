import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Login, Register, Welcome } from './Pages'

const App = () => {
    return (
        <div className="App">
            <Router>
                <Route path="/login" exact component={Login}/>
                <Route path="/register" exact component={Register}/>
                <Route path="/welcome" component={Welcome}/>
            </Router>
        </div>
    )
}

export default App
