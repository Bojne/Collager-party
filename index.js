import React from "react";
import ReactDOM from "react-dom";
import Draggable from "react-draggable";
import cow from "./img/bach.jpg";
import "./style.css";

const destination = document.getElementById("root");

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
        { emoji: "🌶" },
        
      ]
    };
  }

  render() {
    return (
      <div>
        <div>
          <Draggable
            handle=".handle"
            position={null}
            // grid={[25, 25]}
            scale={1}
            onStart={this.handleStart}
            onDrag={this.handleDrag}
            onStop={this.handleStop}
          >
            <div>
              <img className="handle image" src={cow} alt="cow" />
            </div>
          </Draggable>
        </div>
        <div>
          {this.state.objects.map(obj => {
            return this.renderDraggable(obj.emoji, obj.position);
          })}
        </div>
      </div>
    );
  }

  renderDraggable(emoji, position) {
    return (
      <Draggable
        handle=".handle"
        defaultPosition={position}
        position={null}
        // grid={[25, 25]}
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
}

ReactDOM.render(<App />, destination);

/*
 <Draggable
          handle=".handle"
          defaultPosition={{ x: 0, y: 0 }}
          position={null}
          // grid={[25, 25]}
          scale={1}
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={this.handleStop}
        >
          <div>
            <img className="handle image" src={dj} alt="dj" />
          </div>
        </Draggable>

        <Draggable
          handle=".handle"
          defaultPosition={{ x: 0, y: 0 }}
          position={null}
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={this.handleStop}
        >
          <div className="handle">💐 💎 👾</div>
        </Draggable>
        <div> 
          {this.state.objects.map(obj => {
            return this.renderDraggable(obj.emoji, obj.position)
          })}
        </div>
*/
