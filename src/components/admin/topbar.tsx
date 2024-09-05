// import { ReduxWrapper } from "../redux-wrapper";
import FilterBy from "./filter-by";
import Searchbar from "./search-bar";

const Topbar = ({ setSearch }: {setSearch: React.Dispatch<React.SetStateAction<string>>}) => {
  return (
    <section className="topbar">
      {/* <ReduxWrapper> */}
        <Searchbar setSearch={setSearch} />
      {/* </ReduxWrapper>
      <ReduxWrapper> */}
        <FilterBy />
      {/* </ReduxWrapper> */}
    </section>
  );
};

export default Topbar;
