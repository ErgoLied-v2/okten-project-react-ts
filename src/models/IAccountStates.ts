export interface IAccountStates {
    id: number | null;
    favorite: boolean;
    rated: {
        value: number;
    } | false;
    watchlist: boolean;
}