import { useEffect, useState } from "react"
import getGifsFetch from "../helpers/getGifsFetch";

export const useFetchGifs = ( category ) => {
  const [state, setState] = useState({
    data: [],
    loading: true
  });

  useEffect( () => {
    getGifsFetch( category )
      .then( imgs => setState({
        data: imgs,
        loading: false
      }));
  }, [ category ]);

  return state; // { data: [], loading: true };
}