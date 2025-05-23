const baseURL = 'https://api.themoviedb.org/3'

const urls = {
    auth: {
        guest: baseURL + '/authentication/guest_session/new'
    },

    movies: {
        base: baseURL + '/discover/movie',
        search: baseURL + '/search/movie',
        ratedList: baseURL + '/account/11025706/rated/movies'
    },

    movie: {
        base: (id: string) => baseURL + '/movie/' + id,
        details: (id: string) => baseURL + '/movie/' + id + '?append_to_response=videos',
        rating: (id: string) => urls.movie.base(id) + '/rating',
        states: (id: string) => urls.movie.base(id) + '/account_states'
    },

    genres: {
        base: baseURL + '/genre/movie/list'
    }
}

export {baseURL, urls}