
  //========================================================================================//
  //========================================================================================//
// save button function
  document.getElementById("save").addEventListener("click", function(){
// div block id
// console.log(divAmount[0]);

let blockoValue = [];
let rotateoValue = [];
let totalValue = [];


if (divAmount[0] == 16) { 
  totalValue.push('0, 250, 500, 750, 1000');
}

else if (divAmount[0] == 25) {
  totalValue.push('0,200,400,600,800,1000');
}

else if (divAmount[0] == 36) {
  totalValue.push('0, 166.6666, 333.3333, 500, 666.6666, 833.3333,1000');
}

else if (divAmount[0] == 49) {
  totalValue.push('0, 142.857, 285.714, 428.571, 571.428, 714.285, 857.142, 1000');
}

else if (divAmount[0] == 64) {
  totalValue.push('0, 125, 250, 375, 500, 625, 750, 875, 1000');
}

else if (divAmount[0] == 81) {
  totalValue.push('0, 111.1111, 222.2222, 333.3333, 444.4444, 555.5555, 666.6666, 777.7777, 888.8888, 1000');
}


for (i = 0; i < divAmount[0]; i++) {
let blocko = [];
let rotateo = [];

let element = document.getElementById('b'+ i);
//   
// svg block number
let bData = element.outerHTML;
let svgBlockData = bData.substring(
  bData.lastIndexOf('<svg id="') + 14, 
  bData.lastIndexOf('" "class')
);

// rotate info
  let rotateData = bData.substring(
    bData.lastIndexOf('style="transform: rotate(') + 25, 
    bData.lastIndexOf('deg);"')
  );

blocko.push(svgBlockData);
rotateo.push(rotateData);


blockoValue.push(blocko);
rotateoValue.push(rotateo);
}

document.getElementById('block-data').innerHTML = blockoValue;
document.getElementById('rotate-data').innerHTML = rotateoValue;
document.getElementById('total-data').innerHTML = totalValue;
  });

  //========================================================================================//

  //========================================================================================//

