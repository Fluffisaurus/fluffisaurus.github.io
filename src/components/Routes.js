import { Default, About, Projects, Contact } from './Pages.js';

export const routes = [
  {
    path: "/",
    component: Default,
    exact: true
  },
  {
    path: "/about",
    component: About,
    exact: false
  },
  {
    path: "/projects",
    component: Projects,
    exact: false,
    routes:[
      {
        path: "/projects/motion-art",
        // component: ProjectMotionArt,
        exact: true
      },
      {
        path: "/projects/ant-tower-defense",
        // component: ProjectATD,
        exact: true
      },
      {
        path: "/projects/climate-analysis",
        // component: ProjectClimateDataAnalysis,
        exact: true
      },
      {
        path: "/projects/wifi-opt",
        // component: ProjectWifiOptimization,
        exact: true
      },
      {
        path: "/projects/",
        // component: ProjectDefault,
        exact: true
      }
    ]
  },
  {
    path: "/contact",
    component: Contact,
    exact: false
  }
]
