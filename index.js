import React from "react";
import ReactDOM from "react-dom";
import Draggable from "react-draggable";
import img from "./img/animal/shrimps_PNG18277.png";
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
      ]
    }; // Emojis
  }

  render() {
    // <Helmet bodyAttributes={{style: 'background-color : #fff'}}/>
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
    // const style = { 'background-color': this.state.color };
    // console.log(this.state.color)
    document.body.style.backgroundColor = this.state.color;
    console.log(this.state.color);
    return (
      <div >
        <input
          value={this.state.color}
          onChange={evt => this.updateInputValue(evt)}
        />
        <div>
          <Draggable
            handle=".handle"
            {...dragHandlers}
          >
            <div>
              <img className="handle image" src={img} alt="imgage" />
            </div>
          </Draggable>
        </div>

        <div>
          {this.state.objects.map(obj => {
            return this.renderDraggable(obj.emoji);
          })}
        </div>
      </div>
    );
  }

  renderDraggable(emoji, position) {
    return (
      <Draggable
        handle=".handle"
        position={null}
        scale={1}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}
      >
        <div>
          <div className="handle">
            <div className="emoji">{emoji}</div>
          </div>
        </div>
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
