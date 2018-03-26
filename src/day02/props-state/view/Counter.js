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
        this.updateCount = this.updateCount.bind(this);

        console.log("constructor" + this.props.counterName);
    }


    onIncrease() {
        // this.setState({
        //     value: this.state.value + 10
        // });
        this.updateCount(true);
    }


    updateCount(isIncrement) {
        var preValue = this.state.value;
        var newValue = isIncrement ? preValue + 10 : preValue - 10;
        this.setState({value: newValue});
        this.props.onUpdate(newValue, preValue);
    }

    onDecrease() {
        // this.setState(() => {
        //     var num = this.state.value - 10;
        //
        //     return {value: num < 0 ? 0 : num}
        // });
        this.updateCount(false);
    }

    componentWillMount() {
        console.log("componentWillMount" + this.props.counterName);
    }

    componentWillUpdate() {
        console.log("componentWillUpdate" + this.props.counterName);
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

    componentDidMount() {
        console.log("componentDidMount" + this.props.counterName);
    }

    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps" + nextProps.counterName);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate" + nextProps.counterName);
        return true;
    }

    componentDidUpdate() {
        console.log("componentDidUpdate" + this.props.counterName);
    }

    componentWillUnmount() {
        console.log("componentWillUnmount" + this.props.counterName);
    }


}

Counter.propTypes = {
    initValue: PropTypes.number,
    counterName: PropTypes.string.isRequired,
    onUpdate: PropTypes.func.isRequired
};

Counter.defaultProps = {
    initValue: 20
};

const buttonStyle = {
    margin: 10
};
