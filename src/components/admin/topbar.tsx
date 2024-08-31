import { ReduxWrapper } from "../redux-wrapper";
import FilterBy from "./filter-by";
import Searchbar from "./search-bar";

const Topbar = () => {
  return (
    <section className="topbar">
      <ReduxWrapper>
        <Searchbar />
      </ReduxWrapper>
      <ReduxWrapper>
        <FilterBy />
      </ReduxWrapper>
    </section>
  );
};

export default Topbar;
