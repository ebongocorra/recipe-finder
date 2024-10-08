export const Ingredients = (list: any) => {
    console.log("Recipe", list)
    return(
        <div>
            {list.list.map((line: any, key: any) => (
                <ul key={key}>
                    {line}
                </ul>
            ))}
        </div>
    )
}