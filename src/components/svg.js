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




  
export default Counter;
