import React, { useState } from "react";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { Search as SearchIcon } from "@mui/icons-material";
import { getPets } from "../../Redux/Actions/actions_filter.js";
import { useDispatch } from "react-redux";
import style from "./SearchBar.module.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();

    const pets = await dispatch(getPets(searchTerm));

    setSearchResults(pets);
  };

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    border: "1px solid #01579b",
    color: "#01579b",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(5),
    marginLeft: 0,
    width: "100%",
    height: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "50%",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
        <Search sx={{ flexGrow: 1 }}>
          <SearchIconWrapper
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          >
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Buscar..."
            inputProps={{ "aria-label": "Buscar" }}
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </Search>
        <button class={style.search} type="submit">
          Buscar
        </button>
      </form>
      {searchResults && searchResults.length > 0 && (
        <div>
          <ul>
            {searchResults.map((result) => (
              <li key={result}>{result.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
