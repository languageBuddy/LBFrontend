

const fetchAudio = (audioFile) => {
    return {
        type: 'FETCH_AUDIO',
        payload: audioFile,
    }
}


export default {
    fetchAudio
}