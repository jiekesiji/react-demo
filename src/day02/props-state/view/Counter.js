/**
 * 子组件,和用户进行实际交互的组件
 */

import React, {Component} from 'react';

import PropTypes from 'prop-types';

export default class Counter extends Component {


    constructor(props) {
        super(props);
        this.state = {
            value: this.props.initValue,
            name: this.props.counterName
        }
        this.onIncrease = this.onIncrease.bind(this);
        this.onDecrease = this.onDecrease.bind(this);

    }

    onIncrease() {
        this.setState({
            value: this.state.value + 10
        })
    }



    onDecrease() {
        this.setState(() => {
            var num = this.state.value - 10;

            return {value: num < 0 ? 0 : num}
        })
    }

    render() {
        return (
            <div>
                <button style={buttonStyle} onClick={this.onIncrease}>+</button>
                <button style={buttonStyle} onClick={this.onDecrease}>-</button>
                <span>{this.state.name}:{this.state.value}</span>
            </div>
        );
    }


}

Counter.propTypes = {
    initValue: PropTypes.number,
    counterName: PropTypes.string.isRequired
};

Counter.defaultProps = {
    initValue:20
};

const buttonStyle = {
    margin: 10
};
