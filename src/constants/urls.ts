const baseURL = 'https://api.themoviedb.org/3'

const urls = {
    auth: {
        guest: '/authentication/guest_session/new'
    },

    movies: {
        base: '/discover/movie',
        search: '/search/movie'
    },

    movie: {
        base: (id: string) => '/movie/' + id,
        rating: (id: string) => urls.movie.base(id) + '/rating',
        states: (id: string) => urls.movie.base(id) + '/account_states'
    },

    genres: {
        base: '/genre/movie/list'
    }
}

export {baseURL, urls}