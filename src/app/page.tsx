"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useGetRecipes } from "../hooks/useGetRecipes";
import { RecipeList } from "../components/RecipeList";


export default function Home() {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const router = useRouter()
  const updateSearch = (e: any) => {
    setSearch(e.target.value);
  };

  const getSearch = (e: any) => {
    e.preventDefault();
    console.log("getSearch", search)
    const path = '/list/' + search
    router.push(path)
    // console.log("p", path)
    // setQuery(search);
    // setSearch("");
  };

  //const recipes = useGetRecipes(query);
  return (
    <div>
      <form className="search-form-home" onSubmit={getSearch}>
        <input
          className="search-bar"
          type="text"
          placeholder = "Search Key Words to find a recipe"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}