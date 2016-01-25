document.onclick = function() {myFunction()};
function myFunction() {
	var picture = document.getElementById("picture");
	var cl = picture.getAttribute("class");
	var b1 = document.getElementById("change");
	var cls = b1.getAttribute("class");
	console.log ("current season is " + cl);
if (cl==="sum" && cls==="class1") {
		console.log("it is autumn now");
		picture.setAttribute("class","aut");
		b1.setAttribute("class","class2");
	}else if(cl==="aut" && cls==="class2") {
		console.log("it is winter now");
		picture.setAttribute("class","win");
		b1.setAttribute("class","class3");
	    }else if (cl==="win" && cls==="class3"){
	    	console.log("It is spring now");
	    	picture.setAttribute("class","spr");
	    	b1.setAttribute("class","class4");
	    }else{
	    	console.log("It is summer now");
	    	picture.setAttribute("class","sum");
	    	b1.setAttribute("class","class1");
	    }

	}
