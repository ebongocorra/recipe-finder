import { useEffect, useState } from "react";

export const useGetServing = (nutrition: any) => {
  const [data, setData] = useState<any>({});
  console.log("nutrition", nutrition.nutrition);

  const responseGenerate = async () => {
    try {
      const completion = {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `The following data represents the nutritonal information for a full recipe: ${JSON.stringify(
              nutrition.nutrition
            )}. Using this, can you estimate a serving size and generate a similar set of data?`,
          },
        ]
      };
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: "Bearer " + process.env.NEXT_PUBLIC_OPEN_API_KEY,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(completion),
        }
      );
      const data = await response.json();
      console.log("data1", data);
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    responseGenerate();
  }, [data]);
};
