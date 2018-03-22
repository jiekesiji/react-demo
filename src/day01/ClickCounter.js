/**
 * 创建新的组件
 */
import React, {Component} from 'react'


export default class ClickCounter extends Component {


    constructor(props) {
        super(props);

        this.state = {
            value: 0,
        }

        this.clickButton = this.clickButton.bind(this);

    }


    clickButton() {
        this.setState({
            value: this.state.value + 1
        });
    }

    render() {
        return (
            <div>
                < button onClick={this.clickButton}>点击我</button>
                <div>
                    当前点击了:{this.state.value}次
                </div>
            </div>
        );
    }

}