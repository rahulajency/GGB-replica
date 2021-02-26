// @flow
import * as React from 'react';
import './days-selection-button.scss';

export default class DaySelectionBtn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            clicked:false
        }
    }
    clickHandler = () => {
        let {clicked} = this.state;
        let clickVal = !clicked;
        this.setState({
            clicked:clickVal
        });
        
    }
    render() {
        let {clicked} = this.state;
        let {day} = this.props;
        return (
        <div className='days-selection'>
            <span className={"days-selection-btn"+( clicked ? ' active' : '' )} data-day="wednesday" onClick={()=>this.clickHandler()}>
        <span id="sel-btn-sign" className={ clicked ? 'check' : 'plus-sign' } data-day="wednesday">{!clicked && '+'}</span>
                {day}
            </span>
        </div>
        );
    };
};