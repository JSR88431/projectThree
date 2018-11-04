import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from "react";
 export class MapContainer extends Component {
   state = {
     showingInfoWindow: false,
     activeMarker: {},
     selectedPlace: {},
   };

   style = {
     width: '50%',
     height: '50%',
   }

   onMarkerClick = (props, marker, e) =>
     this.setState({
       selectedPlace: props,
       activeMarker: marker,
       showingInfoWindow: true
     });
     onMapClicked = (props) => {
       if (this.state.showingInfoWindow) {
         this.setState({
           showingInfoWindow: false,
           activeMarker: null
         })
       }
     };
 render() {
   return (
     <div style={this.style}>
     <Map google={this.props.google}
         onClick={this.onMapClicked}>
       <Marker onClick={this.onMarkerClick}
               name={'Current location'} />
       <InfoWindow
         marker={this.state.activeMarker}
         visible={this.state.showingInfoWindow}>
           <div>
             <h1>{this.state.selectedPlace.name}</h1>
           </div>
       </InfoWindow>
     </Map>
     </div>
   )
 }
}
export default GoogleApiWrapper({
 apiKey: "AIzaSyDK06MpCGGG6dvjsnPt4m91gW0TMB0GueY"
})(MapContainer)