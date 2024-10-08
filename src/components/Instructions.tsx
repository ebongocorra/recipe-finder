import { useGenerateInstructions } from "@/hooks/useGenerateInstructions";
import OpenAIApi, { OpenAI } from "openai";
import { useEffect, useState } from "react";
import { Loader } from "./Loader";
import { loadBindings } from "next/dist/build/swc";

export const Instructions = (name: any, ingredients: any) => {
  const { data, loading } = useGenerateInstructions(
    name.name,
    name.ingredients
  );

  const instructions = data?.toString().split("\n");
//   console.log("inst", instructions)

  return  (
    <ul>
      {instructions.map((step: string) => (
        <li key={step}>{step}</li>
      ))}
    </ul>
  );
};
