import React from "react";
import BSAlert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";

import { useSelector } from "react-redux";

import { motion } from "framer-motion";

export default function Alert() {
  const message = useSelector((state) => state.alert.message);
  const variant = useSelector((state) => state.alert.variant);

  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 3,
        type: "spring",
        damping: 50,
        stiffness: 300,
      },
    },
    exit: {
      y: "100vh",
      opacity: 1,
    },
  };
  return (
    <motion.div
      className="Alert"
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Container>
        <BSAlert variant={variant}>
          <p>{message}</p>
        </BSAlert>
      </Container>
    </motion.div>
  );
}
