import React, { useState, useRef, useCallback } from "react";
import { Resizable } from "re-resizable";
import Draggable from "react-draggable";
 

const beethovenImg = "https://www.biography.com/.image/t_share/MTE1ODA0OTcxNzMyNjY1ODY5/wolfgang-mozart-9417115-2-402.jpg"

const DraggableObject = (imageUrl=beethovenImg) => {
    console.log({imageUrl})
    return <Draggable>
          <Resizable
            defaultSize={{
              width: 250,
              height: 250,
            }}
            style={{
              background: `url(${"https://www.biography.com/.image/t_share/MTE1ODA0OTcxNzMyNjY1ODY5/wolfgang-mozart-9417115-2-402.jpg"})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
            lockAspectRatio={true}
          ></Resizable>
    </Draggable>
}

export default DraggableObject;
