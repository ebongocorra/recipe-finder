import OpenAI from "openai";
import { useState, useEffect } from "react";

export const useGenerateInstructions = (name: string, ingredients: string[]) => {
    const [data, setData] = useState<string>(""); // Change to string for streamed content
    const [loading, setLoading] = useState(true);
  
    const responseGenerate = async () => {
      try {
        const completion = {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "user",
              content: `Write a list of cooking instructions based on a recipe for ${name} with the following ingredients ${ingredients.join(
                ", "
              )}. And can you make each step a new line?`,
            },
          ],
          stream: true, // Enable streaming
        };
  
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            Authorization: "Bearer " + process.env.NEXT_PUBLIC_OPEN_API_KEY,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(completion),
        });
  
        // Check if the response body is available
        if (!response.body) {
          throw new Error("Failed to fetch the stream");
        }
  
        // Handle streaming response
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let done = false;
        let accumulatedText = "";
       // console.log("decoder", decoder)
  
        while (!done) {
          const { done: readerDone, value } = await reader.read();
          done = readerDone;
         // console.log("Done", done, "chunk", decoder.decode(value, { stream: true }))
          const chunk = decoder.decode(value, { stream: true });
          // Process each chunk and filter out unwanted parts
          const parsedChunks = chunk
            .split("\n")
            .filter((line) => line.trim() !== "") // Remove empty lines
            .map((line) => line.replace(/^data: /, "")); // Remove "data: " prefix
  
          for (const parsedChunk of parsedChunks) {
          //  console.log("PC", parsedChunk)
            if (parsedChunk === "[DONE]") {
              done = true;
              break;
            }
  
            try {
              // Parse the chunk into JSON and extract content
              const json = JSON.parse(parsedChunk);
              const content = json.choices[0]?.delta?.content;
            //  console.log("Content", content)
              if (content) {
                // Append the content to the current data
                setData((prevData) => prevData + content);
              }
            } catch (error) {
              console.error("Error parsing chunk:", error);
            }
          }
        }
  
        setLoading(false);
      } catch (error) {
        console.error("Error during streaming", error);
      }
    };
  
    useEffect(() => {
      responseGenerate();
    }, [name]);
  
    //console.log("data", data);
    return { data, loading };
  };
