pragma solidity ^0.4.26;

contract BlockchainChat {
  event NewMessage(address from, uint timestamp, string message, string message_type);
  struct Message {
    address sender;
    string content;
    string content_type;
    uint timestamp;
  }

  Message[] messages;

  function sendMessage(string content, string content_type ) public {
    messages.push(Message(msg.sender, content, content_type, block.timestamp));
    emit NewMessage(msg.sender, block.timestamp, content, content_type);
  }

  function getMessage(uint index) view public returns (address,string, string, uint) {
      return (
          messages[index].sender,
          messages[index].content,
          messages[index].content_type,
          messages[index].timestamp
      );
  }

  function getMessagesLength() view public returns (uint) {
    return messages.length;
  }

}