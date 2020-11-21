import React,{Component} from './react'
import ReactDOM from './react-dom'

// babel的作用: 首先把相关的代码转换->调用React.createElement()方法,调用的时候会把转换后的结果以参数的新式传递给该方法
// React.createElement方法来自于React框架,作用就是返回对应的虚拟DOM

const elem = (
    <div className='box'>
        <p>111</p>
    </div>
)
console.log(elem);

//函数组件
function App(props){
    return (
        <div>
            <p>111</p>
        </div>
    )
}

//类组件
/*
class App extends Component{
    render(){
        return (
            <div>
                <p>111</p>
            </div>
        )
    }
}
*/
//ReactDOM.render 根据虚拟DOM挂载DOM节点
ReactDOM.render(<App title="app" />,document.getElementById('root'))
