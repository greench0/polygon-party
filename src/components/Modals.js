import React, { Component } from 'react';

class CreateModal extends React.Component {
     constructor(props, context) {
       super(props, context);
   
       this.handleShow = this.handleShow.bind(this);
       this.handleClose = this.handleClose.bind(this);
   
       this.state = {
         show: false,
       };
     }
   
   
   
     render() {
       return (
       
          <div className="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
          aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
    
              <div className="modal-header">block data:
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
    
                <h3></h3>
                <div>
                  <p>[<span id="block-data"></span>],[<span id="rotate-data"></span>],[<span id="total-data"></span>]</p>
                </div>
    
    
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>


       );
     }
   }
   
//    render(<SaveButton />);

   export default CreateModal;

   