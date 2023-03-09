export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

// export function addFav(personaje) {
//   return {
//     type: ADD_FAV,
//     payload: personaje,
//   };
// }

// export function removeFav(id) {
//   return {
//     type: REMOVE_FAV,
//     payload: id,
//   };
// }

export function addFav(personaje) {
  return async function (dispatch) {
    try {
      await fetch("http://localhost:3001/fav", {
        method: "POST",
        body: JSON.stringify(personaje),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) =>
          dispatch({
            type: ADD_FAV,
            payload: data,
          })
        );
    } catch (error) {
      console.log(error);
    }
  };
}

export function removeFav(id) {
  return async function (dispatch) {
    try {
      await fetch(`http://localhost:3001/fav/${id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) dispatch({ type: REMOVE_FAV, payload: id });
        });
    } catch (error) {
      console.log(error);
    }
  };
}

export function filterCards(status) {
  return {
    type: FILTER,
    payload: status,
  };
}

export function orderCards(id) {
  return {
    type: ORDER,
    payload: id,
  };
}
