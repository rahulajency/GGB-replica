// @flow
import * as React from 'react';
import './side-panel.scss';

const apiKey = "AIzaSyB0SKixXrF06FzPDOzjONXAzYoFTjZ5cq8";

export default class SidePanel extends React.Component{

    componentDidMount() {
        if ("geolocation" in navigator) {
            console.log("Available");
            navigator.geolocation.getCurrentPosition((position) => {
                console.log("Latitude is ", position.coords.latitude);
                console.log("Longitude is ", position.coords.longitude);

                fetch("https://maps.googleapis.com/maps/api/geocode/json?latlng="+position.coords.latitude + "," + position.coords.longitude + "&language=en&key="+apiKey)
                    .then((resp) => resp.json())
                    .then((resp) => {
                        console.table('Data  = '+JSON.stringify(resp));
                    })
                    .catch((err) => console.log(err));
                // $.getJSON("http://maps.googleapis.com/maps/api/geocode/json?latlng="+position.coords.latitude + "," + position.coords.longitude + "&language=en", function(data) {
                //     var fulladd = data.results[0].formatted_address.split(",");
                //     var count= fulladd.length;
                //     console.log('Full added = '+fulladd[count-1]+' '+fulladd[count-2]);

                // });
            },(err)=> {
                console.log(err);
            });
        }else{
            console.log("Not Available");
        }

    }

    render() {
        let { sidePanelHandler } = this.props;

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