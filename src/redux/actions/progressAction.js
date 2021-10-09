

export const fetchProgress = (data) => {
    return {
        type: 'FETCH_DATA',
        payload: data
    }
}


export const incrementProgress = (data) => {
    return {
        type: 'INCREMENT_PROGRESS',
        payload: data
    }
}