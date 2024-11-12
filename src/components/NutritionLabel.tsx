import { formatNumber } from "@/app/functions/formatNumber";
import "../app/styles/nutritionLabel.css";
import { useGetServing } from "@/hooks/useGetServing";
import { Loader } from "./Loader";

export const NutritionLabel = (nutrition: any, daily: any) => {
  const serving = useGetServing(nutrition);
  const servingsNum = serving.ENERC_KCAL
    ? (formatNumber(
        nutrition?.nutrition.ENERC_KCAL.quantity,
        0
      ) as unknown as number) /
      (formatNumber(serving.ENERC_KCAL.quantity, 0) as unknown as number)
    : 1;
  console.log("serving", serving.ENERC_KCAL);
  console.log(
    "num",
    (formatNumber(nutrition?.daily.FAT.quantity, 0) as unknown as number) /
      servingsNum
  );
  // console.log("s", servings);
  //serving.ENERC_KCAL ?
  return (
    <div className="label">
      <div>
        <div className="pt-2">
          <div className="header">
            <div className="flex text-xl">
              <h1 className="font-bold pr-2">Calories</h1>
            </div>
          </div>
          <div className="flex border-b-2">
            <p className="ml-auto text-sm font-bold">% Daily Value</p>
          </div>
          <div className="flex border-b-2 text-sm">
            <h1 className="font-bold pr-2">Total Fat</h1>
          </div>
          <div className="flex border-b-2 pl-5 text-sm">Saturated Fat</div>
          <div className="border-b-2 pl-5 text-sm">
            {/* Trans Fat {formatNumber(serving.FATRN.quantity, 0)}g */}
          </div>
          <div className="flex border-b-2 text-sm">
            <h1 className="font-bold pr-2">Cholesterol</h1>{" "}
          </div>
          <div className="flex border-b-2 text-sm">
            <h1 className="font-bold pr-2">Sodium</h1>
          </div>
          <div className="flex border-b-2 text-sm">
            <h1 className="font-bold pr-2">Total Carbohydrate</h1>
          </div>
          <div className="border-b-2 pl-5 flex text-sm">Dietary Fiber</div>
          <div className="border-b-2 pl-5 text-sm">Total Sugars</div>
          <div className="flex border-b-8 border-black text-sm">
            <h1 className="font-bold pr-2">Protein</h1>
          </div>
          <div className="border-b-2 flex text-sm">Vitamin D</div>
          <div className="border-b-2 flex text-sm">Calcium</div>
          <div className="border-b-2 flex text-sm">Iron</div>
          <div className="border-b-8 border-black flex text-sm">Potassium</div>
        </div>
      </div>
      <div>
        <a>*per serving</a>
        <div>
          <div className="header">
            <div className="flex text-xl">
              {serving.ENERC_KCAL ? (
                <p className="ml-auto font-bold text-2xl">
                  {formatNumber(serving.ENERC_KCAL.quantity, 0)}
                </p>
              ) : (
                <div className="calorie-skeleton"></div>
              )}
            </div>
          </div>

          <div className="flex border-b-2"></div>

          <div className="flex border-b-2 text-sm">
            {serving.ENERC_KCAL ? (
              <>{formatNumber(serving.FAT.quantity, 0)}g</>
            ) : (
              <div className="measure-skeleton"></div>
            )}
            <p className="ml-auto font-bold">
              {serving.ENERC_KCAL ? (
                <>
                  {formatNumber(nutrition?.daily.FAT.quantity / servingsNum, 0)}
                  %
                </>
              ) : (
                <div className="percent-skeleton"></div>
              )}
            </p>
          </div>

          <div className="flex border-b-2 text-sm">
            {serving.ENERC_KCAL ? (
              <>{formatNumber(serving.FASAT.quantity, 0)}g</>
            ) : (
              <div className="measure-skeleton"></div>
            )}
            <p className="ml-auto font-bold">
              {serving.ENERC_KCAL ? (
                <>
                  {formatNumber(
                    nutrition?.daily.FASAT.quantity / servingsNum,
                    0
                  )}
                  %
                </>
              ) : (
                <div className="percent-skeleton"></div>
              )}
            </p>
          </div>

          <div className="flex border-b-2 text-sm">
            {serving.ENERC_KCAL ? (
              <>{formatNumber(serving.CHOLE.quantity, 0)}mg</>
            ) : (
              <div className="measure-skeleton"></div>
            )}
            <p className="ml-auto font-bold">
              {serving.ENERC_KCAL ? (
                <>
                  {formatNumber(
                    nutrition?.daily.CHOLE.quantity / servingsNum,
                    0
                  )}
                  %
                </>
              ) : (
                <div className="percent-skeleton"></div>
              )}
            </p>
          </div>

          <div className="flex border-b-2 text-sm">
            {serving.ENERC_KCAL ? (
              <>{formatNumber(serving.NA.quantity, 0)}mg</>
            ) : (
              <div className="measure-skeleton"></div>
            )}
            <p className="ml-auto font-bold">
              {serving.ENERC_KCAL ? (
                <>
                  {formatNumber(nutrition?.daily.NA.quantity / servingsNum, 0)}%
                </>
              ) : (
                <div className="percent-skeleton"></div>
              )}
            </p>
          </div>

          <div className="flex border-b-2 text-sm">
            {serving.ENERC_KCAL ? (
              <>{formatNumber(serving.CHOCDF.quantity, 0)}g</>
            ) : (
              <div className="measure-skeleton"></div>
            )}
            <p className="ml-auto font-bold">
              {serving.ENERC_KCAL ? (
                <>
                  {formatNumber(
                    nutrition?.daily.CHOCDF.quantity / servingsNum,
                    0
                  )}
                  %
                </>
              ) : (
                <div className="percent-skeleton"></div>
              )}
            </p>
          </div>

          <div className="border-b-2 flex text-sm">
            {serving.ENERC_KCAL ? (
              <>{formatNumber(serving.FIBTG.quantity, 0)}g</>
            ) : (
              <div className="measure-skeleton"></div>
            )}
            <p className="pl-20 font-bold pr-5">
              {serving.ENERC_KCAL ? (
                <>
                  {formatNumber(
                    nutrition?.daily.FIBTG.quantity / servingsNum,
                    0
                  )}
                  %
                </>
              ) : (
                <div className="percent-skeleton"></div>
              )}
            </p>
          </div>

          {serving.ENERC_KCAL ? (
            <div>{formatNumber(serving.SUGAR.quantity, 0)}g</div>
          ) : (
            <div className="measure-skeleton"></div>
          )}
          <div className="border-b-2 text-sm"></div>

          <div className="flex border-b-8 border-black text-sm">
            {serving.ENERC_KCAL ? (
              <>{formatNumber(serving.PROCNT.quantity, 0)}g</>
            ) : (
              <div className="measure-skeleton"></div>
            )}
          </div>

          <div className="border-b-2 flex text-sm">
            {serving.ENERC_KCAL ? (
              <>{formatNumber(serving.VITD.quantity, 1)}mcg</>
            ) : (
              <div className="measure-skeleton"></div>
            )}
            <p className="ml-auto">
              {serving.ENERC_KCAL ? (
                <>
                  {formatNumber(
                    nutrition?.daily.VITD.quantity / servingsNum,
                    0
                  )}
                  %
                </>
              ) : (
                <div className="percent-skeleton"></div>
              )}
            </p>
          </div>

          <div className="border-b-2 flex text-sm">
            {serving.ENERC_KCAL ? (
              <>{formatNumber(serving.CA.quantity, 0)}mg</>
            ) : (
              <div className="measure-skeleton"></div>
            )}
            <p className="ml-auto">
              {serving.ENERC_KCAL ? (
                <>
                  {formatNumber(nutrition?.daily.CA.quantity / servingsNum, 0)}%
                </>
              ) : (
                <div className="percent-skeleton"></div>
              )}
            </p>
          </div>

          <div className="border-b-2 flex text-sm">
            {serving.ENERC_KCAL ? (
              <>{formatNumber(serving.FE.quantity, 0)}mg</>
            ) : (
              <div className="measure-skeleton"></div>
            )}
            <p className="ml-auto">
             {serving.ENERC_KCAL ? <>
                {formatNumber(nutrition?.daily.FE.quantity / servingsNum, 0)}%
              </>: <div className = "percent-skeleton"></div>}
            </p>
          </div>

          <div className="border-b-8 border-black flex text-sm">
            {serving.ENERC_KCAL ? (
              <>{formatNumber(serving.K.quantity, 0)}mg</>
            ) : (
              <div className="measure-skeleton"></div>
            )}
            <p className="ml-auto">
              {serving.ENERC_KCAL ? (
                <>
                  {formatNumber(nutrition?.daily.K.quantity / servingsNum, 0)}%
                </>
              ) : (
                <div className="percent-skeleton"></div>
              )}
            </p>
          </div>
        </div>
      </div>
      <div>
        <a>*per recipe</a>
        <div>
          <div className="header">
            <div className="flex text-xl">
              <p className="ml-auto font-bold text-2xl">
                {formatNumber(nutrition?.nutrition.ENERC_KCAL.quantity, 0)}
              </p>
            </div>
          </div>
          <div className="flex border-b-2"></div>
          <div className="flex border-b-2 text-sm">
            {formatNumber(nutrition?.nutrition.FAT.quantity, 0)}g
            <p className="ml-auto font-bold">
              {formatNumber(nutrition?.daily.FAT.quantity, 0)}%
            </p>
          </div>
          <div className="flex border-b-2 text-sm">
            {formatNumber(nutrition?.nutrition.FASAT.quantity, 0)}g
            <p className="ml-auto font-bold">
              {formatNumber(nutrition?.daily.FASAT.quantity, 0)}%
            </p>
          </div>
          <div className="border-b-2 text-sm">
            {/* Trans Fat {formatNumber(serving.FATRN.quantity, 0)}g */}
          </div>
          <div className="flex border-b-2 text-sm">
            {formatNumber(nutrition?.nutrition.CHOLE.quantity, 0)}mg
            <p className="ml-auto font-bold">
              {formatNumber(nutrition?.daily.CHOLE.quantity, 0)}%
            </p>
          </div>
          <div className="flex border-b-2 text-sm">
            {formatNumber(nutrition?.nutrition.NA.quantity, 0)}mg
            <p className="ml-auto font-bold">
              {formatNumber(nutrition?.daily.NA.quantity, 0)}%
            </p>
          </div>
          <div className="flex border-b-2 text-sm">
            {formatNumber(nutrition?.nutrition.CHOCDF.quantity, 0)}g
            <p className="ml-auto font-bold">
              {formatNumber(nutrition?.daily.CHOCDF.quantity, 0)}%
            </p>
          </div>
          <div className="border-b-2 flex text-sm">
            {formatNumber(nutrition?.nutrition.FIBTG.quantity, 0)}g
            <p className="pl-20 font-bold">
              {formatNumber(nutrition?.daily.FIBTG.quantity, 0)}%
            </p>
          </div>
          <div className="border-b-2 text-sm">
            {formatNumber(nutrition?.nutrition.SUGAR.quantity, 0)}g
          </div>
          <div className="flex border-b-8 border-black text-sm">
            {formatNumber(nutrition?.nutrition.PROCNT.quantity, 0)}g
          </div>
          <div className="border-b-2 flex text-sm">
            {formatNumber(nutrition?.nutrition.VITD.quantity, 1)}mcg
            <p className="ml-auto">
              {formatNumber(nutrition?.daily.VITD.quantity, 0)}%
            </p>
          </div>
          <div className="border-b-2 flex text-sm">
            {formatNumber(nutrition?.nutrition.CA.quantity, 0)}mg
            <p className="ml-auto">
              {formatNumber(nutrition?.daily.CA.quantity, 0)}%
            </p>
          </div>
          <div className="border-b-2 flex text-sm">
            {formatNumber(nutrition?.nutrition.FE.quantity, 0)}mg
            <p className="ml-auto">
              {formatNumber(nutrition?.daily.FE.quantity, 0)}%
            </p>
          </div>
          <div className="border-b-8 border-black flex text-sm">
            {formatNumber(nutrition?.nutrition.K.quantity, 0)}mg
            <p className="ml-auto">
              {formatNumber(nutrition?.daily.K.quantity, 0)}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
