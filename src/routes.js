import FilmsList from './components/films/list'
import FilmDetails from './components/films/Details'

export const MOVIE_DETAILS_ROUTE = 'movie'

const routes = [
  { path: '/', component: FilmsList },
  { path: `/${MOVIE_DETAILS_ROUTE}/:id`, component: FilmDetails }
]

export default routes
