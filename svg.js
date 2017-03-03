var svg = document.getElementById("vector");
var rid = 0;
var width = svg.getAttribute("width");
var height = svg.getAttribute("height");

var animateDot = function(e) {
    window.cancelAnimationFrame( rid );
    clear();
    
    var r = 5;
    var out = true;
    
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", "250");
    c.setAttribute("cy", "250");
    c.setAttribute("r", r);
    c.setAttribute("fill", "green");
    svg.appendChild(c);

    var circles = function() {
	var circleOut = function() {
	    c.setAttribute("r", r++);
	    if (r >= width/2 || r >= height/2) {
		out = false;
	    };
	};

	var circleIn = function() {
	    c.setAttribute("r", r--);
	    if (r == 0) {
		out = true;
	    };
	};
	
	if (out == true) {
	    circleOut();
	} else {
	    circleIn();
	};
	
	rid = window.requestAnimationFrame( circles );
    };
    
    circles();
    
}

var animateDVD = function() {
    window.cancelAnimationFrame( rid );
    clear();
       
    var x = Math.random() * 250;
    var y = Math.random() * 250;
    var w = 150;
    var h = 90;
    var right = true;
    var down = true;

    var img = document.createElementNS("http://www.w3.org/2000/svg", "image");
    img.setAttribute("href", "https://upload.wikimedia.org/wikipedia/en/thumb/1/18/Dvd-video-logo.svg/1024px-Dvd-video-logo.svg.png");
    img.setAttribute("x", x);
    img.setAttribute("y", y);
    img.setAttribute("width", w);
    img.setAttribute("height", h);
    svg.appendChild(img);

    var screensaver = function() {

	if (x >= width-w) {
	    right = false;
	} else if (x <= 0) {
	    right = true;
	}
	if (y >= height-h) {
	    down = false;
	} else if (y <= 0) {
	    down = true;
	}

	if (right == true) {
	    img.setAttribute("x", x++);
	} else {
	    img.setAttribute("x", x--);
	}
	if (down == true) {
	    img.setAttribute("y", y++);
	} else {
	    img.setAttribute("y", y--);
	}

	rid = window.requestAnimationFrame( screensaver );
    };

    screensaver();
    
};

var clear = function(e) {
    while (svg.lastChild){
	svg.removeChild(svg.lastChild);
    }
};

var stopIt = function() {
    window.cancelAnimationFrame( rid );
};

var stopBtn = document.getElementById("stop_btn");
stopBtn.addEventListener("click", stopIt);

var dotBtn = document.getElementById("circle_btn");
dotBtn.addEventListener("click", animateDot);

var dvdBtn = document.getElementById("dvd_btn");
dvdBtn.addEventListener("click", animateDVD);
