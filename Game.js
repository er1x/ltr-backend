const uuidV1 = require('uuid/v1')

module.exports = class Game {
  constructor (sockets, io) {
    this.id = uuidV1()
    this.sockets = sockets
    this.io = io
    this.sockets.forEach(s => s.join(this.id))
    console.log(`game ${this.id} starts now`)
    io.to(this.id)
      .emit('start')
  }
}
