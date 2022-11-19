import * as web3 from "./web3.js";
import BlockChainChat from "./build/BlockChainChat.json";

const ChatContract = new web3.default.eth.Contract(
  JSON.parse(BlockChainChat.interface),
  "0x8eF355F5fB14a66AF6b085839107265b465A4432"
);

export default ChatContract;
