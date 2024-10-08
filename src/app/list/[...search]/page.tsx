"use client";
import { RecipeList } from "@/components/RecipeList";
import { useGetRecipes } from "@/hooks/useGetRecipes";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";

export default function List() {
  const router = useRouter()
  const path = useParams()
  console.log("path", path.search)
  const initSearch = path.search[0]
    const [search, setSearch] = useState(initSearch);
    const [query, setQuery] = useState(initSearch);
    const updateSearch = (e: any) => {
      setSearch(e.target.value);
    };
  
    const getSearch = (e: any) => {
      e.preventDefault();
      const path = '/list/' + search
      router.push(path)
      // setQuery(search);
      // setSearch("");
    };
  
    const recipes = useGetRecipes(query as string);
    return (
      <div>
        <form className="search-form" onSubmit={getSearch}>
          <input
            className="search-bar"
            type="text"
            placeholder = "Search Key Words to find a recipe"
            value={search as string}
            onChange={updateSearch}
          />
          <button className="search-button" type="submit">
            Search
          </button>
        </form>
        {recipes ? (
          <div>
            <RecipeList recipes={recipes}/>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    )
}