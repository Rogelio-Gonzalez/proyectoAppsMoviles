import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ViewChild, ElementRef } from '@angular/core';
import {Marker} from '../../models/marker.model'
import{MapsModel } from '../../models/maps.model'
import{MarcasModel } from '../../models/marcas.model'

declare var google : any;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {
  map :string;
  mapa: MapsModel = new MapsModel();
  marker: MarcasModel= new MarcasModel();
  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;
  infoWindows: any = [];

  markers: Marker[] = [
    {
      title: 'Forty-Five Gym Suc. Nueva LindaVista',
      latitude: 25.705267,
      longitude: -100.230624
    },
    {
      title: 'Forty-Five Gym Suc. Sendero la Fe',
      latitude: 25.765369,
      longitude: -100.190349
    },
    
   
  ];
  constructor(
   
  ) { }

  ngOnInit(){

  }
  ionViewDidEnter() {
    this.showMap();
  }
  addMarkersToMap(markers) {
    //no pude tipar marker y infoWindow porque me marcaba errores en undefined
    //tambien intente tipar marker, pero me aparecia el mismo cuadro de texto con undefined
    for (let marker of markers) {
      this.marker.position = new google.maps.LatLng(marker.latitude, marker.longitude);
      let mapMarker = new google.maps.Marker({
        position: this.marker.position,
        title: marker.title,
        latitude: marker.latitude,
        longitude: marker.longitude
      });

      mapMarker.setMap(this.map);
      this.addInfoWindowToMarker(mapMarker);
    }
  }
  addInfoWindowToMarker(marker) {
      let infoWindowContent = '<div >' +
                                '<h2  class"text" style="color:#0047DF;">' + marker.title + '</h2>' +
                                '<b>Latitude: ' + marker.latitude + '</b>' + '<br>' +
                                '<b>Longitude: ' + marker.longitude + '</b>' +
                              '</div>';

    let infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent
    });

    marker.addListener('click', () => {
      this.closeAllInfoWindows();
      infoWindow.open(this.map, marker);
    });
    this.infoWindows.push(infoWindow);
  }

  closeAllInfoWindows() {
    for(let window of this.infoWindows) {
      window.close();
    }
  }

  showMap() {
    this.mapa.location = new google.maps.LatLng(25.726668, -100.211239);
    const options = {
      center: this.mapa.location,
      zoom: 12,
      disableDefaultUI: true
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
    this.addMarkersToMap(this.markers);
  }

}