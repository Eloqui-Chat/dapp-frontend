import { FunctionComponent as FC } from "react";
import { MDBRow, MDBCol, MDBIcon } from "mdb-react-ui-kit";

import { ITopBar } from "./ITopBar";

const TopBar: FC<ITopBar> = ({ chats, account }) => {
  return (
    <MDBRow className="px-5 py-4  top-bar">
      <MDBCol
        md={"12"}
        className="d-flex shadow-lg rounded py-3 flex-column align-items-center"
      >
        <span className="fw-bold">Global Chat</span>
        <span className="text-muted">
          <span className="badge badge-success badge-sm">your address</span>
          {"  "}
          {account}
        </span>
      </MDBCol>
    </MDBRow>
  );
};

export default TopBar;
