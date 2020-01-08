import React from 'react';
import { Route } from 'react-router-dom';
import { TransitionGroup, Transition } from 'react-transition-group';
import { matchPath } from 'react-router-dom';
import { handleEnterAnimation, handleExitAnimation } from './Route_Animations';

import ContactPage from "../components/ContactPage";
import ForSalePage from "../components/ForSalePage";
import Header from "../components/Header";
import HomePage from "../components/HomePage";
import NotFoundPage from "../components/NotFoundPage";
import WhoPage from "../components/WhoPage";

const routes = [
  {
    component: HomePage,
    key: 'home',
    path: '/',
    exact: true
  },
  {
    component: WhoPage,
    key: 'who',
    path: '/who',
    exact: true
  },
  {
    component: ForSalePage,
    key: 'for-sale',
    path: '/for-sale',
    exact: true
  },
  {
    component: ContactPage,
    key: 'contact',
    path: '/contact',
    exact: true
  }
]

const filterRoutes = (location) => {
  return routes.filter(({ path, strict, exact }) => {
    return !!matchPath(location.pathname, {
      path,
      strict,
      exact
    })
  })
}

class Routes extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <Header />
        <Route render={({ location }) => {
          if (!filterRoutes(location).length) {
            return (
              <TransitionGroup appear>
                <Transition
                  key="404"
                  timeout={0}
                >
                  <NotFoundPage location={location} />
                </Transition>
              </TransitionGroup>
            )
          }
          const path = `/${location.pathname.split('/')[1]}`
            return (
              <TransitionGroup appear>
                {filterRoutes(location).map(({ key, ...props }) => (
                  <Transition
                    key={'child-' + key}
                    timeout={500}
                    onEnter={handleEnterAnimation}
                    onExit={handleExitAnimation}
                  >
                    {React.createElement(routes.find(r => r.path === path).component, {
                      ...props,
                      location,
                    }, null)}
                  </Transition>
                ))}
              </TransitionGroup>
            )
        }}/>
      </div>
    )
  }
}
export default Routes;