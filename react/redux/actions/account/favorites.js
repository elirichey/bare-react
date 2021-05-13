export const FETCH_FAVORITES_INDEX = "FETCH_FAVORITES_INDEX";
export const LOAD_FAVORITES_INDEX = "LOAD_FAVORITES_INDEX";
export const FAIL_FAVORITES_INDEX = "FAIL_FAVORITES_INDEX";

export function fetchFavoritesIndex() {
  return {
    type: FETCH_FAVORITES_INDEX
  };
}

export function loadFavoritesIndex(data) {
  return {
    type: LOAD_FAVORITES_INDEX,
    data: data
  };
}

export function failFavoritesIndex(data) {
  return {
    type: FAIL_FAVORITES_INDEX,
    data: data
  };
}

// TODO - REMOVE
export const FETCH_FAVORITES = "FETCH_FAVORITES";
export const LOAD_FAVORITES = "LOAD_FAVORITES";
export const FAIL_FAVORITES = "FAIL_FAVORITES";

export function fetchFavorites(token) {
  return {
    type: FETCH_FAVORITES_INDEX,
    token: token
  };
}

export function loadFavorites(data) {
  return {
    type: LOAD_FAVORITES_INDEX,
    data: data
  };
}

export function failFavorites(data) {
  return {
    type: FAIL_FAVORITES_INDEX,
    data: data
  };
}
