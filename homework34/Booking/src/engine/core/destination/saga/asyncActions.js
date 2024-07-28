import {createAction} from '@reduxjs/toolkit';

const destinationAsyncAction = Object.freeze({
  getDestinationsAsync: createAction('GET_DESTINATIONS_ASYNC')
})

export default destinationAsyncAction;
