import React, { useState, useRef, useCallback } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import "./style.css";
import config from "./config";
import Footer from "./footer";
import { toJpeg } from "html-to-image";
import { Button, TextInput, ColorInput } from "@mantine/core";
import { DraggableObject, EmojiDraggable } from "./customDrag";
import { Resizable } from "re-resizable";

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

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  width: 100%;
  margin-top: 2rem;
`;

const Canvas = styled.div`
  width: 100%;
  margin: 5% 5% 5% 5%;
`;

const Frame = styled.div`
  display: flex;
  position: relative;
  background-color: white;
  width: 80%;
  height: 50rem;
  border: 1px solid black;
  margin-bottom: 1rem;
  background-color: ${(props) => props.bgColor};
`;

const beethovenImg =
  "https://www.biography.com/.image/t_share/MTE1ODA0OTcxNzMyNjY1ODY5/wolfgang-mozart-9417115-2-402.jpg";

const images = [
  { ig: food1 },
  { ig: food2 },
  { ig: food3 },
  { ig: food4 },
  // { ig: food5 },
  // { ig: food6 },
  // { ig: food7 },
  // { ig: food8 },
  // { ig: animal1 },
  // { ig: animal2 },
  // { ig: animal3 },
  // { ig: animal4 },
  // { ig: animal5 },
  // { ig: people1 },
  // { ig: people2 },
  // { ig: people3 },
  // { ig: people4 },
  // { ig: people5 },
  // { ig: people6 },
  // { ig: people7 },
  // { ig: stuff1 },
  // { ig: stuff2 },
  // { ig: stuff3 },
  // { ig: stuff4 },
  // { ig: stuff5 },
  // { ig: stuff6 },
  // { ig: stuff7 },
  // { ig: hand },
];
const App = () => {
  const ref = useRef(null);
  const [bgColor, setBgColor] = useState("#F9F9F9");
  const { emojis, colors, images } = config;
  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return;
    }
    toJpeg(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "my-image-name.jpeg";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);
  return (
    <Canvas>
      <Frame ref={ref} bgColor={bgColor}>
        {/* <DraggableObject imageUrl={Images.food1}></DraggableObject> */}
        <DraggableObject imageUrl={food1}></DraggableObject>
        <DraggableObject imageUrl={food3}></DraggableObject>
        <DraggableObject imageUrl={beethovenImg}></DraggableObject>
        {emojis
          .filter(() => Math.random() > 0.7)
          .map((obj) => {
            return <EmojiDraggable emoji={obj.emoji}></EmojiDraggable>;
          })}
        {images.map((obj, i) => {
          return <DraggableObject imageUrl={obj.ig} key={i}></DraggableObject>;
        })}
      </Frame>
      <Container>
        <ColorInput value={bgColor} onChange={setBgColor} swatches={colors} />
        <Button onClick={onButtonClick}>Screenshot</Button>
      </Container>
      <Footer></Footer>
    </Canvas>
  );
};

const destination = document.getElementById("root");
ReactDOM.render(<App />, destination);
