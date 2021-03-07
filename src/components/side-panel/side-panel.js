// @flow
import * as React from 'react';
import './side-panel.scss';

export default class SidePanel extends React.Component{

    render() {
        let { sidePanelStatus , sidePanelHandler } = this.props;

        return (
        <div className='side-panel-wrapper'>
            <div className={'side-panel slide-in'} id='side-panel' >
                <div className='header'>
                    <div className='close' onClick={()=>sidePanelHandler()}>
                        X
                    </div>
                </div>
                <div className='title'>
                    Set delivery area
                </div>
            </div>
        </div>
        );
    };
};