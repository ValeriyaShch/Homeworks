import {useDispatch, useSelector} from "react-redux";
import {requestApiInfo} from "../../core/thunks/getInfoThunk.js";
import selectors from "../../core/selectors.js";

function Apiform() {
    const isLoading = useSelector(selectors.isLoading)
    const dispatch = useDispatch()
    const getApiInfo = (formData) => {
        dispatch(requestApiInfo(formData))
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