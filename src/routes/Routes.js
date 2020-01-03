import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import { TransitionGroup, Transition } from 'react-transition-group';
import matchPath from 'react-router-dom/matchPath';
import { handleEnterAnimation, handleExitAnimation } from './Route_Animations';

import About from "../components/About";
import NotFoundPage from "../components/NotFoundPage";
import LandingPage from "../components/LandingPage";
import Careers from "../components/Careers";
import Innovative from "../components/Innovative";
import Custom from "../components/Custom";

const routes = [
  {
    component: LandingPage,
    key: 'home',
    path: '/',
    exact: true
  },
  {
    component: About,
    key: 'about',
    path: '/about',
    exact: true
  },
  {
    component: Custom,
    key: 'custom',
    path: '/news',
    exact: true
  },
  {
    component: Careers,
    key: 'contact',
    path: '/contact',
    exact: true
  },
  {
    component: Innovative,
    key: 'innovative',
    path: '/technology',
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
        <Route render={({ location }) => {
          if (!filterRoutes(location).length) {
            return (
              <TransitionGroup appear>
                <Transition
                  key="404"
                  timeout={0}
                  onEnter={() => console.log('notFound enter')}
                  onEntering={() => console.log('notFound entering')}
                  onEntered={() => console.log('notFound entered')}
                  onExit={() => console.log('notFound exit')}
                  onExiting={() => console.log('notFound exiting')}
                  onExited={() => console.log('notFound exited')}
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