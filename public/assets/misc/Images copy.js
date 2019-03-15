import React from "react";
// import image from "./images.json";
// import { CLICKCOUNT } from "./count";

const image = [
  { id: 1, value: 0, src: "./images/img0.png" },
  { id: 2, value: 0, src: "./images/img1.png" },
  { id: 3, value: 0, src: "./images/img2.png" },
  { id: 4, value: 0, src: "./images/img3.png" },
  { id: 5, value: 0, src: "./images/img4.png" },
  { id: 6, value: 0, src: "./images/img5.png" },
  { id: 7, value: 0, src: "./images/img6.png" },
  { id: 8, value: 0, src: "./images/img7.png" },
  { id: 9, value: 0, src: "./images/img8.png" },
  { id: 10, value: 0, src: "./images/img9.png" },
  { id: 11, value: 0, src: "./images/img10.png" },
  { id: 12, value: 0, src: "./images/img11.png" }
];


class Images extends React.Component {
  constructor() {
    super();

    this.state = {
      image,
      count: 0,
      clickedImages: []
    };

  }
       
  // handleClick = () => {
  //   this.setState((prevState) => ({
  //     count: prevState.count + 1,
  //   }));
  // };

  imageClick = event => {
    const currentFish = event.target.alt;
    const FishAlreadyClicked =
      this.state.image.indexOf(currentFish) > -1;

    //if you click on a fish that has already been selected, the game is reset and cards reordered
    if (FishAlreadyClicked) {
      this.setState({
        image: this.state.image.sort(function (a, b) {
          return 0.5 - Math.random();
        }),
        clickedImages: [],
        count: 0
      });
      alert("You lose. Play again?");
    }
    //if you click on an available fish, your score is increased and cards reordered
    else {
      this.setState(
        {
          image: this.state.image.sort(function (a, b) {
            return 0.5 - Math.random();
          }),
          clickedImages: this.state.clickedImages.concat(
            currentFish
          ),
          count: this.state.count + 1
        })
      }
    };



//   handleIncrement = () => {
//     this.setState({ image.count: this.state.count + 1 });
// }

  render() {
    return (

      <div className="content text-center">
      
      <div className="card-header bg-secondary text-white">
      <h2>Pick a Bird</h2>
      <h2>Score: {this.state.count} | Top Score: --</h2>
      
 
</div>
<br />


      <div className="card-deck col-xl-6 mx-auto">

        {image.map(image => (
          <div className="col-lg-3" key={image.id}>
            <div className="card shadow p-2 bg-white rounded mb-4">

              <img className="card-img" src={image.src} alt="img" data={image.value} onClick={this.handleClick} onClick={this.imageClick} />
              {/* <p>{image.value}</p> */}

            </div>
          </div>


        ))}

      </div>
      </div>


    );
      }
    }
    
    export default Images;
