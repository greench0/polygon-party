import React from "react";
// import image from "./images.json";
// import LoadG from './LoadG';
// import { findDOMNode } from ‘react-dom’;
// import './scripts';
// import $ from ‘jquery’;
  import SaveModal from './SaveModal';    

  class CreateBlocks extends React.Component {
    render() {
      return (

<div className="wrapper">
{/* <!-- Sidebar  --> */}

<nav id="sidebar" class="d-inline-flex">

  <button type="button" id="sidebarCollapse" class="btn btn-secondary btn-lg shadow-sm btn-maker"> <i class="fas fa-arrows-alt-h"></i></button> 

  <button id="action-color" class="btn btn-secondary btn-lg shadow-sm btn-colors" type="button" data-toggle="collapse" data-target="#colors" aria-expanded="false" aria-controls="colors"> <i class="fas fa-palette"></i></button>

  <button type="button" id="btn-grid" class="btn btn-secondary btn-lg shadow-sm btn-grid toggle-grid" data-toggle="modal" data-target=""><i class="fas fa-th"></i></button>

  <button type="button" id="" class="btn btn-secondary btn-lg shadow-sm btn-fill"><i class="fas fa-fill-drip"></i></button> 

  <button type="button" id="save" class="btn btn-secondary btn-lg shadow-sm btn-export" data-toggle="modal" data-target=".bd-example-modal-lg"><i class="fas fa-file-download"></i></button>

  <button type="button" id="" class="btn btn-secondary btn-lg shadow-sm btn-random"><i class="fas fa-dice-d20"></i></button> 


  <div class="card shadow">

    <div class="card-header">
      <p class="text-white">BLOCKS</p>
    </div>
 
    <div id='boxes-holder' class='' data-spy="scroll"></div>

    <div class="collapse" id="colors">
      <div class='card card-body p-3' data-spy="scroll">

        <div id='color-holder' class="justify-content-center">
          <p>color 1</p>
        </div>

        <div id="color-holder-2" class="justify-content-center">
          <p>color 2</p>
        </div>

      </div>
    </div>


  </div>
</nav>


  {/* <!-- Page Content  --> */}
  <div id="" className="container">


    <div id="main-card" className="card col-lg-7 mx-auto shadow p-0">

      <div id="art-board" className="col-lg-12 text-center p-3"></div>

      <div id="board-options" className="col-lg-12 text-center p-3">
        <br />

        <div id='main-block'></div>
        <br />
        <div className="">
          <button className="artBoardButtons btn btn-outline-secondary btn-lg" data-btn-up="four-up"
            data-btn-x="16">4-up</button>
          <button className="artBoardButtons btn btn-outline-secondary btn-lg" data-btn-up="five-up"
            data-btn-x="25">5-up</button>
          <button className="artBoardButtons btn btn-outline-secondary btn-lg" data-btn-up="six-up"
            data-btn-x="36">6-up</button>
          <button className="artBoardButtons btn btn-outline-secondary btn-lg" data-btn-up="seven-up"
            data-btn-x="49">7-up</button>
          <button className="artBoardButtons btn btn-outline-secondary btn-lg" data-btn-up="eight-up"
            data-btn-x="64">8-up</button>
          <button className="artBoardButtons btn btn-outline-secondary btn-lg" data-btn-up="nine-up"
            data-btn-x="81">9-up</button>
        </div>
      </div>

    </div>


  </div>



    <SaveModal />
  </div>
    );
  }
}
    
    export default CreateBlocks;
