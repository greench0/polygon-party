import React from "react";
// import image from "./images.json";
// import LoadG from './LoadG';

const data = [
  { id: 1, cssData: "four-up", bData: [27,23,23,27,23,2,2,23,23,2,2,23,27,23,23,27], rData: [90,90,90,180,360,450,540,180,360,360,630,180,360,270,270,270], pData: [0, 250, 500, 750, 1000], src: 2 },
  { id: 2, cssData: "four-up", bData: [1,1,1,1,1,13,13,1,1,31,31,1,27,31,31,27], rData: [180,180,180,270,450,270,360,360,360,720,720,540,360,540,540,270], pData: [0, 250, 500, 750, 1000], src: "13" },
  { id: 3, cssData: "four-up", bData: [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2], rData: [90,270,90,90,270,90,90,90,90,90,90,90,90,450,90,90], pData: [0, 250, 500, 750, 1000], src: "2" },
  // { id: 4, cssData: "four-up", bData: [27,23,23,27,23,2,2,23,23,2,2,23,27,23,23,27], rData: [90,90,90,180,360,450,540,180,360,360,630,180,360,270,270,270], pData: [0, 250, 500, 750, 1000], src: "./assets/images/img0.png" },
  // { id: 5, cssData: "four-up", bData: [1,1,1,1,1,13,13,1,1,31,31,1,27,31,31,27], rData: [180,180,180,270,450,270,360,360,360,720,720,540,360,540,540,270], pData: [0, 250, 500, 750, 1000], src: "./assets/images/img1.png" },
  // { id: 6, cssData: "four-up", bData: [2,16,16,16,2,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,2,16,16,16,2], rData: [270,0,0,0,360,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,180,0,0,0,90], pData: [0,200,400,600,800,1000], src: "./assets/images/img1.png" },
  // { id: 7, cssData: "four-up", value: 0, src: "./assets/images/img6.png" },
  // { id: 8, cssData: "four-up", value: 0, src: "./assets/images/img7.png" },
  // { id: 9, cssData: "four-up", value: 0, src: "./assets/images/img8.png" },
  // { id: 10, cssData: "four-up", value: 0, src: "./assets/images/img9.png" },
  // { id: 11, cssData: "four-up", value: 0, src: "./assets/images/img10.png" },
  // { id: 12, cssData: "four-up", value: 0, src: "./assets/images/img11.png" }
];


// function makeBlocks(b) {
//   setTimeout( function(){
//   for (i = 0; i < bData.length; i++) {
//     var block = $("<div class='0b" + i + " block-up data rotate " + b + "' style='transform: rotate(" + rData[i] + "deg);'></div>");
//     $('.art-board').append(block);
//     $('#block' + bData[i] + '').clone().appendTo(".0b" + i + "");
//   }
  
// }, 1 );
// }


// // $(document).bind('function_a_complete', b);
// makeBlocks('four-up');
// $("#board-options").hide();


// console.log(data[0].bData.length);

class Gallery extends React.Component {
  constructor() {
    super();

    this.state = {
      data,
      styles: "transform: rotate(270deg);"
      // count: 0,
      // clickedImages: []

    };

  }
       

  render() {    
    return (
      <div className="wrapper">


        <div className="mt-4 col-lg-12">
          <div className="row justify-content-center">


            {data.map(data => (

              <div className="col-lg-3" key={data.id}>
                              {/* <div className={`card shadow p-2 bg-white ${data.cssData} rounded mb-4`}> */}

                <div className="card shadow p-4">

                  {/* <img className="card-img" src={`./assets/gallery-png/${data.src}`} alt="img" data-blocks={data.cssData} /> */}
                  {/* <div id="art-board"></div> */}

                  
                    {/* <p>{data.bData}</p> */}

                    { data.bData.map(el => {
                      return <div className={`${data.cssData} block-up data rotate`} style={{transform: 'rotate(270deg)'}} >
                      <img className="card-img rounded-0" src={`./assets/gallery-png/block${el}.png`} alt="img" />
                      </div>;
                    })}

{/* <div id="b0" class="block-up data rotate seven-up" style="transform: rotate(0deg);"><svg id="block16" "class="" viewBox="0 0 200 200"><desc>Created with Snap</desc><defs></defs><g>
<rect class="color1" fill="#808080" width="200" height="200" style=""></rect>
<circle class="color0" fill="#f37b82" cx="100" cy="100" r="50" style=""></circle>
</g></svg></div> */}

    {/* { data.bData.map(el => {
                          return <div className={`1 ${data.cssData} misc`}>{el}
                          <img className="card-img" src={`./assets/gallery-png/${data.src}`} alt="img" data-blocks={data.cssData} />
                          </div>;
                        })} */}
                    <div className="card-footer text-muted bg-light">

                  </div>

                </div>
              </div>    
              
              
            ))}



          </div>
        </div>







      </div>
    );
  }
}
    
    export default Gallery;
