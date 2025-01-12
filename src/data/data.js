import React from "react";
import { FaTwitter } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

export const navbar = [
  {
    id: uuidv4(),
    title: "Home",
    url: "/",
  },
  {
    id: uuidv4(),
    title: "About Invoicer",
    url: "/about",
  },
];

