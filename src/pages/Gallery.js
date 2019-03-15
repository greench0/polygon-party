import React from "react";
// import image from "./images.json";
// import LoadG from './LoadG';


const data = [
  { 
    id: 1, cssData: "four-up", color0: "grey", color1: "cyan", pData: [0, 250, 500, 750, 1000],
    blockData: [
      {bData: 27 , rData: 90},
      {bData: 23 , rData: 90},
      {bData: 23 , rData: 90},
      {bData: 27 , rData: 180},
      {bData: 23 , rData: 360},
      {bData: 2 , rData: 450},
      {bData: 2 , rData: 540},
      {bData: 23 , rData: 180},
      {bData: 23 , rData: 360},
      {bData: 2 , rData: 360},
      {bData: 2 , rData: 630},
      {bData: 23 , rData: 180},
      {bData: 27 , rData: 360},
      {bData: 23 , rData: 270},
      {bData: 23 , rData: 270},
      {bData: 27 , rData: 270},
    ]
  },

  { 
    id: 2, cssData: "four-up", color0: "grey", color1: "#444444", pData: [0, 250, 500, 750, 1000],
    blockData: [
      {bData: 27 , rData: 90},
      {bData: 23 , rData: 90},
      {bData: 23 , rData: 90},
      {bData: 27 , rData: 180},
      {bData: 23 , rData: 360},
      {bData: 16 , rData: 450},
      {bData: 16, rData: 450},
      {bData: 23 , rData: 180},
      {bData: 23 , rData: 360},
      {bData: 1, rData: 90},
      {bData: 1, rData: 90},
      {bData: 23 , rData: 540},
      {bData: 23 , rData: 90},
      {bData: 2 , rData: 900},
      {bData: 2 , rData: 450},
      {bData: 23 , rData: 90},
    ]
  },

  { id: 3, cssData: "two-up", color0: "white", color1: "green", pData: [0, 250, 500, 750, 1000], blockData: [ {bData: 27 , rData: 90}, {bData: 27 , rData: 180}, {bData: 27 , rData: 360}, {bData: 27 , rData: 270} ] },

  { id: 4, cssData: "two-up", color0: "white", color1: "green", pData: [0, 250, 500, 750, 1000], blockData: [ {bData: 27 , rData: 90}, {bData: 27 , rData: 180}, {bData: 27 , rData: 360}, {bData: 27 , rData: 270} ] },
  
  { id: 5, cssData: "two-up", color0: "white", color1: "green", pData: [0, 250, 500, 750, 1000], blockData: [ {bData: 27 , rData: 90}, {bData: 27 , rData: 180}, {bData: 27 , rData: 360}, {bData: 27 , rData: 270} ] },

];



class Gallery extends React.Component {
  constructor() {
    super();

    this.state = {
 data
    };

  }


  render() {
    return (
      <div className="wrapper">

        <div className="card-deck mt-4">
        <div className="row mx-auto col-lg-10">


          {data.map(data => (

            <div className="col-lg-3" key={data.id}>

              <div className="card shadow p-3 mb-4" key={data.blockData.length}>

                {/* <img className="card-img" src={`./assets/gallery-png/${data.src}`} alt="img" data-blocks={data.cssData} /> */}
                <div id="art-board" style={{background: `${data.color1}`}} >
                  {/* <p>{data.bData}</p> */}


                  {data.blockData.map(el => {
                    return <div className={`${data.cssData} block-up data`} style={{transform:`rotate(${el.rData}deg)`}} >
                      <img className="card-img rounded-0" src={`./assets/gallery-png/block${el.bData}.png`} alt="img" />
                    </div>;
                  })}

                  {/* {
                    data.blockData.
                  } */}
                  
                </div>





              </div>
            </div>


          ))}

</div>


        </div>





        <div className="hidden">
   <div id='boxes-holder' className='' data-spy="scroll"></div>
   </div>

      </div>
    );
  }
}

export default Gallery;
