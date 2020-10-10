const colors = require('colors');
const axios = require('axios')

axios
  .post('http://localhost:8080/graphql', {
    "query": "mutation {  createAuthor(firstName: \"Migue\", lastName: \"Doe\") {    id, version  }}",
    "variables":null
    }
   )
  .then(res => {
    console.log('POST'.blue + ' | ' + JSON.stringify(res.data.data))
  })
  .catch(error => {
    console.error(error)
  })
