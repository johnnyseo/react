/*global kakao*/

import React, { Component, Fragment } from 'react';
import { Map, Marker, MarkerClusterer, Polyline } from 'react-kakao-maps'
import './App.css';

class App extends Component {

    componentDidMount() {
        const script = document.createElement('script');
        script.async = true;
        script.src = "https://dapi.kakao.com/v2/maps/sdk.js?appkey=249b86fc3cec22af8c70ccf3d687ba4d&autoload=false";
        document.head.appendChild(script);

        script.onload = () => {
            kakao.maps.load(() => {
                let el = document.getElementById('map');
                let map = new kakao.maps.Map(el, {
                    center: new kakao.maps.Coords(523951.25, 1085073.75)
                });
            });
        };
    }

    render() {
        return (
            <Fragment>
                <h1>js 카카오맵</h1>
                <div className="App" id="map"></div>
               
            </Fragment>
            
        );
    }
}

export default App;