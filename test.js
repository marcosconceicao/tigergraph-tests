const axios = require('axios').default;

axios.get('http://localhost:14240/api/ping')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    console.log('Finally ping')
});

axios.get('http://localhost:9000/version')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    console.log('Finally version')
});
