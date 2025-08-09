import { io } from "socket.io-client";

// ✅ Always create a new socket connection
export const connectSocket = () => {
  return io("https://monkey-backend-0czy.onrender.com", {
    withCredentials: true,
    transports: ["websocket"],
  });
};

export default connectSocket;
