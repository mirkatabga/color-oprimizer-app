import React from "react"

window.React = React;

import { render } from "react-dom"; 
import Layout from "./components/layout";
import HomeView from "./components/views/home-view";

(() => {
    render(<Layout page = {<HomeView />} />, document.querySelector("#react-container"));
})()