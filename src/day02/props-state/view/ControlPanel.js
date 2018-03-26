/**
 * 组件中最外层的组件(父组件)
 */

import React, {Component} from 'react'
import Counter from "./Counter";

const buttonStyle = {
    margin: 10
}

export default class ControlPanel extends Component {

    constructor(props) {
        super(props);
        this.reRender = this.reRender.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
        this.state = {
            totalCount: 60
        }
    }

    onUpdate(newValue, previousValue) {
        this.setState({
            totalCount: this.state.totalCount + (newValue - previousValue)
        });
    }

    reRender() {
        // 强制组件重新渲染
        this.forceUpdate();
    }

    render() {
        return (
            <div>
                <Counter initValue={10} onUpdate = {this.onUpdate} counterName='First Counter'/>
                <Counter initValue={20} onUpdate = {this.onUpdate} counterName='Second Counter'/>
                <Counter initValue={30} onUpdate = {this.onUpdate} counterName='Third Counter'/>
                {/*<button onClick={this.reRender} style={buttonStyle}>click me to re-render</button>*/}
                <hr/>

                <span>total Count:{this.state.totalCount}</span>

            </div>
        );
    }


}