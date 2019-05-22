import React from 'react';
import ReactDOM from 'react-dom';
import {Router,hashHistory,Route,IndexRoute} from 'react-router'

import App from './App';
import Home from './RouterComponent/Home'
import About from './RouterComponent/About'
import Repos from './RouterComponent/Repos'
import Repo from './RouterComponent/Repo'
// 1.生成路由器：Router
// 2.注册路由器：Route path='路由路径' component={组件}
// 3.当请求的路由路径不确定的时候，注册路由的时候应该使用占位符 :xxx
const rootRouter = (
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path='/about' component={About}></Route>
            <Route path='/repos' component={Repos}>
                <Route path='/repos/:xxx/:yyy' component={Repo}></Route>
            </Route>
            
        </Route>
    </Router>
)

ReactDOM.render(rootRouter,document.getElementById('root'));


