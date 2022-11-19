import path from "path";
import fs from "fs-extra";
import solc from "solc";

const __dirname = path.resolve() + "\\eth";

//path to the build directory
const buildPath = path.resolve(__dirname, "build");

//remove the directory if it exist
fs.removeSync(buildPath);

//path to the contract sol file
const chatPath = path.resolve(__dirname, "contracts", "Chat.sol");

//read the data in the file and store it in a variable
const source = fs.readFileSync(chatPath, "utf-8");

//compile and get the contracts property of the output
const output = solc.compile(source, 1).contracts;

//check if the build folder exist if no than create
fs.ensureDirSync(buildPath);

//output of the compiled contract store in the file
for (let contract in output) {
  fs.outputJSONSync(
    path.resolve(buildPath, `${contract.replace(":", "")}.json`),
    output[contract]
  );
}
