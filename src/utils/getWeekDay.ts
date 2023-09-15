export const getWeekDay = (): number => {
    const getDateTime = new Date()
    const day = getDateTime.getDay()
    return day
}