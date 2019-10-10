import React from "react";
import ReactDOM from "react-dom";
import Draggable from "react-draggable";
import animal1 from "./img/animal/harbor_seal_PNG1.png";
import animal2 from "./img/animal/shrimps_PNG18277.png";
import animal3 from "./img/animal/pokemon_PNG110.png";
import animal4 from "./img/animal/shark_PNG18811.png";
import animal5 from "./img/animal/giraffe_PNG13518.png";
import animal6 from "./img/animal/—Pngtree—black and white cow_3477228.png";

import food1 from "./img/food/cucumber_PNG12621.png";
import food2 from "./img/food/bean.png";
import food3 from "./img/food/lime_PNG52.png";
import food4 from "./img/food/cauliflower_PNG12673.png";
import food5 from "./img/food/fried_egg_PNG79.png";
import food6 from "./img/food/sushi_PNG9204.png";
import food7 from "./img/food/sushi_PNG9258.png";
import food8 from "./img/food/sushi_PNG9250.png";
import people1 from "./img/people/baby_PNG51737.png";
import people2 from "./img/people/astronaut_PNG47.png";
import people3 from "./img/people/baby_PNG51764.png";
import people4 from "./img/people/leonardo_dicaprio_PNG43.png";
import people5 from "./img/people/thinking_woman_PNG11634.png";
import people6 from "./img/people/thinking_man_PNG11588.png";
import people7 from "./img/people/baby_PNG17912.png";
import stuff1 from "./img/objects/mountain_PNG30.png";
import stuff2 from "./img/objects/alarm_clock_PNG94.png";
import stuff3 from "./img/objects/earth_PNG18.png";
import stuff4 from "./img/objects/mountain_PNG6.png";
import stuff5 from "./img/objects/hands_PNG958.png";
import stuff6 from "./img/objects/finger_PNG6307.png";
import stuff7 from "./img/objects/hands_PNG944.png";
import bach from "./img/bach.jpg";

import hand from "./img/objects/phone_hand_PNG91.png";

import "./style.css";

console.log("Can you hear me?");

const destination = document.getElementById("root");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "#ffcbcb",
      url: "",
      objects: [
        { emoji: "👇" },
        { emoji: "🗿" },
        { emoji: "🍤" },
        { emoji: "💡" },
        { emoji: "🥦" },
        { emoji: "🚀" }
      ],
      images: [
        { ig: food1 },
        { ig: food2 },
        { ig: food3 },
        { ig: food4 },
        { ig: food5 },
        { ig: food6 },
        { ig: food7 },
        { ig: food8 },
        { ig: animal1 },
        { ig: animal2 },
        { ig: animal3 },
        { ig: animal4 },
        { ig: animal5 },
        { ig: animal6 },
        { ig: people1 },
        { ig: people2 },
        { ig: people3 },
        { ig: people4 },
        { ig: people5 },
        { ig: people6 },
        { ig: people7 },
        { ig: stuff1 },
        { ig: stuff2 },
        { ig: stuff3 },
        { ig: stuff4 },
        { ig: stuff5 },
        { ig: stuff6 },
        { ig: stuff7 },

        { ig: hand }
      ].filter(item => Math.random() > 0.81)
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
        <p>
          Build by{" "}
          <a href="https://www.facebook.com/bojne.john">Yueh Han Huang</a>. If
          you like it, leave a ⭐️ at my <a href="hhttps://github.com/Bojne/create-collage">GitHub Repo</a>, 🙏!
        </p>

        <Draggable handle=".handle" onStart={console.log("sup!")}>
          <img
            className="handle bimage"
            src={this.state.url}
            alt="Add your own link!🔗"
          />
        </Draggable>
        <div>
          <Draggable handle=".handle" onStart={console.log("sup!")}>
            <img className="handle bimage" src={bach} alt="Bach!🔗" />
          </Draggable>
        </div>

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
            Add a new pic👏:
            <input
              value={this.state.url}
              onChange={evt => this.updateImage(evt)}
            />
          </p>
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
