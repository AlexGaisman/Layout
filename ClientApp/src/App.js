import React from 'react';
import { SimpleLoaderPanel } from './Containers/SimpleLoaderPanel';

import {SplitScreenPage} from './pages/SplitScreenPage'
import { ListPage } from './pages/ListPage';
import {
  Switch,
  Route,
  Link, NavLink
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
import { HOComponentPage } from './pages/HOComponentsPage';
import { HOComponentsPanel } from './HOComponents/HOComponentsPanel';
import { hOCPrintingProps } from './HOComponents/HOCPrintingProps';











export const App=()=>{

  return (
  <div className='navigation-header'>
    <NavLink to='/splitscreen' style={{marginRight:'10px'}} activeClassName='active-menu-item'>Split Screen</NavLink>
    <NavLink to='/lists' style={{marginRight:'10px'}} activeClassName='active-menu-item'>Lists</NavLink>
    <NavLink to='/modal' style={{marginRight:'10px'}} activeClassName='active-menu-item'>Modal</NavLink>
    <NavLink to='/containers' style={{marginRight:'10px'}} activeClassName='active-menu-item'>Containers</NavLink>
    <NavLink to='/components' style={{marginRight:'10px'}} activeClassName='active-menu-item'>Components</NavLink>
    <NavLink to='/hoccomponents' style={{marginRight:'10px'}} activeClassName='active-menu-item'>HOC Components</NavLink>
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
    <Route path='/hoccomponentspanel' component={HOComponentsPanel} />
    <Route path='/hoccomponents' component={HOComponentPage} />

  
  </Switch>


  


    </div>
  );
};

export default App;
