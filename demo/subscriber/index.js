const colors = require('colors');
const Socket = require('simple-websocket')
 
const socket = new Socket('ws://localhost:8080/graphql')


socket.on('connect', () => {
  socket.send(
    JSON.stringify(
    {"query":"subscription NewAuthors { authorCreated { id version firstName lastName }}"}
    )
  )
})

socket.on('data', data => {
  console.log('READ'.yellow + ' | ' + data)
})
