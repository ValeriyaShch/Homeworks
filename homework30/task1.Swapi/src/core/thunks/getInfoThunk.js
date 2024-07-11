import swapiSlice from "../slice/swapiSlice.js";


export const requestApiInfo = (formData) => async (dispatch, state) => {
    formData.preventDefault();

    dispatch(swapiSlice.actions.requestedInfo())

    const requestingApiRoute = formData.target.apiRoute.value;
    const params = requestingApiRoute.toString().split('/')

    const swapiResponse = await fetch('https://swapi.dev/api/' + requestingApiRoute);
    const data = await swapiResponse.json();

    dispatch(swapiSlice.actions.setParams(params))
    dispatch(swapiSlice.actions.setInfo(data))

    dispatch(swapiSlice.actions.respondedInfo())
}