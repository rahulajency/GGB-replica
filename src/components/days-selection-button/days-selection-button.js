// @flow
import * as React from 'react';
import './days-selection-button.scss';

export default class DaySelectionBtn extends React.Component{
    
    constructor(props){
        super(props);
        
    }
    clickHandler = (slug) => {
        this.props.daysClickHandler(slug);   
    }

    render() {
        let {day ,activeDay} = this.props;
        return (
        <div className='days-selection'>
            <span className={"days-selection-btn"+( activeDay && activeDay.includes(day.slug) ? ' active' : '' )} data-day={day.slug} onClick={()=>this.clickHandler(day.slug)}>
            <span id="sel-btn-sign" className={ activeDay && activeDay.includes(day.slug) ? 'check' : 'plus-sign' } data-day={day.slug}></span>
                {day.name}
            </span>
        </div>
        );
    };
};