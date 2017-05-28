const server = require('http').createServer()
const io = require('socket.io')(server)

const Lobby = require('./Lobby')
const Game = require('./Game')
let currentLobby = null


io.sockets.on('connection', socket => {
  console.log('player joined')
  dispatchToGame(socket)
})

console.log ('Server started.')
server.listen(3000)


function dispatchToGame (socket) {
  if (currentLobby) {
    if (currentLobby.join(socket)) {
      new Game(currentLobby.sockets, io)
      currentLobby = null
    }
  } else {
    currentLobby = new Lobby()
    currentLobby.join(socket)
  }
}
