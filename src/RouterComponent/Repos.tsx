import React from 'react'
import {Link} from 'react-router'

interface IState {
    repos: [
        {name:'facebook', repo:'yarn'},
        {name:'facebook', repo:'react'},
        {name:'google', repo:'augular'},
        {name:'antd', repo:'antd'},
    ]
}

class Repos extends React.Component<any,IState>{
    state:IState = {
       repos:[
        {name:'facebook', repo:'yarn'},
        {name:'facebook', repo:'react'},
        {name:'google', repo:'augular'},
        {name:'antd', repo:'antd'},
       ] 
    }

    render(){
        const {repos} = this.state
    
        return (
            <div>
                <h3>Repos组件的内容</h3>
                <ul>
                   {repos.map((item,index) => {
                       return <li key={index}><Link activeClassName='active2' to={`/repos/${item.name}/${item.repo}`}>{item.repo}</Link></li>
                   })}
                </ul>
                {this.props.children}
            </div>
        )
    }
}

export default Repos