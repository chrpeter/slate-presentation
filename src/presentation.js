import React from "react";
import PropTypes from "prop-types";

import {
  Fit,
  Fill,
  Appear,
  Image,
  Link,
  CodePane,
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text
} from "spectacle";
import "prismjs/components/prism-bash";

import preloader from "spectacle/lib/utils/preloader";

import createTheme from "spectacle/lib/themes/default";
import DemoPluginEditor from "./slateWithPlugin";
// Require CSS
require("normalize.css");
require("./assets/override.css");
require("./assets/prism-tomorrow.css");

const images = {
  slateSchool: require("./assets/slate-school.jpg"),
  demoTime: require("./assets/demotime.gif")
};

const video = {};

preloader(images);
preloader(video);

const theme = createTheme(
  {
    primary: "#A1D1CA",
    secondary: "#2D2926",
    tertiary: "#FDFDFD",
    quartenary: "white"
  },
  {
    primary: "-apple-system, BlinkMacSystemFont, Helvetica",
    secondary: "-apple-system, BlinkMacSystemFont, Helvetica"
  }
);

theme.screen.components.codePane.fontSize = "1.4rem";

const AppearListItem = ({ children }) => (
  <Appear>
    <ListItem>{children}</ListItem>
  </Appear>
);

AppearListItem.propTypes = {
  children: PropTypes.node.isRequired
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["slide"]}
        progress="None"
        transitionDuration={500}
        theme={theme}
      >
        <Slide bgColor="secondary" notes="">
          <Fill>
            <Heading size={1} lineHeight={1} textColor="primary">
              Slate in Action
            </Heading>
          </Fill>
          <div style={{ position: "absolute", right: 0 }}>
            <Heading size={3} fit lineHeight={1.5} textColor="tertiary">
              Christian Peter
            </Heading>
            <Link href="mailto:christian.peter@knowit.no" textColor="tertiary">
              christian.peter@knowit.no
            </Link>
            <br />
            <Link href="https://github.com/chrpeter/" textColor="tertiary">
              https://github.com/chrpeter
            </Link>
          </div>
          <div style={{ position: "absolute", left: 0 }}>
            <Heading size={3} fit lineHeight={1.5} textColor="tertiary">
              Sebastian Jara
            </Heading>
            <Link href="mailto:sebastian.jara@knowit.no" textColor="tertiary">
              sebastian.jara@knowit.no
            </Link>
            <br />
            <Link href="https://github.com/sebastianjg/" textColor="tertiary">
              https://github.com/sebastianjg
            </Link>
          </div>
        </Slide>
        <Slide bgColor="secondary" notes="">
          <Heading size={6} textColor="primary" lineHeight="2">
            What is Slate?
          </Heading>
          <Image src={images.slateSchool} />
        </Slide>
        <Slide bgColor="secondary" notes="">
          <Heading size={6} textColor="primary" lineHeight="2">
            What is SlateJS?
          </Heading>
          <List textColor="tertiary">
            <AppearListItem textSize="2.2rem">
               Slate is a completely customizable framework for building rich
              text editors.
            </AppearListItem>
            <AppearListItem textSize="2.2rem">
              Open source JS Library (~7000stars).
            </AppearListItem>
            <AppearListItem textSize="2.2rem">
              Created by Ian Storm Taylor.
            </AppearListItem>
          </List>
        </Slide>
        <Slide bgColor="secondary" notes="">
          <Heading size={6} textColor="primary" lineHeight="2">
            Motivation for creating Slate
          </Heading>
          <List textColor="tertiary">
            <AppearListItem textSize="2.2rem">
              Hard-coded schemas, complex change in transformation of document
            </AppearListItem>
            <AppearListItem textSize="2.2rem">
              Serialization/Deserialization an afterthought
            </AppearListItem>
            <AppearListItem textSize="2.2rem">
              Need to learn libraryies own View Layer istead of using existing
              alternatives (Like React)
            </AppearListItem>
            <AppearListItem textSize="2.2rem">
              Impossible to build nested documents
            </AppearListItem>
          </List>
        </Slide>
        <Slide bgColor="secondary" notes="">
          <Heading size={6} textColor="primary" lineHeight="2">
            Why did we choose Slate?
          </Heading>
          <List textColor="tertiary">
            <ListItem textSize="2.2rem">
              The customer needed a new (CMS?) system
            </ListItem>
            <ListItem textSize="2.2rem">
              We used Draft.js in the first place, but we need tables...
            </ListItem>
            <ListItem textSize="2.2rem">
              TinyMCE - hard to customize and unfit for our use case.
            </ListItem>
          </List>
        </Slide>
        <Slide bgColor="secondary" notes="">
          <Heading size={6} textColor="primary" lineHeight="2">
            Our use case & motivation - Slate:
          </Heading>
          <List textColor="tertiary">
            <AppearListItem textSize="2.2rem">
              Handles complex structures.
            </AppearListItem>
            <AppearListItem textSize="2.2rem">
              A lot of custom plugins.
            </AppearListItem>
            <AppearListItem textSize="2.2rem">
              Solves special use cases for our customer (and more!)
            </AppearListItem>
            <AppearListItem textSize="2.2rem">
              We needed to support tables...
            </AppearListItem>
          </List>
        </Slide>
        <Slide bgColor="secondary" notes="">
          <Heading size={6} textColor="primary" lineHeight="2">
            Slate principles
          </Heading>
          <List textColor="tertiary">
            <AppearListItem textSize="2.2rem">
              Representation of the DOM Model as a JSON Object.
            </AppearListItem>
            <AppearListItem textSize="2.2rem">
              Blocks, inlines and marks (nodes).
            </AppearListItem>
            <AppearListItem textSize="2.2rem">Immutable</AppearListItem>
            <AppearListItem textSize="2.2rem">
              Core library (maybe support for other libraries in the future).
            </AppearListItem>
            <AppearListItem textSize="2.2rem">
              Plugin based (Plug & Play).
            </AppearListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={3} textColor="secondary" lineHeight="2">
            Blocks
          </Heading>
          <CodePane
            lang="js"
            source={require("./assets/block-tags.example")}
            margin="-20px auto"
          />
        </Slide>
        <Slide>
          <Heading size={6} textColor="secondary" lineHeight="2">
            Deserialize & Serialize
          </Heading>
          <CodePane
            lang="js"
            source={require("./assets/desarlizer_blocks.example")}
            margin="-20px auto"
            textSize="16px"
          />
        </Slide>
        <Slide>
          <Heading size={6} textColor="secondary" lineHeight="2">
            Schema rendering
          </Heading>
          <CodePane
            lang="js"
            source={require("./assets/render_node.example")}
            margin="-20px auto"
            textSize="16px"
          />
        </Slide>
        <Slide>
          <Heading size={6} textColor="secondary" lineHeight="2">
            Schema normalization
          </Heading>
          <CodePane
            lang="js"
            source={require("./assets/validate_node.example")}
            margin="-20px auto"
            textSize="16px"
          />
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={6} textColor="tertiary" lineHeight="2">
            Plugins
          </Heading>
          <DemoPluginEditor />
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={4} textColor="tertiary" lineHeight="2">
            Time for demo!
          </Heading>
          <Image src={images.demoTime} />
        </Slide>
        <Slide bgColor="secondary" notes="">
          <Heading size={6} textColor="primary" lineHeight="2">
            Why you should use slate 👊
          </Heading>
          <List textColor="tertiary">
            <AppearListItem textSize="2.2rem">Fast to start 🚀</AppearListItem>
            <AppearListItem textSize="2.2rem">
              Supports complex data models 🌌
            </AppearListItem>
            <AppearListItem textSize="2.2rem">Completely customizable 🔨</AppearListItem>
            <AppearListItem textSize="2.2rem">
              Large community with a lot of active contributors 👥
            </AppearListItem>
            <AppearListItem textSize="2.2rem">But, it is expensive 💰</AppearListItem>
          </List>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={6} fit lineHeight={1.5} textColor="tertiary">
            Questions?
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
