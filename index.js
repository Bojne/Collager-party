import React from "react";
import ReactDOM from "react-dom";
import Draggable from "react-draggable";
import animal from "./img/animal/shrimps_PNG18277.png";
import food from "./img/food/cucumber_PNG12621.png";
import people from "./img/people/baby_PNG51764.png";
import stuff from "./img/objects/mountain_PNG30.png";

import "./style.css";

console.log("Can you hear me?");

const destination = document.getElementById("root");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "#6bc5d2",
      objects: [
        { emoji: "🍋" },
        { emoji: "🗽" },
        { emoji: "🍤" },
        { emoji: "🧚🏻‍" },
        { emoji: "🥦" },
        { emoji: "🚀" },
        { emoji: "💣" },
        { emoji: "💎" },
        { emoji: "💡" },
        { emoji: "🏆‍" },
        { emoji: "🏓" },
        { emoji: "🌶" }
      ],
      images: [
        { ig: food  },
        { ig: animal  },
        { ig: people  },
        { ig: stuff  }
      ]
    }; // Emojis
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
        <input
          value={this.state.color}
          onChange={evt => this.updateInputValue(evt)}
        />
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
      <Draggable
        handle=".handle"
        {...dragHandlers}
      >
        <div className="handle emoji">{emoji}</div>
      </Draggable>
    );
  }
  renderImgDraggable(ig) {
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
    return (
      <Draggable
        handle=".handle"
        {...dragHandlers}
      >
        <img className="handle image" src={ig} alt="img not here" />
      </Draggable>
    );
  }
  updateInputValue(evt) {
    this.setState({
      color: evt.target.value
    });
  }
}

ReactDOM.render(<App />, destination);
