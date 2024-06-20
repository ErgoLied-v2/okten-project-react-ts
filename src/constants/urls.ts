const baseURL = 'https://api.themoviedb.org/3'

const urls = {
    movies: {
        base: '/discover/movie',
        search: '/search/movie'
    },

    movie: {
        base: (id: string) => '/movie/' + id,
        states: (id: string) => urls.movie.base(id) + '/account_states',
        rating: (id: string) => urls.movie.base(id) + '/rating'
    },

    genres: {
        base: '/genre/movie/list'
    }
}

export {baseURL, urls}