import {useDispatch, useSelector} from "react-redux";
import selector from "../../../../engine/core/hotels/selectors.js";
import {useEffect} from "react";
import {push} from "redux-first-history";
import {route} from "../../../../engine/config/route.jsx";

export function useHotels() {
  const dispatch = useDispatch();
  const items = useSelector(selector.items);
  const loading = useSelector(selector.loading);

  useEffect(() => {
    if (items.length === 0) {
      dispatch(push(route.main.path))
    }
  }, []);

  return {
    items,
    loading
  }
}


