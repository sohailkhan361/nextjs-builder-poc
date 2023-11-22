"use client";
import { Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import ProductsGrid from "./components/ProductsGrid/ProductsGrid";
import ProductView from "./components/ProductView/ProductView";
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
      name: "list",
      type: "list",
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

Builder.registerComponent(ProductView, {
  name: "ProductView",
  inputs: [
    {
      name: "author",
      type: "string",
      required: false,
    },
    {
      name: "cover",
      type: "string",
      required: false,
      defaultValue: "https://podiumaudio.com/wp-content/uploads/2022/09/Book-Cover-default-768x768.jpeg",
    },
    {
      name: "description",
      type: "string",
    },
    {
      name: "rank",
      type: "number",
    },
    {
      name: "releaseDate",
      type: "string",
      required: false,
    },
    {
      name: "title",
      type: "string",
      required: true,
      defaultValue: 'Sample Title here'
    },
  ],
});

Builder.registerComponent(ProductsGrid, {
  name: 'ProductsGrid',
  inputs: [
      {
          name: 'books',
          type: 'list',
          subFields: [
              {
                  name: 'title',
                  type: 'string',
              },
              {
                  name: 'description',
                  type: 'string',
              },
              {
                  name: 'author',
                  type: 'string',
              },
              {
                  name: 'rank',
                  type: 'number',
              },
              {
                  name: 'cover',
                  type: 'string',
                  defaultValue: "https://podiumaudio.com/wp-content/uploads/2022/09/Book-Cover-default-768x768.jpeg",
              },
              {
                  name: 'releaseDate',
                  type: 'string',
              },
          ],
      },
  ],
});
