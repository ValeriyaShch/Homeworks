export function logger(store) {
    return (dispatch) => {
        return (action) => {
            const res = dispatch(action)
            return res;
        }
    }
}