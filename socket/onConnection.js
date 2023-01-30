import gameHandlers from "./gameHandlers.js"
import userHandlers from "./userHandlers.js"

export default function onConnection(io, socket) {
  userHandlers(socket)

  gameHandlers(io, socket)
}