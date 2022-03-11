import React, { Suspense } from 'react';
import 'antd/dist/antd.css';
import { Route, Switch, Router } from 'react-router-dom';
import { routers } from '@Routers/Router';
import UserLoginTemplate from '@Templates/UserLoginTemplate';
import Spinner from '@Components/Spinner';
import History from '@Utils/libs/History';
import CyberTemPlates from '@Templates/CyberTemPlates';
import ProjectCyberBugs from '@Pages/CyberBugs/Project/Project';
import LoginCyberBugs from '@Pages/CyberBugs/Login';
import CreateProject from '@Pages/CyberBugs/CreateProject';
import ProjectManager from '@Pages/CyberBugs/ProjectManager';
import ModalCyberbugs from '@HOC/Cyberbugs/ModalCyberbugs';

function App() {
  return (
    <div className='App'>
      <Router history={History}>
        <Suspense fallback={<Spinner />}>
          <ModalCyberbugs />
          <Switch>
            <CyberTemPlates
              path='/cyberbugs'
              exact
              Component={ProjectCyberBugs}
            />
            <CyberTemPlates
              path='/projectsetting'
              exact
              Component={CreateProject}
            />
            <CyberTemPlates
              path='/projectmanager'
              exact
              Component={ProjectManager}
            />
            <UserLoginTemplate path='/login' exact Component={LoginCyberBugs} />
            {routers.map(({ component, path }, index) => {
              return (
                <Route key={index} path={path} component={component} exact />
              );
            })}
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
