// @flow
import * as React from 'react';
import './switch-btn.scss';

export default class SwitchBtn extends React.Component{
  render() {
    let { name , hideImagesHandler } = this.props;
    return (
        <div className='switch-container'>
            <label className="switch">
                <input type="checkbox" className='switch-input' onClick={()=>hideImagesHandler()} />
                <span className="slider round"></span>
            </label>
            <label className='switch-txt'>{name}</label>
        </div>
    );
  };
  
};