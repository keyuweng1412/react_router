import React from 'react'

function Repo(props:any){

    return <p>用户名：{props.params.xxx}，仓库名：{props.params.yyy}</p>
}

export default Repo