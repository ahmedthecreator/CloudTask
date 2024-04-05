import { useEffect } from "react";
import { generateToken } from "./Notifications/Notif";
import { onMessage } from "firebase/messaging";
import { messaging } from "./Notifications/Notif";
function App() {
  useEffect(() => {
    generateToken();
    onMessage(messaging, (payload) => {
      console.log(payload);
    });
  }, []);
  return (
    <>
      <h1>Hello</h1>
    </>
  );
}

export default App;
