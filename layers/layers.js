var wms_layers = [];

var format_streets_0 = new ol.format.GeoJSON();
var features_streets_0 = format_streets_0.readFeatures(json_streets_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_streets_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_streets_0.addFeatures(features_streets_0);cluster_streets_0 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_streets_0
});
var lyr_streets_0 = new ol.layer.Vector({
                declutter: true,
                source:cluster_streets_0, 
                style: style_streets_0,
                interactive: true,
                title: '<img src="styles/legend/streets_0.png" /> streets'
            });
var format_stream_1 = new ol.format.GeoJSON();
var features_stream_1 = format_stream_1.readFeatures(json_stream_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_stream_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_stream_1.addFeatures(features_stream_1);
var lyr_stream_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_stream_1, 
                style: style_stream_1,
                interactive: true,
                title: '<img src="styles/legend/stream_1.png" /> stream'
            });
var format_schools_2 = new ol.format.GeoJSON();
var features_schools_2 = format_schools_2.readFeatures(json_schools_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_schools_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_schools_2.addFeatures(features_schools_2);cluster_schools_2 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_schools_2
});
var lyr_schools_2 = new ol.layer.Vector({
                declutter: true,
                source:cluster_schools_2, 
                style: style_schools_2,
                interactive: true,
                title: '<img src="styles/legend/schools_2.png" /> schools'
            });
var format_religion_centres_3 = new ol.format.GeoJSON();
var features_religion_centres_3 = format_religion_centres_3.readFeatures(json_religion_centres_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_religion_centres_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_religion_centres_3.addFeatures(features_religion_centres_3);cluster_religion_centres_3 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_religion_centres_3
});
var lyr_religion_centres_3 = new ol.layer.Vector({
                declutter: true,
                source:cluster_religion_centres_3, 
                style: style_religion_centres_3,
                interactive: true,
                title: '<img src="styles/legend/religion_centres_3.png" /> religion_centres'
            });
var format_railway_lines_4 = new ol.format.GeoJSON();
var features_railway_lines_4 = format_railway_lines_4.readFeatures(json_railway_lines_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_railway_lines_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_railway_lines_4.addFeatures(features_railway_lines_4);
var lyr_railway_lines_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_railway_lines_4, 
                style: style_railway_lines_4,
                interactive: true,
                title: '<img src="styles/legend/railway_lines_4.png" /> railway_lines'
            });
var format_polygon_5 = new ol.format.GeoJSON();
var features_polygon_5 = format_polygon_5.readFeatures(json_polygon_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_polygon_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_polygon_5.addFeatures(features_polygon_5);
var lyr_polygon_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_polygon_5, 
                style: style_polygon_5,
                interactive: true,
                title: '<img src="styles/legend/polygon_5.png" /> polygon'
            });
var format_palace_places_6 = new ol.format.GeoJSON();
var features_palace_places_6 = format_palace_places_6.readFeatures(json_palace_places_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_palace_places_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_palace_places_6.addFeatures(features_palace_places_6);
var lyr_palace_places_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_palace_places_6, 
                style: style_palace_places_6,
                interactive: true,
                title: '<img src="styles/legend/palace_places_6.png" /> palace_places'
            });
var format_minor_road_7 = new ol.format.GeoJSON();
var features_minor_road_7 = format_minor_road_7.readFeatures(json_minor_road_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_minor_road_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_minor_road_7.addFeatures(features_minor_road_7);
var lyr_minor_road_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_minor_road_7, 
                style: style_minor_road_7,
                interactive: true,
                title: '<img src="styles/legend/minor_road_7.png" /> minor_road'
            });
var format_major_road_8 = new ol.format.GeoJSON();
var features_major_road_8 = format_major_road_8.readFeatures(json_major_road_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_major_road_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_major_road_8.addFeatures(features_major_road_8);
var lyr_major_road_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_major_road_8, 
                style: style_major_road_8,
                interactive: true,
                title: '<img src="styles/legend/major_road_8.png" /> major_road'
            });
var format_hospitals_9 = new ol.format.GeoJSON();
var features_hospitals_9 = format_hospitals_9.readFeatures(json_hospitals_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hospitals_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hospitals_9.addFeatures(features_hospitals_9);
var lyr_hospitals_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_hospitals_9, 
                style: style_hospitals_9,
                interactive: true,
                title: '<img src="styles/legend/hospitals_9.png" /> hospitals'
            });
var format_gas_stations_10 = new ol.format.GeoJSON();
var features_gas_stations_10 = format_gas_stations_10.readFeatures(json_gas_stations_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gas_stations_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gas_stations_10.addFeatures(features_gas_stations_10);
var lyr_gas_stations_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gas_stations_10, 
                style: style_gas_stations_10,
                interactive: true,
                title: '<img src="styles/legend/gas_stations_10.png" /> gas_stations'
            });
var format_Expressway_11 = new ol.format.GeoJSON();
var features_Expressway_11 = format_Expressway_11.readFeatures(json_Expressway_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Expressway_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Expressway_11.addFeatures(features_Expressway_11);
var lyr_Expressway_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Expressway_11, 
                style: style_Expressway_11,
                interactive: true,
                title: '<img src="styles/legend/Expressway_11.png" /> Expressway'
            });
var format_event_centre_12 = new ol.format.GeoJSON();
var features_event_centre_12 = format_event_centre_12.readFeatures(json_event_centre_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_event_centre_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_event_centre_12.addFeatures(features_event_centre_12);
var lyr_event_centre_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_event_centre_12, 
                style: style_event_centre_12,
                interactive: true,
                title: '<img src="styles/legend/event_centre_12.png" /> event_centre'
            });
var format_carwash_13 = new ol.format.GeoJSON();
var features_carwash_13 = format_carwash_13.readFeatures(json_carwash_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_carwash_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_carwash_13.addFeatures(features_carwash_13);
var lyr_carwash_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_carwash_13, 
                style: style_carwash_13,
                interactive: true,
                title: '<img src="styles/legend/carwash_13.png" /> carwash'
            });

lyr_streets_0.setVisible(true);lyr_stream_1.setVisible(true);lyr_schools_2.setVisible(true);lyr_religion_centres_3.setVisible(true);lyr_railway_lines_4.setVisible(true);lyr_polygon_5.setVisible(true);lyr_palace_places_6.setVisible(true);lyr_minor_road_7.setVisible(true);lyr_major_road_8.setVisible(true);lyr_hospitals_9.setVisible(true);lyr_gas_stations_10.setVisible(true);lyr_Expressway_11.setVisible(true);lyr_event_centre_12.setVisible(true);lyr_carwash_13.setVisible(true);
var layersList = [lyr_streets_0,lyr_stream_1,lyr_schools_2,lyr_religion_centres_3,lyr_railway_lines_4,lyr_polygon_5,lyr_palace_places_6,lyr_minor_road_7,lyr_major_road_8,lyr_hospitals_9,lyr_gas_stations_10,lyr_Expressway_11,lyr_event_centre_12,lyr_carwash_13];
lyr_streets_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'street_names': 'street_names', 'easting': 'easting', 'northing': 'northing', });
lyr_stream_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Length': 'SHAPE_Length', });
lyr_schools_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'OBJECTID_1': 'OBJECTID_1', 'street_names': 'street_names', 'easting': 'easting', 'northing': 'northing', });
lyr_religion_centres_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'OBJECTID_1': 'OBJECTID_1', 'street_names': 'street_names', 'easting_lat': 'easting_lat', 'northing_long': 'northing_long', 'easting': 'easting', 'northing': 'northing', });
lyr_railway_lines_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Length': 'SHAPE_Length', });
lyr_polygon_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'AREA': 'AREA', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_palace_places_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'OBJECTID_1': 'OBJECTID_1', 'str_obtaind_no': 'str_obtaind_no', 'street_names': 'street_names', 'easting': 'easting', 'northing': 'northing', });
lyr_minor_road_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'name': 'name', 'SHAPE_Length': 'SHAPE_Length', });
lyr_major_road_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'SHAPE_Length': 'SHAPE_Length', });
lyr_hospitals_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'OBJECTID_1': 'OBJECTID_1', 'str_obtaind_no': 'str_obtaind_no', 'street_names': 'street_names', 'easting': 'easting', 'northing': 'northing', });
lyr_gas_stations_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'OBJECTID_1': 'OBJECTID_1', 'street_names': 'street_names', 'easting': 'easting', 'northing': 'northing', });
lyr_Expressway_11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'name': 'name', 'SHAPE_Length': 'SHAPE_Length', });
lyr_event_centre_12.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'street_nam': 'street_nam', 'easting': 'easting', 'northing': 'northing', });
lyr_carwash_13.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DESCRIPTION': 'DESCRIPTION', 'easting': 'easting', 'northing': 'northing', });
lyr_streets_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'street_names': 'TextEdit', 'easting': 'TextEdit', 'northing': 'TextEdit', });
lyr_stream_1.set('fieldImages', {'OBJECTID': '', 'SHAPE_Length': '', });
lyr_schools_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'OBJECTID_1': 'Range', 'street_names': 'TextEdit', 'easting': 'TextEdit', 'northing': 'TextEdit', });
lyr_religion_centres_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'OBJECTID_1': 'Range', 'street_names': 'TextEdit', 'easting_lat': 'TextEdit', 'northing_long': 'TextEdit', 'easting': 'TextEdit', 'northing': 'TextEdit', });
lyr_railway_lines_4.set('fieldImages', {'OBJECTID': '', 'SHAPE_Length': '', });
lyr_polygon_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'Range', 'AREA': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_palace_places_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'OBJECTID_1': 'Range', 'str_obtaind_no': 'TextEdit', 'street_names': 'TextEdit', 'easting': 'TextEdit', 'northing': 'TextEdit', });
lyr_minor_road_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'name': 'TextEdit', 'SHAPE_Length': 'TextEdit', });
lyr_major_road_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'SHAPE_Length': 'TextEdit', });
lyr_hospitals_9.set('fieldImages', {'OBJECTID': 'TextEdit', 'OBJECTID_1': 'Range', 'str_obtaind_no': 'Range', 'street_names': 'TextEdit', 'easting': 'TextEdit', 'northing': 'TextEdit', });
lyr_gas_stations_10.set('fieldImages', {'OBJECTID': 'TextEdit', 'OBJECTID_1': 'Range', 'street_names': 'TextEdit', 'easting': 'TextEdit', 'northing': 'TextEdit', });
lyr_Expressway_11.set('fieldImages', {'OBJECTID': 'TextEdit', 'name': 'TextEdit', 'SHAPE_Length': 'TextEdit', });
lyr_event_centre_12.set('fieldImages', {'OBJECTID': 'TextEdit', 'street_nam': 'TextEdit', 'easting': 'TextEdit', 'northing': 'TextEdit', });
lyr_carwash_13.set('fieldImages', {'OBJECTID': 'TextEdit', 'DESCRIPTION': 'TextEdit', 'easting': 'TextEdit', 'northing': 'TextEdit', });
lyr_streets_0.set('fieldLabels', {'OBJECTID': 'no label', 'street_names': 'inline label', 'easting': 'no label', 'northing': 'no label', });
lyr_stream_1.set('fieldLabels', {'OBJECTID': 'no label', 'SHAPE_Length': 'no label', });
lyr_schools_2.set('fieldLabels', {'OBJECTID': 'no label', 'OBJECTID_1': 'no label', 'street_names': 'inline label', 'easting': 'no label', 'northing': 'no label', });
lyr_religion_centres_3.set('fieldLabels', {'OBJECTID': 'no label', 'OBJECTID_1': 'no label', 'street_names': 'inline label', 'easting_lat': 'no label', 'northing_long': 'no label', 'easting': 'no label', 'northing': 'no label', });
lyr_railway_lines_4.set('fieldLabels', {'OBJECTID': 'no label', 'SHAPE_Length': 'inline label', });
lyr_polygon_5.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'AREA': 'inline label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_palace_places_6.set('fieldLabels', {'OBJECTID': 'no label', 'OBJECTID_1': 'no label', 'str_obtaind_no': 'no label', 'street_names': 'inline label', 'easting': 'no label', 'northing': 'no label', });
lyr_minor_road_7.set('fieldLabels', {'OBJECTID': 'no label', 'name': 'inline label', 'SHAPE_Length': 'no label', });
lyr_major_road_8.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'inline label', 'SHAPE_Length': 'no label', });
lyr_hospitals_9.set('fieldLabels', {'OBJECTID': 'no label', 'OBJECTID_1': 'no label', 'str_obtaind_no': 'no label', 'street_names': 'inline label', 'easting': 'no label', 'northing': 'no label', });
lyr_gas_stations_10.set('fieldLabels', {'OBJECTID': 'no label', 'OBJECTID_1': 'no label', 'street_names': 'inline label', 'easting': 'no label', 'northing': 'no label', });
lyr_Expressway_11.set('fieldLabels', {'OBJECTID': 'no label', 'name': 'inline label', 'SHAPE_Length': 'no label', });
lyr_event_centre_12.set('fieldLabels', {'OBJECTID': 'no label', 'street_nam': 'inline label', 'easting': 'no label', 'northing': 'no label', });
lyr_carwash_13.set('fieldLabels', {'OBJECTID': 'no label', 'DESCRIPTION': 'inline label', 'easting': 'no label', 'northing': 'no label', });
lyr_carwash_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});