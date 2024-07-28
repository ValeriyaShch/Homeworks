import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import destinationAsyncAction from "../../../../engine/core/destination/saga/asyncActions.js";
import selectorDestination from "../../../../engine/core/destination/selectors.js";
import selectorHotels from "../../../../engine/core/hotels/selectors.js";
import hotelsAsyncAction from "../../../../engine/core/hotels/saga/asyncActions.js";


export function useDestination() {
  const dispatch = useDispatch();
  const items = useSelector(selectorDestination.items);
  const loadingDestination = useSelector(selectorDestination.loading);
  const loadingHotels = useSelector(selectorHotels.loading);
  const loading = loadingDestination || loadingHotels;

  useEffect(() => {
    dispatch(destinationAsyncAction.getDestinationsAsync())
  }, [dispatch]);

  const handleSubmit = (values) => {
    const payload = {
      adult: values.adult,
      children: values.children,
      destination: values.destination,
      check_in: new Date(values.check_in).toString(),
      check_out: values.check_out ? new Date(values.check_out).toString() : undefined
    }
    dispatch(hotelsAsyncAction.getHotelsAsync(payload))
  }

  return {
    items,
    loading,
    handleSubmit
  }
}


