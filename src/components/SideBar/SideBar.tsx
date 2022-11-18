import { FunctionComponent as FC } from "react";
import { MDBCol } from "mdb-react-ui-kit";

import "./Sidebar.css";

import { ISideBar } from "./ISideBar";
import Search from "./Search/Search";

const SideBar: FC<ISideBar> = () => {
  return (
    <MDBCol
      md="3"
      className="sidebar px-0 border border-end border-start-0 border-top-0 border-bottom-0 position-fixed top-0 left-0 h-100 "
    >
      <Search />
      <div>SideBar</div>
    </MDBCol>
  );
};

export default SideBar;
