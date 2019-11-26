import React from "react";
import ReactDOM from "react-dom";
import { TwitterPicker } from 'react-color';
import Draggable from "react-draggable";
import TextField from '@material-ui/core/TextField';
import "./style.css";
import emojiData from './emoji'
const emojiList =  emojiData.objects

import animal1 from "./img/animal/harbor_seal_PNG1.png";
import animal2 from "./img/animal/shrimps_PNG18277.png";
import animal3 from "./img/animal/birds_PNG44.png";
import animal4 from "./img/animal/shark_PNG18811.png";
import animal5 from "./img/animal/giraffe_PNG13518.png";
import food1 from "./img/food/fried_egg_PNG79.png";
import food2 from "./img/food/bean.png";
import food3 from "./img/food/lime_PNG52.png";
import food4 from "./img/food/cauliflower_PNG12673.png";
import food5 from "./img/food/fried_egg_PNG79.png";
import food6 from "./img/food/sushi_PNG9204.png";
import food7 from "./img/food/bacon_PNG10917.png";
import food8 from "./img/food/bagel_PNG74.png";
import people1 from "./img/people/baby_PNG51737.png";
import people2 from "./img/people/astronaut_PNG47.png";
import people3 from "./img/people/baby_PNG51764.png";
import people4 from "./img/people/leonardo_dicaprio_PNG43.png";
import people5 from "./img/people/thinking_woman_PNG11634.png";
import people6 from "./img/people/dancer_PNG97.png";
import people7 from "./img/people/baby_PNG17912.png";
import stuff1 from "./img/objects/mountain_PNG30.png";
import stuff2 from "./img/objects/alarm_clock_PNG94.png";
import stuff3 from "./img/objects/earth_PNG18.png";
import stuff4 from "./img/objects/mountain_PNG6.png";
import stuff5 from "./img/objects/hands_PNG958.png";
import stuff6 from "./img/objects/finger_PNG6307.png";
import stuff7 from "./img/objects/hands_PNG944.png";
import hand from "./img/objects/phone_hand_PNG91.png";




const destination = document.getElementById("root");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "#F78DA7",
      url: "https://www.biography.com/.image/t_share/MTE1ODA0OTcxNzMyNjY1ODY5/wolfgang-mozart-9417115-2-402.jpg",
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
            <TextField
              label="Image address"
              helperText="Add your own image via link!"
               fullWidth
              onChange={evt => this.updateImage(evt)}
            />
          </p>
        </div>
        
        <Draggable handle=".handle">
          <img
            className="handle bimage"
            src={this.state.url}
            alt="Link doesn't seems right!🔗"
          />
        </Draggable>
        

        <div>
          {this.state.images.map(obj => {
            return this.renderImgDraggable(obj.ig);
          })}
        </div>
        <div className = 'emojiBox' div>
          {emojiList.filter(item => Math.random() > 0.7).map(obj => {
            return this.renderEmojiDraggable(obj.emoji);
          })}
        </div>
        
        <div>
          <p>Change Background Color: 🎨</p>
        </div>
        <TwitterPicker
          color={ this.state.color}
          onChangeComplete={color => this.updateColor(color)}
           />
        <p>
          Create by {" "}
          <a href="http://bojne.com/" target="_blank">Yueh Han Huang</a> at <a href="https://hacklodge.org/" target="_blank">Hacklodge(S19)</a>. 
          If you lile this, give a ⭐️ to my <a href="https://github.com/Bojne/Collager-party" target="_blank">GitHub Repo</a> is appreciated 👏.
        </p>
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
        {...dragHandlers}
      >
        <img className="handle image" src={ig} alt="img not here" />
      </Draggable>
    );
  }
  updateColor(evt) {
    this.setState({
      color: evt.hex
    });
  }
  updateImage(evt) {
    this.setState({
      url: evt.target.value
    });
  }
}

ReactDOM.render(<App />, destination);
