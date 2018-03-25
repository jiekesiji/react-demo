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
    }

    reRender() {
        this.forceUpdate();
    }

    render() {
        return (
            <div>
                <Counter initValue={"10"} counterName='First Counter'/>
                <Counter initValue={20} counterName='Second Counter'/>
                <Counter initValue={30} counterName='Third Counter'/>
                <button onClick={this.reRender} style={buttonStyle}>click me to re-render</button>
            </div>
        );
    }


}