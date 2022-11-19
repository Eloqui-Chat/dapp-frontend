import { FunctionComponent as FC } from "react";
import { Routes, Route } from "react-router-dom";
import { MDBContainer, MDBRow } from "mdb-react-ui-kit";

import { SideBar } from "../../components";
import { IChats } from "./IChats";
import { ChatsHome } from "./Pages";

const Chats: FC<IChats> = ({ account }) => {
  const chats = ["global"];

  return (
    <MDBContainer className="px-0" fluid>
      <MDBRow className="px-0 mx-0">
        <SideBar chats={chats} />
        <Routes>
          <Route
            path="/"
            element={<ChatsHome chats={chats} account={account} />}
          />
        </Routes>
      </MDBRow>
    </MDBContainer>
  );
};

export default Chats;
