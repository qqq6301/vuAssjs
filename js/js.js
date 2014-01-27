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

YUI().use('dial', 'slider', 'event-valuechange', 'color', function (Y) {
	Y.one('.picker').addClass('yui3-skin-sam');
	
	var hue = new Y.Dial({
	        min: 0,
	        max: 360,
	        stepsPerRevolution: 360,
	        continuous: true,
	        centerButtonDiameter: 0.4,
	        render: '#hue-dial'
	    }),
	    sat = new Y.Slider({
	        min: 0,
	        max: 100,
	        value: 100,
	        render: '#sat-slider'
	    }),
	    lum = new Y.Slider({
	        min: 0,
	        max: 100,
	        value: 50,
	        render: '#lum-slider'
	    }),
	    satValue = Y.one('#sat-slider span'),
	    lumValue = Y.one('#lum-slider span'),
	    color = Y.one('.color');
	    
		hue.after('valueChange', function(e) {
	    updatePickerUI();
	});
	
	sat.after('thumbMove', function(e) {
	    updatePickerUI();
	});
	
	lum.after('thumbMove', function(e) {
	    lumValue.set('text', lum.get('value') + '%');
	    updatePickerUI();
	});
	
	
	function setPickerUI(hsl) {
	    if (typeof hsl.h !== 'undefined') {
	        hue.set('value', +hsl.h);
	    }
	
	    if (typeof hsl.s !== 'undefined') {
	        sat.set('value', +hsl.s);
	    }
	
	    if (typeof hsl.l !== 'undefined') {
	        lum.set('value', +hsl.l);
	    }
	}
	
	function updatePickerUI() {
	    var h = hue.get('value'),
	        s = sat.get('value'),
	        l = lum.get('value'),
	        hslString = Y.Color.fromArray([h, s, l], Y.Color.TYPES.HSL),
	        hexString = Y.Color.toHex(hslString);
	
	    satValue.set('text', s + '%');
	    lumValue.set('text', l + '%');
	
	    color.setStyle('backgroundColor', hexString);
	
	    updateOutput(hslString);
	}
	
	var hexOutput = Y.one('#hex-output'),
    rgbOutput = Y.one('#rgb-output'),
    hslOutput = Y.one('#hsl-output'),
    focused = null;

	hexOutput.on('focus', setFocused);
	hexOutput.on('blur', unsetFocused);
	hexOutput.on('valueChange', updatePickerFromValue);
	
	rgbOutput.on('focus', setFocused);
	rgbOutput.on('blur', unsetFocused);
	rgbOutput.on('valueChange', updatePickerFromValue);
	
	hslOutput.on('focus', setFocused);
	hslOutput.on('blur', unsetFocused);
	hslOutput.on('valueChange', updatePickerFromValue);
	
	function updateOutput(hslString) {
    if (hexOutput !== focused) {
        hexOutput.set('value', Y.Color.toHex(hslString));
    }
    if (rgbOutput !== focused) {
        rgbOutput.set('value', Y.Color.toRGB(hslString));
    }
    if (hslOutput !== focused) {
        hslOutput.set('value', hslString);
    }
	}
	
	function updatePickerFromValue(e) {
	    var val = e.newVal,
	        hsl = [];
	
	    if (Y.Color.toArray(val)) {
	        hsl = Y.Color.toArray(Y.Color.toHSL(val));
	        setPickerUI({
	            h: hsl[0],
	            s: hsl[1],
	            l: hsl[2]
	        });
	    }
	}
	
	function setFocused(e) {
	    focused = e.currentTarget;
	}
	
	function unsetFocused(e) {
	    if (focused === e.currentTarget) {
	        focused = null;
	    }
	}
	
	function initialize1(){
	window.alert("you are a dog");
	//initialize();
	updatePickerUI();
}
 // Code Here.
});


