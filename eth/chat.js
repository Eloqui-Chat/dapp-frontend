import web3 from "./web3";
import ChatJson from "./build/Chat.json";

export default (id) => {
  return new web3.eth.Contract(JSON.parse(ChatJson.interface), id);
};
