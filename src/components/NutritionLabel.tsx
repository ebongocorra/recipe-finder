import { formatNumber } from "@/app/functions/formatNumber";
import "../app/styles/nutritionLabel.css";
import { useGetServing } from "@/hooks/useGetServing";

export const NutritionLabel = (nutrition: any, daily: any) => {
  const message = useGetServing(nutrition);
  const servings = message.toString()?.match(/(\d+(\.\d+)?)\s+servings/);
  console.log("m", message);
  console.log("s", servings);
  return (
    servings && (
      <div className="label">
        <h2 className="font-bold border-b-2 text-3xl">Nutrition Facts</h2>
        <div>
          <div className="header">
            <div className="flex text-xl">
              <h1 className="font-bold pr-2">Calories</h1>{" "}
              <p className="ml-auto font-bold text-2xl">
                {formatNumber(nutrition?.nutrition.ENERC_KCAL.quantity, 0, servings[1] as number)}
              </p>
            </div>
          </div>
          <div className="flex border-b-2">
            <p className="ml-auto text-sm font-bold">% Daily Value</p>
          </div>
          <div className="flex border-b-2 text-sm">
            <h1 className="font-bold pr-2">Total Fat</h1>{" "}
            {formatNumber(nutrition?.nutrition.FAT.quantity, 0, servings[1] as number)}g
            <p className="ml-auto font-bold">
              {formatNumber(nutrition?.daily.FAT.quantity, 0, servings[1] as number)}%
            </p>
          </div>
          <div className="flex border-b-2 pl-5 text-sm">
            Saturated Fat {formatNumber(nutrition?.nutrition.FASAT.quantity, 0, servings[1] as number)}
            g
            <p className="ml-auto font-bold">
              {formatNumber(nutrition?.daily.FASAT.quantity, 0, servings[1] as number)}%
            </p>
          </div>
          <div className="border-b-2 pl-5 text-sm">
            Trans Fat {formatNumber(nutrition?.nutrition.FATRN.quantity, 0, servings[1] as number)}g
          </div>
          <div className="flex border-b-2 text-sm">
            <h1 className="font-bold pr-2">Cholesterol</h1>{" "}
            {formatNumber(nutrition?.nutrition.CHOLE.quantity, 0, servings[1] as number)}mg
            <p className="ml-auto font-bold">
              {formatNumber(nutrition?.daily.CHOLE.quantity, 0, servings[1] as number)}%
            </p>
          </div>
          <div className="flex border-b-2 text-sm">
            <h1 className="font-bold pr-2">Sodium</h1>{" "}
            {formatNumber(nutrition?.nutrition.NA.quantity, 0, servings[1] as number)}mg
            <p className="ml-auto font-bold">
              {formatNumber(nutrition?.daily.NA.quantity, 0, servings[1] as number)}%
            </p>
          </div>
          <div className="flex border-b-2 text-sm">
            <h1 className="font-bold pr-2">Total Carbohydrate</h1>{" "}
            {formatNumber(nutrition?.nutrition.CHOCDF.quantity, 0, servings[1] as number)}g
            <p className="ml-auto font-bold">
              {formatNumber(nutrition?.daily.CHOCDF.quantity, 0, servings[1] as number)}%
            </p>
          </div>
          <div className="border-b-2 pl-5 flex text-sm">
            Dietary Fiber {formatNumber(nutrition?.nutrition.FIBTG.quantity, 0, servings[1] as number)}
            g
            <p className="pl-20 font-bold">
              {formatNumber(nutrition?.daily.FIBTG.quantity, 0, servings[1] as number)}%
            </p>
          </div>
          <div className="border-b-2 pl-5 text-sm">
            Total Sugars {formatNumber(nutrition?.nutrition.SUGAR.quantity, 0, servings[1] as number)}g
          </div>
          <div className="flex border-b-8 border-black text-sm">
            <h1 className="font-bold pr-2">Protein</h1>{" "}
            {formatNumber(nutrition?.nutrition.PROCNT.quantity, 0, servings[1] as number)}g
          </div>
          <div className="border-b-2 flex text-sm">
            Vitamin D {formatNumber(nutrition?.nutrition.VITD.quantity, 1, servings[1] as number)}mcg
            <p className="ml-auto">
              {formatNumber(nutrition?.daily.VITD.quantity, 0, servings[1] as number)}%
            </p>
          </div>
          <div className="border-b-2 flex text-sm">
            Calcium {formatNumber(nutrition?.nutrition.CA.quantity, 0, servings[1] as number)}mg
            <p className="ml-auto">
              {formatNumber(nutrition?.daily.CA.quantity, 0, servings[1] as number)}%
            </p>
          </div>
          <div className="border-b-2 flex text-sm">
            Iron {formatNumber(nutrition?.nutrition.FE.quantity, 0, servings[1] as number)}mg
            <p className="ml-auto">
              {formatNumber(nutrition?.daily.FE.quantity, 0, servings[1] as number)}%
            </p>
          </div>
          <div className="border-b-8 border-black flex text-sm">
            Potassium {formatNumber(nutrition?.nutrition.K.quantity, 0, servings[1] as number)}mg
            <p className="ml-auto">
              {formatNumber(nutrition?.daily.K.quantity, 0, servings[1] as number)}%
            </p>
          </div>
        </div>
      </div>
    )
  );
};
