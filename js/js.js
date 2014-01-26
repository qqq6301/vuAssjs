//initialize();

document.write("Hello \ World!");

var map;

var bounds = new google.maps.LatLngBounds();

function initialize() {
  var myLatlng = new google.maps.LatLng(31.2304, 121.4737);
  var myLatlng2 = new google.maps.LatLng( 52.3702, 4.8952);
  var mapOptions = {
    zoom: 8,
    center: myLatlng
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
  

  var marker1 = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Shanghai,China'
  });
  
   bounds.extend(myLatlng);

  var marker2 = new google.maps.Marker({
      position: myLatlng2,
      map: map,
      title: 'Amsterdam,the Netherlands'
  });
  
  var contentStrM1='<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Shanghai,China</h1>'+
      '<div id="bodyContent">'+
	   "<p>This is Shanghai,home town of Meng Xiao Qian.He was born and studied there until his 20s.Shanghai is a mordern city.</p>";
  	   '</div>'+
       '</div>';
     
  var contentStrM2='<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Amsterdam,the Netherlands</h1>'+
      '<div id="bodyContent">'+
	   "<p>This is Amsterdam,the Netherlands.This is the city where 2 members of the group study and work.</p>";
  	   '</div>'+
       '</div>';
      
  var infowindow1 = new google.maps.InfoWindow({
      content: contentStrM1
  });
  var infowindow2 = new google.maps.InfoWindow({
      content: contentStrM2
  });
   google.maps.event.addListener(marker1, 'click', function() {
    infowindow1.open(map,marker1);
  });
	google.maps.event.addListener(marker2, 'click', function() {
    infowindow2.open(map,marker2);
  });

  bounds.extend(myLatlng2);
  map.fitBounds(bounds);
}

google.maps.event.addDomListener(window, 'load', initialize);

//Sortable table part

YUI().use("datatable-sort", function(Y) {
    var cols = [
        {key:"year", label:"Click to Sort Column A", sortable:true},
        {key:"month", label:"Click to Sort Column B",sortable:true},
        {key:"hcip", label:"Click to Sort Column C", sortable:true},
        {key:"muicp", label:"Click to Sort Column D", sortable:true},
        {key:"eicp", label:"Click to Sort Column E", sortable:true},
    ],
    data = [
	{"year":"2010","month":"November","hcip":"1.4","muicp":"1.9","eicp":"2.3"},
	{"year":"2010","month":"December","hcip":"1.8","muicp":"2.2","eicp":"2.7"},
	{"year":"2010","month":"","hcip":"0.9","muicp":"1.6","eicp":"2.1"},
	{"year":"2011","month":"January","hcip":"1.9","muicp":"2.3","eicp":"2.7"},
	{"year":"2011","month":"February","hcip":"2.0","muicp":"2.4","eicp":"2.9"},
	{"year":"2011","month":"March","hcip":"1.9","muicp":"2.7","eicp":"3.1"},
	{"year":"2011","month":"April","hcip":"2.1","muicp":"2.8","eicp":"3.3"},
	{"year":"2011","month":"May","hcip":"2.3","muicp":"2.7","eicp":"3.2"},
	{"year":"2011","month":"June","hcip":"2.3","muicp":"2.7","eicp":"3.1"},
	{"year":"2011","month":"July","hcip":"3.2","muicp":"2.6","eicp":"2.9"},
	{"year":"2011","month":"August","hcip":"3.2","muicp":"2.5","eicp":"3.0"},
	{"year":"2011","month":"September","hcip":"3.0","muicp":"3.0","eicp":"3.3"},
	{"year":"2011","month":"October","hcip":"2.8","muicp":"3.0","eicp":"3.3"},
	{"year":"2011","month":"November","hcip":"2.6","muicp":"3.0","eicp":"3.3"},
	{"year":"2011","month":"December","hcip":"2.5","muicp":"2.7","eicp":"3.0"},
	{"year":"2011","month":"","hcip":"2.5","muicp":"2.7","eicp":"3.1"},
	{"year":"2012","month":"January","hcip":"2.9","muicp":"2.7","eicp":"2.9"},
	{"year":"2012","month":"February","hcip":"2.9","muicp":"2.7","eicp":"2.9"},
	{"year":"2012","month":"March","hcip":"2.9","muicp":"2.7","eicp":"2.9"},
	{"year":"2012","month":"April","hcip":"2.8","muicp":"2.6","eicp":"2.7"},
	{"year":"2012","month":"May","hcip":"2.5","muicp":"2.4","eicp":"2.6"},
	{"year":"2012","month":"June","hcip":"2.5","muicp":"2.4","eicp":"2.5"},
	{"year":"2012","month":"July","hcip":"2.6","muicp":"2.4","eicp":"2.5"},
	{"year":"2012","month":"August","hcip":"2.5","muicp":"2.6","eicp":"2.7"},
	{"year":"2012","month":"September","hcip":"2.5","muicp":"2.6","eicp":"2.7"},
	{"year":"2012","month":"October","hcip":"3.3","muicp":"2.5","eicp":"2.6"},
	{"year":"2012","month":"December","hcip":"3.4","muicp":"2.2","eicp":"2.3"},
	{"year":"2012","month":"","hcip":"2.8","muicp":"2.5","eicp":"2.6"},
	{"year":"2013","month":"January","hcip":"3.2","muicp":"2.0","eicp":"2.1"},
	{"year":"2013","month":"February","hcip":"3.2","muicp":"1.8","eicp":"2.0"},
	{"year":"2013","month":"March","hcip":"3.2","muicp":"1.7","eicp":"1.9"},
	{"year":"2013","month":"April","hcip":"2.8","muicp":"1.2","eicp":"1.4"},
	{"year":"2013","month":"May","hcip":"3.1","muicp":"1.4","eicp":"1.6"},
	{"year":"2013","month":"June","hcip":"3.2","muicp":"1.6","eicp":"1.7"},
	{"year":"2013","month":"July","hcip":"3.1","muicp":"1.6","eicp":"1.7"},
	{"year":"2013","month":"August","hcip":"2.8","muicp":"1.3","eicp":"1.5"},
	{"year":"2013","month":"September","hcip":"2.4","muicp":"1.1","eicp":"1.3"},
	{"year":"2013","month":"October","hcip":"1.3","muicp":"0.7","eicp":"0.9"},
	{"year":"2013","month":"November","hcip":"1.2","muicp":"0.9","eicp":" "},
	{"year":"2019","month":"November","hcip":"3.2","muicp":"2.2","eicp":"2.4"}
    ],
    table = new Y.DataTable({
        columns: cols,
        data   : data,
        summary: "Contacts list",
        caption: "Table with simple column sorting"
    });
    table.render("#simple");
});

/*
 *  {key:"year", label:"Click to Sort Column A", sortable:true},
        {key:"month", label:"Click to Sort Column B",sortable:true},
        {key:"hcip", label:"Click to Sort Column C", sortable:true},
        {key:"muicp", label:"Click to Sort Column D", sortable:true},
        {key:"eicp", label:"Click to Sort Column E", sortable:true},
 */
 /*
YUI().use("datatable", function (Y) {

    // A table from data with keys that work fine as column names
    var simple = new Y.DataTable({
        columns: ["id", "name", "price"],
        data   : [
            { id: "ga_3475", name: "gadget",   price: "$6.99" },
            { id: "sp_9980", name: "sprocket", price: "$3.75" },
            { id: "wi_0650", name: "widget",   price: "$4.25" }
        ],
        summary: "Price sheet for inventory parts",
        caption: "Example table with simple columns"
    });
    
    simple.render("#simple");

});
onload="initialize()"
*/