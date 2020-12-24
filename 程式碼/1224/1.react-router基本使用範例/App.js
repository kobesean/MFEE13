import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom'

import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MainContent from './components/MainContent'

import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <Router>
      <>
        <MyNavbar />
        <MainContent>
          <Link to="/">首頁</Link>
          <Link to="/about">關於我們</Link>

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
          
        </MainContent>
        <MyFooter />
      </>
    </Router>
  )
}

export default App
