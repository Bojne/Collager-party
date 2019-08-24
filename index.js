import React from "react";
import ReactDOM from "react-dom";
import Draggable from "react-draggable";
import animal from "./img/animal/shrimps_PNG18277.png";
import food from "./img/food/cucumber_PNG12621.png";
import people from "./img/people/baby_PNG51737.png";
import stuff from "./img/objects/mountain_PNG30.png";
import hand from "./img/objects/phone_hand_PNG91.png";

import "./style.css";

console.log("Can you hear me?");

const destination = document.getElementById("root");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "#ffcbcb",
      url: '',
      objects: [
        { emoji: "👇" },
        { emoji: "🗿" },
        { emoji: "🍤" },
        { emoji: "💡" },
        { emoji: "🥦" },
        { emoji: "🚀" }
      ],
      images: [
        { ig: food },
        { ig: animal },
        { ig: people },
        { ig: stuff },
        { ig: hand }
      ]
    };
  }
  render() {
    document.body.style.backgroundColor = this.state.color;
    console.log(this.state.color);

    const scale = 0.3;
    const styleScale = {
      width: "100px",
      userSelect: "none",
      touchAction: "none"
    };

    return (
      <div>
        <div>
          <p>
            🎨Customize ur background <a href="https://colorhunt.co/">color </a>
            here 👉
            <input
              value={this.state.color}
              onChange={evt => this.updateColor(evt)}
            />
          </p>
        </div>
        <div>
          <p>
            Add new pic👏: 
            <input
              value= {this.state.url}
              onChange={ evt => this.updateImage(evt)}
            />
          </p>
        </div>
        <Draggable handle=".handle" onStart={console.log("sup!")}>
          <img className="handle image" src={this.state.url} alt="Add your own link!🔗" />
        </Draggable>

        <div>
          {this.state.images.map(obj => {
            return this.renderImgDraggable(obj.ig);
          })}
        </div>
        <div>
          {this.state.objects.map(obj => {
            return this.renderEmojiDraggable(obj.emoji);
          })}
        </div>
        
      </div>
    );
  }

  renderEmojiDraggable(emoji) {
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };

    return (
      <Draggable handle=".handle" {...dragHandlers}>
        <div className="handle emoji">{emoji}</div>
      </Draggable>
    );
  }
  renderImgDraggable(ig) {
    const dragHandlers = { onStop: this.onStop };
    return (
      <Draggable
        handle=".handle"
        onStart={console.log("sup!")}
        {...dragHandlers}
      >
        <img className="handle image" src={ig} alt="img not here" />
      </Draggable>
    );
  }
  updateColor(evt) {
    this.setState({
      color: evt.target.value
    });
  }
  updateImage(evt) {
    this.setState({
      url: evt.target.value
    });
  }
}

ReactDOM.render(<App />, destination);
