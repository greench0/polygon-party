import React from "react";
// import image from "./images.json";
// import LoadG from './LoadG';


const data = [
{ 
    id: 1, cssData: "four-up", bgColor: "#444444", pData: [0, 250, 500, 750, 1000],
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
  
];



class singlePost extends React.Component {
  constructor() {
    super();

    this.state = {
      data
    };

  }


  render() {
    return (
      <div className="wrapper">



        <div className="row justify-content-center mt-4">




        {data.map(data => (

<div className="col-lg-4" key={data.id}>

  <div className="card shadow p-3 mb-4">


    <div id="art-board" style={{background: `${data.bgColor}`}} >
      {/* <p>{data.bData}</p> */}


      {data.blockData.map(el => {
        return <div className={`${data.cssData} block-up data`} style={{transform:`rotate(${el.rData}deg)`}} >
          <img className="card-img rounded-0" src={`./assets/gallery-png/block${el.bData}.png`} alt="img" />
        </div>;
      })}

  
      
    </div>


    <div className="card-footer text-muted bg-light">

<span id="" className="float-right">
{/* <button type="button" id="save" className="btn btn-secondary btn-lg shadow-sm btn-export" data-toggle="modal" data-target=".bd-example-modal-lg"><i className="fas fa-file-download"></i></button> */}

<i className="like fas fa-file-download"></i>
</span>

</div>

  </div>
</div>


))}

                

        </div>




        <div className="hidden">
   <div id='boxes-holder' className='' data-spy="scroll"></div>
   </div>
      </div>
    );
  }
}

export default singlePost;