# My Recipe Finder

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You will be directed to a blank search page. In the search bar, enter key words to a recipe you are looking for.

## List Page

When you enter a key word(s), you will be directed to the '/list/' page, which is a list of recipes containing the key word(s). For example, if you search 'beef', you will find recipes with the word beef.

## Recipe Page

Click on any recipe in the list and you will be directed to its '/recipe/' page. There you will find a photo of the recipe, a list of necessary ingredients, a ChatGPT generated list of instructions on how to make the recipe, and a label containing nutrition facts such as calorie, macronutrient, and micronutrient content.
