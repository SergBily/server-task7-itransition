export default function userHandlers(socket) {
  socket.emit("session", {
    sessionID: socket.sessionID,
    userID: socket.userID,
  });

  // socket.on('disconnect', () => {
  //   console.log(socket.id, 'close');
  // })

  socket.on('player:online', () => {
    socket.broadcast.emit('player:online', socket.userName)
  })
}