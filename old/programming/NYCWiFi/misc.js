//a few generic functions that are useful for this kind of map -- should not need to be modified

//resizes the svg to the window whenever the window size changes
function updateWindow(){
	var w = window;
	var window_width = w.innerWidth || e.clientWidth || g.clientWidth;
	var window_height = w.innerHeight|| e.clientHeight|| g.clientHeight;

	svg.attr("height", window_height);
}
window.onresize = updateWindow;

//manually adds a caption point
function add_caption_point(lat,lon,text,angle,xoffset,yoffset,fontsize,circle,radius) {
	if(!projection) return false;
	if(typeof lat=="undefined") return false;
	if(typeof lon=="undefined") return false;
	if(typeof text=="undefined") text = "";
	if(typeof angle=="undefined") angle = -20;
	if(typeof xoffset=="undefined") xoffset = 8;
	if(typeof yoffset=="undefined") yoffset = 5;
	if(typeof fontsize=="undefined") fontsize = "";
	if(typeof circle=="undefined") circle = false;
	if(typeof radius=="undefined") radius = 3;
	
	var gpoint = captions.append("g").attr("class", "gpoint");
	var x = projection([lon,lat])[0];
	var y = projection([lon,lat])[1];
	
	if(circle) {
		gpoint.append("svg:circle")
			.attr("cx", x)
			.attr("cy", y)
			.attr("class","label_point")
			.attr("r", radius+"px")
	}

	//conditional in case a point has no associated text
	if(text.length>0){
		gpoint.append("text")
			.attr("transform", function() { return "translate("+(x+xoffset)+","+(y+yoffset)+")"+ (angle!==false?" rotate("+angle+")":"")})
			.style("font-size", function() { return (fontsize?(fontsize+"px"):""); })
			.attr("class","label")
			.text(text);
	}
}

/* stage zoomer — lets you zoom in/out by clicking on things -- should not need to touch! */

var _path_strokes; //holds the data on the original line widths
var _circle_strokes;  //ditto strokes
var zoom_factor = 1; //keeps track of whether we are zoomed or not, and by how much

//this zooms the mouse in if you click on something
//you shouldn't need to modify anything here...
function zoom_it(d) {
	var x, y;
	var zoom_stage = stage; //set this to whatever big <g> element holds everything that should be zoomed
	//x and y are the pixel positions to center on
	//k is the zoom level
	if(!d&& !centered) {
		x = d3.mouse(this)[0];
		y = d3.mouse(this)[1];
		zoom_factor = 3;
		centered = true;
	} else if(!d && centered) {	//special case for clicking on things without positions
		x = width / 2;
		y = height / 2;
		zoom_factor = 1;
		centered = null;
	} else if(d.positions && centered !==d) { //if you click on something that has a "positions" property, it will center on it — this makes circles clickable
		x = d.positions[0];
		y = d.positions[1];
		zoom_factor = 5;
		centered = d;
	} else if (d && centered !== d) { //if you click on anything else that had position data (like a landform), it will figure out the center of it and them zoom on it
		var centroid = path.centroid(d);
		x = centroid[0];
		y = centroid[1];
		zoom_factor = 3;
		centered = d;
	} else { //if it detects it is already zoomed it, it zooms back out
		x = width / 2;
		y = height / 2;
		zoom_factor = 1;
		centered = null;
	}

	//by default this only attends to paths and circles
	//you could adopt it to also attend to other things with stroke-widths that you wanted to modify on the fly (so they aren't chunky when you zoom in)

	zoom_stage.selectAll("path")
	  .classed("active", centered && function(d) { return d === centered; });

	if(!_path_strokes) {
		_path_strokes = parseFloat(stage.select("path").style("stroke-width"));
	}
	if(!_circle_strokes) {
		_circle_strokes = parseFloat(stage.select("circle").style("stroke-width"));
	}
	zoom_stage.transition()
	  .duration(750)
	  .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + zoom_factor + ")translate(" + -x + "," + -y + ")")
	  .selectAll("path")
	  	.style("stroke-width",_path_strokes/zoom_factor)
	;
	circles.transition().selectAll("circle")
	  	.style("stroke-width",_circle_strokes/zoom_factor)
	; 
}
