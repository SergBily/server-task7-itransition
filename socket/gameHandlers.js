export default function gameHandlers(io, socket) {
  socket.on('step:send', (a, r) => {
    io.to(r).emit('step:rival', a)
  })

  socket.on('game:play', (m) => {
    socket.join(m);
    socket.to(m).emit('game:invitation', socket.userName)
  })
}