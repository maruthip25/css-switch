// ==========================================================================
// CSS Switch
// css-switch.js v0.1
// https://github.com/maruthip25/css-switch
// ==========================================================================
// Created By: Maruthi Sharma (http://www.maruthisharma.com)
// ==========================================================================

/* variable to identify the state of the switch - initialized to 0 */
var on = 0;

/* function to switch css files */
function switchCSS(offCSS, onCSS, button){
	var links = document.getElementsByTagName("link");
	for(var i=0; i<links.length; i++){
		if(on==0){
			if(links[i].href.indexOf(offCSS)!=-1){
				links[i].href=onCSS;
				button.style.background="#56aae8";
				document.getElementById("inner-switch").style.marginLeft="19px";
				on=1;
			}
		}
		else if(on==1){
			if(links[i].href.indexOf(onCSS)!=-1){
				links[i].href=offCSS;
				button.style.background="#ccc";
				document.getElementById("inner-switch").style.marginLeft="0px";
				on=0;
			}
		}
	}
}

/* function to render css-switch element */
function initSwitch(offCSS, onCSS, element){
	var h = document.getElementsByTagName('head').item(0);
	var l = document.createElement("link");
	l.type = "text/css";
	l.href = offCSS;
	l.rel = "stylesheet";
	h.appendChild(l);
	if(element.charAt(0)=='#'){
		var button = document.getElementById(element.substr(1));
	}
	else if(element.charAt(0)=='.'){
		var button = document.getElementsByClassName(element.substr(1))[0];
	}
	else{
		console.log("No proper element passed for rendering");
	}
	button.style.position="absolute";
	button.style.width="50px";
	button.style.height="20px";
	button.style.background="#ccc";
	button.style.cursor="pointer";
	button.style.padding="2.5px";
	button.style.borderRadius="25px";
	button.style.boxSizing="border-box";
	button.innerHTML="<div id='inner-switch' style='position:absolute;width:25px; height:25px; border-radius: 30px;margin-left:0px; margin-top: -5px; transition: all .1s ease-in-out; -webkit-transition: all .1s ease-in-out; background: #f4f4f4;'></div>";
	button.addEventListener('click', function(){switchCSS(offCSS, onCSS, button);}, false);
}
