module.exports = class Lobby {
  constructor () {
    this.sockets = []
  }

  /**
   * Joins a player socket to the lobby
   * returns true if game is full
   * @param {*} socket 
   */
  join (socket) {
    this.sockets.push(socket)
    if (this.sockets.length === 7) {
      return true
    }
  }
}
