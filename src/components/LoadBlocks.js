import React from "react";

//stateless componeent

let bData = [
	27,23,23,27,23,2,2,23,23,2,2,23,27,23,23,27
	];

	let rData = [
90,90,90,180,360,450,540,180,360,360,630,180,360,270,270,270
	]



const LoadG = (props) => (
	//no constructor, no state property 

			// second function code here
			function makeBlocks(b) {
				setTimeout( function(){
				for (i = 0; i < 16; i++) {
					var block = $("<div class='0b" + i + " block-up data rotate " + b + "' style='transform: rotate(" + rData[i] + "deg);'></div>");
						document.getElementsByClassName('art-board').append(block);
						document.getElementById('block' + bData[i] + '').clone().appendTo(".0b" + i + "");
				}
				
			}, 1 );
			}
	
	
	// $(document).bind('function_a_complete', b);
	// makeBlocks('four-up');

	
	);









export default LoadG;