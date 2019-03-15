import React from "react";


export const CLICKCOUNT = {
 count : 0
}


class Counter extends React.Component {
  // Setting the initial state of the Counter component

  constructor(props) {
    super(props);

    this.state = {
      count : 0, clicks: 0,
    };
  }


  // handleIncrement increments this.state.count by 1
  handleIncrement = () => {
      this.setState({ count: this.state.count + 1 });
  }

//   constructor(props) {
//     super(props);
//     this.showModal = this.showModal.bind(this);
// }



    
  // The render method returns the JSX that should be rendered
//   render() {
//     return (
//       <div className="card text-center">
      
//         <div className="card-header bg-primary text-white">
//           <h2>Click Counter</h2>
//           <p> {this.state.count}</p>
 
//         </div>
//         <div className="card-body">
          


//           <button className="btn btn-primary" onClick={this.handleIncrement}>
//             Increment
//           </button>

//         </div>
//       </div>
//     );
//   }
// }

export default Counter;
