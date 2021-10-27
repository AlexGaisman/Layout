import React from 'react';
import { SimpleLoaderPanel } from './Containers/SimpleLoaderPanel';

import {SplitScreenPage} from './pages/SplitScreenPage'
import { ListPage } from './pages/ListPage';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import { ModalPage } from './pages/ModalPage';
import { ContainerPage } from './pages/ContainerPage';
import { ResourceLoader } from './Containers/ResourceLoader';
import { ResourceLoaderPanel } from './Containers/ResourceLoaderPanel';
import { DataSourcePanel } from './Containers/DataSourcePanel';
import { ComponentType } from './pages/ComponentPage';
import { UncontrolledForm } from './ComponentTypes/UncontrolledForm';
import { ControlledForm } from './ComponentTypes/ControlledForm';
import { ControlledModalPanel } from './ComponentTypes/ControlledModalPanel';
import { UncontrolledOnboardingFlowPanel } from './ComponentTypes/UncontrolledOnboardingFlowPanel';
import { ControlledOnboardingFlowPanel } from './ComponentTypes/ControlledOnboardingFlowPanel';











export const App=()=>{

  return (
  <>
    <Link to='/splitscreen' style={{marginRight:'10px'}}>Split Screen</Link>
    <Link to='/lists' style={{marginRight:'10px'}}>Lists</Link>
    <Link to='/modal' style={{marginRight:'10px'}}>Modal</Link>
    <Link to='/containers' style={{marginRight:'10px'}}>Containers</Link>
    <Link to='/components' style={{marginRight:'10px'}}>Components</Link>
  <Switch>
    <Route path='/splitscreen' component={SplitScreenPage} />
    <Route path='/lists' component={ListPage} />
    <Route path='/modal' component={ModalPage} />
    <Route path='/containers' component={ContainerPage} />
    <Route path='/simpleloader' component={SimpleLoaderPanel}/>
    <Route path='/resourceloader' component={ResourceLoaderPanel}/>
    <Route path='/datasourceloader' component={DataSourcePanel}/>
    <Route path='/components' component={ComponentType} />
    <Route path='/uncontrolledForm' component={UncontrolledForm} />
    <Route path='/controlledForm' component={ControlledForm} />
    <Route path='/controlledModal' component={ControlledModalPanel} />
    <Route path='/uncontrolledOnboardingFlow' component={UncontrolledOnboardingFlowPanel} />
    <Route path='/controlledOnboardingFlow' component={ControlledOnboardingFlowPanel} />
  
  </Switch>


  


    </>
  );
};

export default App;
