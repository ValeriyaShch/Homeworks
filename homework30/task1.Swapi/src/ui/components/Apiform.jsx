import {useDispatch, useSelector} from "react-redux";
import {logApiInfo} from "../../core/thunks/getInfoThunk.js";
import selectors from "../../core/selectors.js";
import swapiSlice from "../../core/slice/swapiSlice.js";

function Apiform() {
    const isLoading = useSelector(selectors.isLoading)
    const dispatch = useDispatch()
    const getApiInfo = async (formData) => {
        formData.preventDefault();

        dispatch(swapiSlice.actions.requestedInfo())

        const requestingApiRoute = formData.target.apiRoute.value;
        const params = requestingApiRoute.toString().split('/')
        console.log(params)

        const swapiResponse = await fetch('https://swapi.dev/api/'+requestingApiRoute);
        const data = await swapiResponse.json();

        dispatch(swapiSlice.actions.setParams(params))
        dispatch(swapiSlice.actions.setInfo(data))
        dispatch(logApiInfo(data))

        dispatch(swapiSlice.actions.respondedInfo())
    }
    return (
        <form action='#' className="mb-3 apiform input-group" onSubmit={getApiInfo}>
            <span className="input-group-addon p-2">http://swapi.dev/api/</span>
            <input className="form-control" type="text" name='apiRoute'  placeholder="ex.: people/1/"/>
            <button className=" button"  type='submit' >{isLoading ? 'Loading...' : 'Get info'}</button>
        </form>
    )
}

export default Apiform