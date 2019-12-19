import { DefaultPage, AboutPage, ProjectsPage, ContactPage } from './Pages.js';
import { ProjectDefault, ProjectMotionArt, ProjectATD, ProjectClimateDataAnalysis, ProjectWifiOptimization } from './Projects.js'

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
        path: "/projects/motion-art",
        component: ProjectMotionArt,
        exact: true
      },
      {
        path: "/projects/ant-tower-defense",
        component: ProjectATD,
        exact: true
      },
      {
        path: "/projects/climate-analysis",
        component: ProjectClimateDataAnalysis,
        exact: true
      },
      {
        path: "/projects/wifi-opt",
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
