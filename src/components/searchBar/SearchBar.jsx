import { SearchContainer, SearchInput, SearchIcon, SearchIconContainer } from "./searchBar.styles";


export default function SearchBar(props) {
  const {onSearch}=props;
   return (
      <SearchContainer>
         <SearchInput type='search' />
         <SearchIconContainer>
         <SearchIcon onClick={onSearch}/>

         </SearchIconContainer>
         
      </SearchContainer>
   );
}
