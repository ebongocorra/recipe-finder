"use client";
import { formatNumber } from "@/app/functions/formatNumber";
import { Instructions } from "@/components/Instructions";
import { NutritionLabel } from "@/components/NutritionLabel";
import { useGetRecipes } from "@/hooks/useGetRecipes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import Image from "next/image";

export default function Recipe() {
  const router = useRouter();
  const path = useParams();
  const name = path.recipe[0];
  const recipes = useGetRecipes(name as string);
  const recipe = recipes?.hits[0];

  console.log("recipe", recipe?.recipe?.ingredientLines);
  return (
    recipe && (
      <div>
        <h1 className="flex justify-center font-bold">{recipe.recipe.label}</h1>
        <div className="grid grid-cols-2 pt-10">
          <img src={recipe?.recipe.image} className="page-image" alt="image" />
          <div className="object-fill">
            <h1 className="font-semibold">Ingredients</h1>
            <ul className="pb-5">
              {recipe?.recipe.ingredientLines.map((line: any, index: any) => (
                <li key={index}>{line}</li>
              ))}
            </ul>
            {recipe && (
              <div className = "pb-5">
              <h1 className="font-semibold">Instructions</h1>
              <Instructions
                name={recipe.recipe.label}
                ingredients={recipe?.recipe?.ingredientLines}
              />
              </div>
            )}
            <NutritionLabel
              nutrition={recipe.recipe.totalNutrients}
              daily={recipe.recipe.totalDaily}
            />
          </div>
        </div>
      </div>
    )
  );
}
