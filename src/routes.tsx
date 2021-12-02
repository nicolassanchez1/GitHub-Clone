import React from 'react'
import { RootStateOrAny, useSelector } from 'react-redux'
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom'
import EnterUser from './components/enter-user/EnterUser'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Home from './pages/home/Home'

export const AppRouter = () => {
  const { repositories } = useSelector((state: RootStateOrAny) => state.user)
  return (
    <Router>
      <Header />
      <Nav />
      <Switch>
        <Route
          exact
          path="/"
          component={repositories?.length ? Home : EnterUser}
        />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </Router>
  )
}
