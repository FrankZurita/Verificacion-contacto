// Importar los SDK de Firebase desde CDN (modular)
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } 
  from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// Tu configuración (la que ya tienes)
const firebaseConfig = {
  apiKey: "APIKEY",
  authDomain: "verificacion-contacto.firebaseapp.com",
  projectId: "verificacion-contacto",
  storageBucket: "verificacion-contacto.appspot.com",
  messagingSenderId: "350048655255",
  appId: "1:350048655255:web:4532276db2c9ea617cd6d2",
  measurementId: "G-CY79DH3S1Q"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Función para registrar usuario y enviar correo de verificación
async function verificarCorreo() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    // Crear usuario
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    // Enviar correo de verificación
    await sendEmailVerification(userCredential.user);
    alert("Correo de verificación enviado a " + email);
  } catch (error) {
    alert("Error: " + error.message);
  }
}

// Escuchar clic del botón

document.getElementById("verifyBtn").addEventListener("click", verificarCorreo);
