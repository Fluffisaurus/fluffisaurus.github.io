import { DefaultPage, AboutPage, ProjectsPage, ContactPage } from './Pages.js';
import { ProjectDefault, ProjectMotionArt, ProjectWifiOptimization } from './Projects.js'

export const routes = [
  {
    path: "/",
    component: DefaultPage,
    exact: true
  },
  {
    path: "/about",
    component: AboutPage,
    exact: false
  },
  {
    path: "/projects",
    component: ProjectsPage,
    exact: false,
    routes:[
      {
        path: "/projects/motionart",
        component: ProjectMotionArt,
        exact: true
      },
      {
        path: "/projects/wifiopt",
        component: ProjectWifiOptimization,
        exact: true
      },
      {
        path: "/projects/",
        component: ProjectDefault,
        exact: true
      }
    ]
  },
  {
    path: "/contact",
    component: ContactPage,
    exact: false
  }
]
