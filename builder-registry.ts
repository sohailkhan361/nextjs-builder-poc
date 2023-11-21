"use client";
import { Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import TextBox from "./components/TextBox/TextBox";

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(Footer, {
  name: "Footer",
});

Builder.registerComponent(Navbar, {
  name: "Navbar",
  inputs: [
    {
      name: "navItems",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(TextBox, {
  name: "TextBox",
  inputs: [
    {
      name: "description",
      type: "string",
      required: true,
    },
    {
      name: "headline",
      type: "string",
      required: true,
    },
  ],
});
