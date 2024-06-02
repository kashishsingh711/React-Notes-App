import { MdSearch } from "react-icons/md";

const Search = ({handleSearchText}) => {
 return (
  <div className="search">
   <MdSearch className="search-icons" size="1.3em"/>
   <input type="text" placeholder="type to search..." onChange={(event) => handleSearchText(event.target.value)}/>
  </div>
 )
}

export default Search;