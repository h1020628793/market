import React, { Component} from 'react'

import {Provider} from './context'

class HashRouter extends Component{
    constructor(props){
        super(props)
        //初始化数据
        this.state = {
            location:{
                pathname: window.location.hash.slice(1) || "/"
            }
        }
    }
    componentDidMount(){
        //设置默认的hash
        window.location.hash = window.location.hash || '/'
        //监听hash变化
        window.onhashchange = ()=>{
            //改变state->页面更新
            this.setState({
                location:{
                    pathname: window.location.hash.slice(1)
                }
            })
        }
    }
    render(){
        const value = {
            location:this.state.location
        }
        return (<Provider value={value}>{this.props.children}</Provider>)
    }

}

export default HashRouter