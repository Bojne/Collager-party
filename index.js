import React, { useState, useRef, useCallback } from "react";
import ReactDOM from "react-dom";
import "./style.css";
import config from "./config";
import Footer from "./footer";
import { toJpeg } from "html-to-image";
import {
  Button,
  TextInput,
  ColorInput,
  Title,
  AppShell,
  Navbar,
  Header,
  Center,
  Container,
  MantineProvider,
} from "@mantine/core";
import { DraggableObject, EmojiDraggable } from "./customDrag";

import animal1 from "./img/animal/harbor_seal_PNG1.png";
import animal2 from "./img/animal/shrimps_PNG18277.png";
import animal3 from "./img/animal/birds_PNG44.png";
import animal4 from "./img/animal/shark_PNG18811.png";
import animal5 from "./img/animal/bear_PNG1196.png";
import animal7 from "./img/animal/bear_PNG23456.png";
import animal8 from "./img/animal/bear_PNG23458.png";
import animal10 from "./img/animal/chicken_PNG2172.png";
import animal11 from "./img/animal/cow.png";
import animal12 from "./img/animal/dinosaur_PNG16606.png";
import animal13 from "./img/animal/dolphin_PNG9127.png";
import animal16 from "./img/animal/labrador_retriever_PNG59.png";
import animal17 from "./img/animal/labrador_retriever_PNG84.png";
import animal18 from "./img/animal/labrador_retriever_PNG91.png";
import animal19 from "./img/animal/panda_PNG33.png";
import food1 from "./img/food/fried_egg_PNG79.png";
import food2 from "./img/food/bean.png";
import food3 from "./img/food/lime_PNG52.png";
import food4 from "./img/food/cauliflower_PNG12673.png";
import food5 from "./img/food/bagel_PNG74.png";
import food6 from "./img/food/sushi_PNG9204.png";
import food7 from "./img/food/bacon_PNG10917.png";
import people1 from "./img/people/baby_PNG51737.png";
import people2 from "./img/people/astronaut_PNG47.png";
import people3 from "./img/people/baby_PNG51764.png";
import people4 from "./img/people/leonardo_dicaprio_PNG43.png";
import people5 from "./img/people/thinking_woman_PNG11634.png";
import people6 from "./img/people/dancer_PNG97.png";
import people7 from "./img/people/baby_PNG17912.png";
import people8 from "/img/people/astronaut_PNG69.png";
import people9 from "/img/people/baby_PNG17922.png";
import people10 from "/img/people/baby_PNG51705.png";
import people11 from "/img/people/baby_PNG51739.png";
import people12 from "/img/people/dancer_PNG97.png";
import people13 from "/img/people/diver_PNG73.png";
import people14 from "/img/people/leonardo_dicaprio_PNG19.png";
import people15 from "/img/people/leonardo_dicaprio_PNG31.png";
import people16 from "/img/people/thinking_man_PNG11588.png";
import people17 from "/img/people/thinking_man_PNG11612.png";
import people18 from "/img/people/thinking_woman_PNG11622.png";
import people19 from "/img/people/thinking_woman_PNG11628.png";
import stuff1 from "./img/objects/mountain_PNG30.png";
import stuff2 from "./img/objects/alarm_clock_PNG94.png";
import stuff3 from "./img/objects/earth_PNG18.png";
import stuff4 from "./img/objects/mountain_PNG6.png";
import stuff5 from "./img/objects/hands_PNG958.png";
import stuff6 from "./img/objects/finger_PNG6307.png";
import stuff7 from "./img/objects/hands_PNG944.png";
import hand from "./img/objects/phone_hand_PNG91.png";
import dogGif from "./img/gifs/dog.gif";

const ImageCollection = React.memo((_update) => {
  const allImages = [
    food1,
    food2,
    food3,
    food4,
    food5,
    animal1,
    animal2,
    animal3,
    animal4,
    animal5,
    animal7,
    animal8,
    animal10,
    animal11,
    animal12,
    animal13,
    animal16,
    animal17,
    animal18,
    animal19,
    food6,
    food7,
    people1,
    people2,
    people3,
    people4,
    people5,
    people6,
    people7,
    people8,
    people9,
    people10,
    people11,
    people12,
    people13,
    people14,
    people15,
    people16,
    people17,
    people18,
    people19,
    stuff1,
    stuff2,
    stuff3,
    stuff4,
    stuff5,
    stuff6,
    stuff7,
    hand,
    animal5,
    dogGif,
  ];
  const ImageLimit = 5;
  const imageSet = allImages
    .filter(() => Math.random() > 0.5) // cut
    .sort(() => Math.random() - 0.5) // suffle
    .slice(0, ImageLimit);
  return imageSet.map((obj) => {
    return <DraggableObject imageUrl={obj}></DraggableObject>;
  });
});

const EmojiCollection = React.memo((_update) => {
  const EmojiLimit = 5;
  const { emojis } = config;
  const emojiSet = emojis
    .filter(() => Math.random() > 0.8)
    .slice(0, EmojiLimit);
  return emojiSet.map((obj) => {
    return <EmojiDraggable emoji={obj.emoji}></EmojiDraggable>;
  });
});

const App = () => {
  const ref = useRef(null);
  const [bgColor, setBgColor] = useState("#fac3c3");
  const [opened, setOpened] = useState(false);
  const [updateEmoji, setUpdateEmoji] = useState(false);
  const [updateImage, setUpdateImage] = useState(false);
  const { colors } = config;
  const onShuffleEmojiButtonClick = () => {
    setUpdateEmoji((prevState) => !prevState);
  };
  const onShuffleImageButtonClick = () => {
    setUpdateImage((prevState) => !prevState);
  };
  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return;
    }
    toJpeg(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "my-collage.jpeg";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);
  return (
    <MantineProvider
      theme={{
        fontFamily: "-apple-system,BlinkMacSystemFont",
      }}
    >
      <AppShell
        padding="md"
        navbar={
          <Navbar
            p="md"
            hiddenBreakpoint="sm"
            hidden={!opened}
            width={{ sm: 150, lg: 250 }}
          >
            <Navbar.Section>
              <p>Background Color</p>
              <ColorInput
                format="rgba"
                value={bgColor}
                onChange={setBgColor}
                swatches={colors}
              />
            </Navbar.Section>
            <Navbar.Section mt="md">
              <Button
                color="cyan"
                variant="outline"
                onClick={onShuffleEmojiButtonClick}
              >
                🔀 Emoji
              </Button>
            </Navbar.Section>
            <Navbar.Section mt="md">
              <Button
                color="lime"
                variant="outline"
                onClick={onShuffleImageButtonClick}
              >
                🔀 Image
              </Button>
            </Navbar.Section>
            <Navbar.Section mt="md" grow>
              <Button onClick={onButtonClick}> 📸 Screenshot</Button>
            </Navbar.Section>
            <Navbar.Section mt="md">
              <Footer></Footer>
            </Navbar.Section>
          </Navbar>
        }
        header={
          <Header height={60} p="xs">
            <Center>
              <Title>Collager Party </Title>
            </Center>
          </Header>
        }
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        })}
      >
        <Container
          fluid
          sx={{
            backgroundColor: `${bgColor}`,
            display: "flex",
            flexWrap: "wrap",
            height: "100%",
            borderRadius: "15px",
          }}
          ref={ref}
        >
          <ImageCollection _update={updateImage}></ImageCollection>
          <EmojiCollection _update={updateEmoji}></EmojiCollection>
        </Container>
      </AppShell>
    </MantineProvider>
  );
};

const destination = document.getElementById("root");
ReactDOM.render(<App />, destination);
