import React from 'react';
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom'
import Page from './components/Page';
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';
import Index from './Index';

import Admins from './components/admin/Admins';
import AdminEdit from './components/admin/AdminEdit';
import Roles from './components/admin/Roles';
import RoleEdit from './components/admin/RoleEdit';

import NewsEdit from './components/news/NewsEdit';

const routes = (
    <HashRouter>
        <Switch>
            <Route path='/' children={() => (
                <Page>
                    <Switch>

                        <Redirect exact from='/' to='/app/dashboard/index'/>

                        <Route path='/' exact component={Index}/>

                        <Route path='/login' exact component={Login}/>

                        <Route path='/app' children={() => (
                            <Index>

                                <Route path='/app/dashboard/index' component={Dashboard}/>

                                <Route path={'/app/admin/admins'} component={Admins}/>
                                <Route path={'/app/admin/admin-edit/:id'} component={AdminEdit}/>
                                <Route path={'/app/admin/roles'} component={Roles}/>
                                <Route path={'/app/admin/role-edit/:id'} component={RoleEdit}/>

                                <Route path={'/app/news/news-edit/:id'} component={NewsEdit}/>

                            </Index>
                        )}/>

                    </Switch>
                </Page>
            )}>
            </Route>

        </Switch>
    </HashRouter>
);


export default routes;
