import Link from "next/link";
import { Ingredients } from "./Ingredients";
import { useRouter } from "next/router";

export const RecipeList = (data: any) => {
  console.log("recipe", data.recipes.hits);
  return (
        <div className="recipes">
        {data.recipes.hits.map((recipe: any, index: number) => (
          <Link href={'/recipe/' + recipe.recipe.label} key={index} className="recipe">
            <img src={recipe.recipe.image} />
            <div className = "title">{recipe.recipe.label}</div>
          </Link>
        ))}
      </div>
  );
};