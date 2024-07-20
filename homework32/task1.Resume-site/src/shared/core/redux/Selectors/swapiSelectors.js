const swapiSelectors = Object.freeze({
  loader: state => state.swapi.loader,
  data: state => state.swapi.data,
  action: state => state.swapi.action,
})
export default swapiSelectors;

