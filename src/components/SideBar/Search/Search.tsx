import { FunctionComponent as FC } from "react";
import { MDBRow, MDBCol, MDBInputGroup } from "mdb-react-ui-kit";

import { ISearch } from "./ISearch";

const Search: FC<ISearch> = () => {
  return (
    <MDBRow className="px-0 mx-0 border border-bottom border-top-0 border-start-0 border-end-0 border-white">
      <MDBCol
        md="12"
        className="d-flex justify-content-center px-0 py-4 align-items-center"
      >
        <MDBInputGroup tag="form" className="d-flex w-auto mb-3">
          <input
            placeholder="Search"
            aria-label="Search"
            className="border py-1 px-3 rounded"
            type="Search"
          />
        </MDBInputGroup>
      </MDBCol>
    </MDBRow>
  );
};

export default Search;
