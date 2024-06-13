const pixabayApi = searchrequest =>
  fetch(
    `https://pixabay.com/api/?key=44369714-aeb99d27cdb76d6e65f8cf0da&q=${searchrequest}&image_type=photo`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });

export default pixabayApi;
