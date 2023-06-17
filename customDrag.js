import React from "react";
import { useState, useEffect } from "react";
import { Resizable } from "re-resizable";
import Draggable from "react-draggable";

export const DraggableObject = ({ imageUrl, text }) => {
  const [backgroundStyle, setBackgroundStyle] = useState({
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  });

  useEffect(() => {
    setBackgroundStyle((prevStyle) => ({
      ...prevStyle,
      backgroundImage: `url(${imageUrl})`,
    }));
  }, [imageUrl]);

  console.log("Import Image", imageUrl);
  imageUrl = text ? "" : imageUrl;
  return (
    <Draggable bounds="parent">
      <Resizable
        defaultSize={{
          width: 220,
          height: 220,
        }}
        style={backgroundStyle}
        lockAspectRatio={true}
      >
        {text}
      </Resizable>
    </Draggable>
  );
};

export const EmojiDraggable = ({ emoji }) => {
  return (
    <Draggable bounds={"parent"}>
      <div className="emoji">{emoji}</div>
    </Draggable>
  );
};
