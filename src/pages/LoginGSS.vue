<template>
  <q-page class="flex flex-center login-page">
    <q-card class="login-card">
      <q-card-section class="text-center">
        <q-img src="~assets/logo.png" style="max-width: 120px; margin: auto;" />
        <div class="text-h5 text-primary">Iniciar Sesión</div>
      </q-card-section>

      <q-card-section>
        <q-input v-model="user" label="Usuario" filled dense class="custom-input" />
        <q-input v-model="password" label="Contraseña" filled dense type="password" class="custom-input" />
      </q-card-section>

      <q-card-actions class="justify-center">
        <q-btn label="Ingresar" color="primary" class="full-width custom-btn" @click="login" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const user = ref('');
const password = ref('');
const router = useRouter();

const login = () => {
  if (user.value === 'admin' && password.value === '1234') {
    localStorage.setItem('user', user.value);
    router.push('/dashboard');
  } else {
    alert('Credenciales incorrectas');
  }
};
</script>


<style scoped>
/* Fondo con degradado y colores de la web */
.login-page {
  background: linear-gradient(135deg, #001F3F 0%, #0056b3 100%);
  height: 100vh;
}

/* Tarjeta con efecto de sombra y bordes redondeados */
.login-card {
  width: 350px;
  padding: 20px;
  border-radius: 12px;
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* Estilo para los inputs */
.custom-input {
  margin-bottom: 12px;
  font-family: 'Helvetica', 'Roboto', 'Avenir', sans-serif;
}

/* Botón con esquinas redondeadas y efecto */
.custom-btn {
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  padding: 10px;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
}

/* Efecto hover en el botón */
.custom-btn:hover {
  background: #003366;
  color: white;
}
</style>
