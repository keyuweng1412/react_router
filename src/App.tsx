import React from 'react';
import {Link} from 'react-router'
import './index.css'

const App: React.FC = (props) => {
  return (
    <div>
      App...组件
      <ul>
        <li><Link activeClassName='active' to='/about'>about</Link></li>
        <li><Link activeClassName='active' to='/repos'>repos</Link></li>
      </ul>
      {props.children}
    </div>
  );
}

export default App;
