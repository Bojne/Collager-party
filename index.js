import React, { useState, useRef, useCallback } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
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
  useMantineTheme,
  Group,
  MantineProvider,
} from "@mantine/core";
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
import stuff1 from "./img/objects/mountain_PNG30.png";
import stuff2 from "./img/objects/alarm_clock_PNG94.png";
import stuff3 from "./img/objects/earth_PNG18.png";
import stuff4 from "./img/objects/mountain_PNG6.png";
import stuff5 from "./img/objects/hands_PNG958.png";
import stuff6 from "./img/objects/finger_PNG6307.png";
import stuff7 from "./img/objects/hands_PNG944.png";
import hand from "./img/objects/phone_hand_PNG91.png";

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
  ];
  const imageSet = allImages.filter(() => Math.random() > 0.5);
  return imageSet.map((obj) => {
    return <DraggableObject imageUrl={obj}></DraggableObject>;
  });
});

const EmojiCollection = React.memo((_update) => {
  const { emojis } = config;
  const emojiSet = emojis.filter(() => Math.random() > 0.8);
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
        link.download = "my-image-name.jpeg";
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
              <ColorInput
                value={bgColor}
                onChange={setBgColor}
                swatches={colors}
              />
            </Navbar.Section>
            <Navbar.Section mt="md">
              <Button color="yellow" onClick={onShuffleEmojiButtonClick}>
                Shuffle Emoji
              </Button>
            </Navbar.Section>
            <Navbar.Section mt="md">
              <Button color="orange" onClick={onShuffleImageButtonClick}>
                Shuffle Image
              </Button>
            </Navbar.Section>
            <Navbar.Section mt="md" grow>
              <Button onClick={onButtonClick}>Screenshot</Button>
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
