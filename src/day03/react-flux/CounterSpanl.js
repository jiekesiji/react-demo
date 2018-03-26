import React, {Component} from 'react';
import Counter from './Counter'
import Summary from './Summary'

const initValue = [10, 20, 30];

export default class CounterSpanl extends Component {


    constructor(props) {
        super(props);
        // this.onUpdate = this.onUpdate.bind(this);
        this.state = {
            value: eval(initValue.join("+"))
        }
    }

    // onUpdate(newValue, preValue) {
    //     this.setState(() => {
    //         var totalNum = this.state.value + (newValue - preValue);
    //         return {value: totalNum}
    //     });
    // }





    render() {
        return (
            <div>
                <Counter counterName='First' initValue={initValue[0]} onUpdate={this.onUpdate}/>
                <Counter counterName='Second' initValue={initValue[1]} onUpdate={this.onUpdate}/>
                <Counter counterName='Third' initValue={initValue[2]} onUpdate={this.onUpdate}/>
                <hr/>
                {/*<span>total count:{this.state.value}</span>*/}
                <Summary/>
            </div>
        );
    }


}