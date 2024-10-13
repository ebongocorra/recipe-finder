export const formatNumber = (num: number, round: number, servings = 1) => {
    return (num as unknown as number / servings).toFixed(round)
}