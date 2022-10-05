import React from "react";
import { Resizable } from "re-resizable";
import Draggable from "react-draggable";

export const DraggableObject = ({ imageUrl, text }) => {
  console.log("Import Image", imageUrl);
  imageUrl = text ? "" : imageUrl;
  return (
    <Draggable bounds="parent">
      <Resizable
        defaultSize={{
          width: 220,
          height: 220,
        }}
        style={{
          background: `url(${imageUrl})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          // font-size: `${FontSize}`,
        }}
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
