import { useState, FunctionComponent as FC, useEffect } from "react";
import { MDBCol, MDBInputGroup, MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { toast } from "react-toastify";
import axios from "axios";

import ChatContract from "../../../../../eth/factory";

import { IChatsHome } from "./IChatsHome";
import { TopBar } from "../../../../components";

const ChatsHome: FC<IChatsHome> = ({ chats, account }) => {
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<Object[]>([]);
  const [image, setImage] = useState<string | Blob>("");
  const [video, setVideo] = useState<string | Blob>("");
  const [loading, setLoading] = useState(false);

  const getChats = async () => {
    const chatsLength = await ChatContract.methods.getMessagesLength().call();

    try {
      const messages = await Promise.all(
        [...Array(parseInt(chatsLength)).keys()].map(async (i: any) => {
          let chatData = await ChatContract.methods.getMessage(i).call();
          chatData = {
            ...chatData,
            3: new Date(chatData[3] * 1000).toLocaleString(),
          };
          return chatData;
        })
      );

      setMessages(messages);
    } catch (err) {}
  };

  useEffect(() => {
    setInterval(() => {
      getChats();
    }, 5000);
  }, []);
  const sendMessage = async () => {
    if (!message) {
      toast.error("Please enter a message!");
    }
    const chatContract = ChatContract.methods;
    setLoading(true);
    try {
      await chatContract.sendMessage(message, "text").send({ from: account });
      setMessage("");
      setLoading(false);
    } catch (err: any) {
      toast.error(err.message);
      setLoading(false);
      console.log(err);
    }
  };

  const sendImage = async (e: any) => {
    const BASE_URL = "https://backend.eloqui.live";

    if (!e) {
      return toast.error("Please select an image!");
    }

    const formData = new FormData();
    formData.append("image", e);

    setLoading(true);

    axios
      .post(`${BASE_URL}/api/ipfs/img`, formData)
      .then(async (res) => {
        const hash = res.data.hash;
        const imgLink = `https://eloqui.infura-ipfs.io/ipfs/${hash}`;

        const chatContract = ChatContract.methods;
        try {
          await chatContract
            .sendMessage(imgLink, "image")
            .send({ from: account });
          setImage("");
          setLoading(false);
        } catch (err: any) {
          toast.error(err.message);
          setLoading(false);
          console.log(err);
        }
      })
      .catch((err) => {
        setLoading(false);
        toast.error("Something went wrong!");
        console.log(err);
      });
  };
  const sendVideo = async (e: any) => {
    console.log(e);
    const BASE_URL = "https://backend.eloqui.live";

    if (!e) {
      return toast.error("Please select an video!");
    }

    const formData = new FormData();
    formData.append("image", e);

    setLoading(true);

    axios
      .post(`${BASE_URL}/api/ipfs/img`, formData)
      .then(async (res) => {
        const hash = res.data.hash;
        const imgLink = `https://eloqui.infura-ipfs.io/ipfs/${hash}`;

        const chatContract = ChatContract.methods;
        try {
          await chatContract
            .sendMessage(imgLink, "video")
            .send({ from: account });
          setImage("");
          setLoading(false);
        } catch (err: any) {
          toast.error(err.message);
          setLoading(false);
          console.log(err);
        }
      })
      .catch((err) => {
        setLoading(false);
        toast.error("Something went wrong!");
        console.log(err);
      });
  };

  return (
    <MDBCol md="9" className="px-0 mx-0 position-fixed end-0">
      <TopBar chats={chats} account={account} />

      {/* add text box  */}

      <MDBCol
        md="12"
        className="px-5 mx-0 mb-3"
        style={{ height: "70vh", overflowY: "scroll" }}
      >
        {messages.map((chat: any, key: any) =>
          chat["0"]?.toLowerCase() == account?.toLowerCase() ? (
            <div
              key={key * 532}
              className="d-flex justify-content-end my-3 border p-3 bg-primary text-white"
            >
              <div className="d-flex flex-column align-items-end">
                <span className="small">{chat["0"].toLowerCase()} (you)</span>
                {chat["2"] == "text" ? (
                  <span className="text-white fw-bold mt-2">{chat["1"]}</span>
                ) : chat["2"] == "image" ? (
                  <img
                    src={chat["1"]}
                    alt="chat"
                    className="img-fluid mt-2"
                    style={{ maxWidth: "250px" }}
                  />
                ) : (
                  <video
                    src={chat["1"]}
                    controls
                    className="img-fluid mt-2"
                    style={{ width: "250px" }}
                  />
                )}
                <span className="text-white small mt-2">{chat["3"]}</span>
              </div>
            </div>
          ) : (
            <div
              key={key * 532}
              className="d-flex justify-content-start my-3 border p-3 bg-primary text-white"
            >
              <div className="d-flex flex-column align-items-start">
                <span className="small">{chat["0"].toLowerCase()}</span>
                {chat["2"] == "text" ? (
                  <span className="text-white fw-bold mt-2">{chat["1"]}</span>
                ) : chat["2"] == "image" ? (
                  <img
                    src={chat["1"]}
                    alt="chat"
                    className="img-fluid mt-2"
                    style={{ maxWidth: "250px" }}
                  />
                ) : (
                  <video
                    src={chat["1"]}
                    controls
                    className="img-fluid mt-2"
                    style={{ width: "250px" }}
                  />
                )}
                <span className="text-white small mt-2">{chat["3"]}</span>
              </div>
            </div>
          )
        )}
      </MDBCol>

      <MDBCol md="12" className="px-0 mx-0 px-5 bottom-0 d-flex">
        <MDBInputGroup className="d-flex align-items-center justify-content-center">
          <input
            type="text"
            className="w-50 border-0 p-3 shadow"
            placeholder="enter message "
            value={message}
            disabled={loading}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button
            className="btn btn-primary py-4 shadow"
            onClick={() => sendMessage()}
            disabled={loading}
          >
            {loading ? <MDBIcon fas icon="spinner" spin /> : "Send"}
          </button>
        </MDBInputGroup>

        <input
          type="file"
          id="file"
          className="d-none"
          onChange={(e) => {
            setImage(e.target.files![0]);
            sendImage(e.target.files![0]);
          }}
        />

        <MDBBtn
          onClick={() => {
            document.getElementById("file")?.click();
          }}
          disabled={loading}
          className="btn btn-primary py-4 btn-sm shadow rounded-circle"
        >
          {loading ? (
            <MDBIcon fas icon="spinner" spin className="text-white" />
          ) : (
            <MDBIcon fas icon="image" size="2x" className="text-white" />
          )}
        </MDBBtn>

        <input
          type="file"
          id="file2"
          className="d-none"
          accept="video/*"
          onChange={(e) => {
            setVideo(e.target.files![0]);
            sendVideo(e.target.files![0]);
          }}
        />

        <MDBBtn
          disabled={loading}
          onClick={() => {
            document.getElementById("file2")?.click();
          }}
          className="btn btn-primary btn-sm ms-2 me-5 py-4 shadow rounded-circle"
        >
          {loading ? (
            <MDBIcon fas icon="spinner" spin className="text-white" />
          ) : (
            <MDBIcon fas icon="video" size="2x" className="text-white" />
          )}
        </MDBBtn>
      </MDBCol>
    </MDBCol>
  );
};

export default ChatsHome;
