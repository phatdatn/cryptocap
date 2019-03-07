import React, { Component } from "react";
import {Image} from "react-native";

/* Object that once indexed into, gives path to coin images. */
const IMG_URLS = {
  BTC:
    require("./img/btc_icon.png"),
  ETH:
    require("./img/eth_icon.png"),
  XRP:
    require("./img/xrp_icon.png")
};

/* Returns corresponding coin image. */
const Img = props => {
  const imgUrl = IMG_URLS[props.type];
  return <Image style={{width: 80, height: 80}} source={imgUrl} />
};

export default Img;
