export const getUsers = (successCallback) => {
  fetch("https://randomuser.me/api/?page=1&results=50&nat=us")
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      // console.log(response);
      successCallback(response.results);
    })
    .catch((error) => {
      console.log(error);
    });
};
