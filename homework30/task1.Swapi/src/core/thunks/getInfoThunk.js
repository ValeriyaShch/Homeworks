export function logApiInfo(response) {
    return (dispatch) => {
         console.log(response ? response : 'Api was called')
    }
}