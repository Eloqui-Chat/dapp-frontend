import { FunctionComponent as FC } from "react";
import { MDBCol } from "mdb-react-ui-kit";

import { IChatsHome } from "./IChatsHome";
import { TopBar } from "../../../../components";

const ChatsHome: FC<IChatsHome> = () => {
  return (
    <MDBCol md="9" className="px-0 mx-0 position-fixed end-0">
      <TopBar />
      <div>ChatsHome</div>
    </MDBCol>
  );
};

export default ChatsHome;
