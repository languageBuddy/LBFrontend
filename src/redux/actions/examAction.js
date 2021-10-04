

export const fetchQuestion = (questionsFile) => {
    return {
        type: 'FETCH_QUESTION',
        payload: questionsFile,
    }
}
