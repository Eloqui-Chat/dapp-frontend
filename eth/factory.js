import web3 from "./web3.js";
import ChatFactory from "./build/ChatFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(ChatFactory.interface),
  "0xd15887dfd35483F0bebD9af64c371376442B463F"
);

export default instance;
