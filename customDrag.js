import React from "react";
import { useState, useEffect, useRef } from "react";
import { Resizable } from "re-resizable";
import Draggable from "react-draggable";

export const DraggableObject = ({ imageUrl, text }) => {
  const [backgroundStyle, setBackgroundStyle] = useState({
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  });

  const pressTimeRef = useRef(0);
  const isDraggedRef = useRef(false);

  const [isDeleted, setIsDeleted] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const handleToggleSelect = () => {
    setIsSelected(!isSelected);
  };

  const handleDelete = () => {
    setIsDeleted(true);
    onDelete(); // Notify the parent component about the deletion
  };

  useEffect(() => {
    let timer;
    if (isSelected) {
      timer = setTimeout(() => {
        setIsSelected(false);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [isSelected]);

  useEffect(() => {
    setBackgroundStyle((prevStyle) => ({
      ...prevStyle,
      backgroundImage: `url(${imageUrl})`,
    }));
  }, [imageUrl]);

  const handlePress = () => {
    pressTimeRef.current = Date.now();
    isDraggedRef.current = false;
  };

  const handleRelease = () => {
    const pressTime = pressTimeRef.current;
    const releaseTime = Date.now();
    const pressReleaseDelta = releaseTime - pressTime;
    console.log(pressReleaseDelta);

    if (pressReleaseDelta < 300 || !isDraggedRef.current) {
      setIsSelected(!isSelected);
      onSelect();
    }
  };

  const handleDrag = () => {
    isDraggedRef.current = true;
  };

  console.log("Import Image", imageUrl);
  imageUrl = text ? "" : imageUrl;

  if (isDeleted) {
    return <div></div>; // If the object is deleted, don't render anything
  }
  return (
    <Draggable
      bounds="parent"
      onMouseDown={handlePress}
      onMouseUp={handleRelease}
      onTouchStart={handlePress}
      onTouchEnd={handleRelease}
      cancel=".delete-button"
      onDrag={handleDrag}
    >
      <Resizable
        defaultSize={{
          width: 220,
          height: 220,
        }}
        style={backgroundStyle}
        lockAspectRatio={true}
        onClick={handleToggleSelect}
        className={`deletable-object`}
      >
        {text}
        {isSelected && !isDraggedRef.current && (
          <button className="delete-button" onClick={handleDelete}>
            x
          </button>
        )}
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
