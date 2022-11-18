import { FunctionComponent as FC } from "react";
import { MDBRow } from "mdb-react-ui-kit";

import { ITopBar } from "./ITopBar";

const TopBar: FC<ITopBar> = () => {
  return (
    <MDBRow className="px-0">
      <div>TopBar</div>
    </MDBRow>
  );
};

export default TopBar;
