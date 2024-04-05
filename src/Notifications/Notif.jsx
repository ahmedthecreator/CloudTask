// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBAl8mquQYHS4hVvWAS6HNR0W2_yBbJKl0",
  authDomain: "pushnotifications-f292f.firebaseapp.com",
  projectId: "pushnotifications-f292f",
  storageBucket: "pushnotifications-f292f.appspot.com",
  messagingSenderId: "961464856777",
  appId: "1:961464856777:web:7481df758bfd24bec55d18",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const messaging = getMessaging(app);

export async function generateToken() {
  const permission = await Notification.requestPermission();
  console.log(permission);
  if (permission === "granted") {
    const token = await getToken(messaging, {
      vapidKey:
        "BGtIyz9OycU5wHTWaXI4XoQUJMz5zcJLhCFT29v30dHjBiJyN_P8vr4wRtzor9kg_iuy_SLVHTN8NR0I4lTRYsQ",
    });
    console.log(token);
  }
}
