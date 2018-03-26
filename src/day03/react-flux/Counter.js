/**
 * 子组件
 */
import React, {Component} from 'react';

import PropTypes from 'prop-types';

import CounterStore from './stores/CounterStore';
import * as Actions from './actions/Actions'

const margin = {
    margin: 10
};
export default class Counter extends Component {


    constructor(props) {
        super(props);
        this.onIncrease = this.onIncrease.bind(this);
        this.onDecrease = this.onDecrease.bind(this);
        // this.upDate = this.upDate.bind(this);
        this.commitChange = this.commitChange.bind(this);
        this.state = {
            value: CounterStore.getCounterValues()[this.props.counterName],
            name: this.props.counterName
        }
    }

    commitChange() {
        this.setState({
            value: CounterStore.getCounterValues()[this.props.counterName]
        });
    }

    componentDidMount() {
        CounterStore.addChangeListener(this.commitChange);
    }

    componentWillUnmount() {
        CounterStore.removeChangeListener(this.commitChange)
    }

    onIncrease() {
        // this.upDate(true);
        Actions.increment(this.props.counterName);
    }

    onDecrease() {
        // this.upDate(false);
        Actions.decrement(this.props.counterName);
    }

    upDate(isIncrease) {
        var preValue = this.state.value;
        var newValue = isIncrease ? preValue + 10 : preValue - 10;
        this.setState({value: newValue});
        this.props.onUpdate(newValue, preValue);
    }

    render() {
        return (
            <div style={margin}>
                <button style={margin} onClick={this.onIncrease}>+</button>
                <button style={margin} onClick={this.onDecrease}>-</button>
                <span>{this.state.name} counter:{this.state.value}次</span>
            </div>
        );
    }


}


Counter.propTypes = {
    counterName: PropTypes.string.isRequired,
    initValue: PropTypes.number,
    // onUpdate: PropTypes.func
};

Counter.defaultProps = {
    initValue: 10
};