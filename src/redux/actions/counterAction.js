
const increment = ({ QueryType, count }) => {
    return {
        type: QueryType,
        payload: count
    }
}

export {
    increment
}