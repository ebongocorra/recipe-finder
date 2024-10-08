import { useState, useEffect } from "react";

export const useGetRecipes = (query: string) => {
    const APP_ID = `b8ec3508`
    const APP_KEY = `0f63c9521a202a0aad42d6278db4d6c9`
    const [recipes, setRecipes] = useState()

    const fetchData = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        const data = await response.json()
        setRecipes(data)
    }

    useEffect(() => {
        fetchData()
    }, [query])

    return recipes
}