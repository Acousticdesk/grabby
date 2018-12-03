import config from '@/config'

const getUrl = (entity, movieId) => `${config.omdbAPI.endpoints[entity]}/?i=${movieId}&apikey=${config.omdbAPI.apiKey}`

const get = entity => movieId => fetch(getUrl(entity, movieId))

export const getInfo = get('info')
export const getPoster = get('poster')
