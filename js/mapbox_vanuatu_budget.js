L.mapbox.accessToken = 'pk.eyJ1IjoieW9naXMiLCJhIjoiX3BPdFpWWSJ9.TKVBoQaLtmDdaDOUJkcJ9A';
var url = 'https://github.com/yougis/maps/blob/master/islandes_vanuatu.geojson';

var map = L.mapbox.map('map', 'yogis.kpmnf5cj')
  .setView([-17.5, 168.6], 7);