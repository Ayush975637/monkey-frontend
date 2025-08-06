import { io } from "socket.io-client";

// ✅ Always create a new socket connection
export const connectSocket = () => {
  return io("http://localhost:5000", {
    withCredentials: true,
    transports: ["websocket"],
  });
};

export default connectSocket;
