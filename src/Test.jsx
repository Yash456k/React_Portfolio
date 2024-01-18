import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";

const Test = () => {
  const [position, setPosition] = useState("middle");
  const controls = useAnimation();

  const handleSnap = (snapTo) => {
    setPosition(snapTo);
    controls.start({
      y: snapTo === "top" ? 0 : snapTo === "middle" ? 100 : 200,
    });
  };

  return (
    <div
      style={{
        position: "relative",
        height: "300px",
        width: "80px",
        margin: "0px auto",
        backgroundColor: position === "top" ? "green" : "#000000", // Set background color for the slider track
        borderRadius: "300px", // Set border radius for the slider track
        overflow: "hidden", // Hide the overflowing circle
      }}
    >
      <motion.div
        dragElastic={0}
        drag="y"
        dragConstraints={{ top: 0, bottom: 200 }}
        onDragEnd={(event, info) => {
          const y = info.offset.y;
          if (y < 40) {
            handleSnap("top");
          } else if (y > 105) {
            handleSnap("bottom");
          } else {
            handleSnap("middle");
          }
        }}
        animate={controls}
      >
        <motion.div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            background: "blue",
            position: "absolute",
            top: "25px",
            left: "50%",
            x: "-25px",
            cursor: "grab", // Set cursor to grab to indicate draggability
          }}
        />
      </motion.div>
    </div>
  );
};

export default Test;
