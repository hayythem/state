import { Component } from "react";

export default class ProfileClass extends Component {
  constructor() {
    super();
    this.state = {
      fullName: "Haythem Neji",
      bio: "Emancipate yourselves from mental slavery None but ourselves can free our minds.",
      imgSrc: "./images/me.jpg",
      profession: "Networker",
    };
  }
  render() {
    return (
      <div>
        <h1> {this.state.fullName} </h1>
        <p> {this.state.bio} </p>
        <img src={this.state.imgSrc} alt="" width="400px" />
        <h5> {this.state.profession} </h5>
      </div>
    );
  }
}
