export const fetchQuestion = (questionFile) => {
    return {
        type: 'FETCH_QUESTION',
        payload: questionFile,
    }
}
