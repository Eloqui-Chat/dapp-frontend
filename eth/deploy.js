import HDWalletProvider from "@truffle/hdwallet-provider";
import path from "path";
import fs from "fs-extra";
import Web3 from "web3";
import * as BlockchainChat from "./build/BlockchainChat.json" assert { type: "json" };

const __dirname = path.resolve() + "\\eth";

const provider = new HDWalletProvider(
  "<your_metamask_phrases>",
  // remember to change this to your own phrase!
  "https://polygon-mumbai.infura.io/v3/<polygon_mumbai_address>"
  // remember to change this to your own endpoint!
);
const web3 = new Web3(provider);
console.log(web3);

const deploy = async () => {
  try {
    const accounts = await web3.eth.getAccounts();

    console.log("Attempting to deploy from account", accounts[0]);
    const result = await new web3.eth.Contract(
      JSON.parse(BlockchainChat.default.interface)
    )
      .deploy({ data: BlockchainChat.default.bytecode })
      .send({ gas: "1000000", from: accounts[0] });

    console.log("Contract deployed to", result.options.address);

    const storeTheAddress = async () => {
      try {
        await fs.outputFile(
          `${__dirname}/deployedAddress.js`,
          `{deployedAddress: ${result.options.address}}`
        );
      } catch (err) {
        console.error(err);
      }
    };

    storeTheAddress();

    provider.engine.stop();
  } catch (err) {
    console.log(err);
  }
};

try {
  deploy();
} catch (err) {
  console.log(err);
}
