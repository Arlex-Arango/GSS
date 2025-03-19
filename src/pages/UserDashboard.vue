<template>
  <q-layout view="hHh lpR fFf">
    <!-- Barra superior (Header) -->
    <q-header elevated class="header-elegante">
  <q-toolbar class="header-toolbar">
    <q-btn dense flat round icon="menu" @click="drawer = !drawer" class="menu-btn" />
    <q-toolbar-title class="logo-container">
      <img src="src/assets/logo.png" alt="Logo" class="logo" />
    </q-toolbar-title>
  </q-toolbar>
</q-header>

<q-page class="page-container">
  <div class="top-container">
    <div class="user-card">
      <p class="welcome-text">¡Bienvenid@!</p>
      <p class="user-name">{{ userName }}</p>
    </div>
  </div>

  <div class="content">
    <!-- Aquí va el resto del contenido de tu dashboard -->
  </div>
</q-page>

    <!-- Menú lateral -->
    <q-drawer v-model="drawer" side="left" overlay class="menu-lateral">
      <q-list>

        <q-item-label header class="user-container">
          <div class="text-h6 user-name">{{ userName }}</div>
          <div class="text-caption user-date">{{ currentDate }}</div>
          <q-btn flat dense color="white" icon="logout" label="Salir" @click="logout" class="logout-btn" />
        </q-item-label>

        <q-expansion-item icon="info" label="Formularios">
          <q-item clickable v-ripple>
            <q-icon name="person" />
            <q-item-section>Actualizar Datos</q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-icon name="assignment" />
            <q-item-section>Reclamos</q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-icon name="badge" />
            <q-item-section>Actualizar ID</q-item-section>
          </q-item>
        </q-expansion-item>

        <q-expansion-item icon="payment" label="Mis Pagos">
          <q-item clickable v-ripple>
            <q-icon name="credit_card" />
            <q-item-section>Gestionar Pago</q-item-section>
          </q-item>
        </q-expansion-item>

        <q-expansion-item icon="cloud_download" label="Exportar Datos">
          <q-item clickable v-ripple>
            <q-icon name="description" />
            <q-item-section>Documentos</q-item-section>
          </q-item>
        </q-expansion-item>
      </q-list>
    </q-drawer>

    <!-- Contenido Principal -->
    <q-page-container>
      <q-page class="q-pa-md fondo-elegante">
        <q-card flat class="q-mb-md tarjeta-elegante">
          <q-card-section>
            <div class="text-h5">Accesos Rápidos</div>
            <div class="row q-gutter-md">
              <q-card class="col" bordered>
                <q-card-section>
                  <q-icon name="language" size="md" />
                  <div class="text-subtitle1">Solicitar Servicios</div>
                  <q-btn flat label="Ir a Contacto" color="primary" />
                </q-card-section>
              </q-card>
              <q-card class="col" bordered>
                <q-card-section>
                  <q-icon name="payment" size="md" />
                  <div class="text-subtitle1">Realizar Pago</div>
                  <q-btn flat label="Ir a Pago ágil" color="primary" />
                </q-card-section>
              </q-card>
              <q-card class="col" bordered>
                <q-card-section>
                  <q-icon name="home" size="md" />
                  <div class="text-subtitle1">Su Próximo Pago</div>
                  <div class="text-h6">$15,000</div>
                </q-card-section>
              </q-card>
            </div>
          </q-card-section>
        </q-card>

        <q-card flat class="tarjeta-elegante">
          <q-card-section>
            <div class="text-h6">LISTADO DE CONTRATOS</div>
            <q-list>
              <q-item>
                <q-icon name="description" />
                <q-item-section>Contrato: C-0477</q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const drawer = ref(false);
const userName = ref('Usuario Desconocido');
const currentDate = ref('');
const router = useRouter();

onMounted(() => {
  userName.value = localStorage.getItem('userName') || 'Invitado';

  const date = new Date();
  currentDate.value = date.toLocaleDateString('es-ES', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });
});

const logout = () => {
  localStorage.removeItem('userName');
  router.push('/login'); // Redirige a la página de login
};
</script>

<style>
.header-elegante {
  background-color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}

.header-toolbar {
  display: flex;
  align-items: center;
}

.menu-btn {
  color: black;
}

.logo-container {
  display: flex;
  justify-content: center;
  width: 100%;
}

.logo {
  height: 40px;
}


/* Menú lateral */
.menu-lateral {
  width: 260px;
  background: linear-gradient(135deg, #ffffff, #bd383868);
  background-image: 'src/assets/logo.png';
  color: rgb(0, 0, 0);
  border-right: 3px solid #000000;
  transition: transform 0.3s ease-in-out;
}

/* Contenedor del usuario con fondo azul transparente */
.user-container {
  background: rgba(0, 0, 0, 0.769);
  padding: 12px;
  border-radius: 8px;
  text-align: center;
  margin: 10px;
}

/* Texto en color blanco */
.user-name, .user-date {
  color: white;
}

/* Botón de salir */
.logout-btn {
  margin-top: 10px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  transition: background 0.3s ease;
}

.logout-btn:hover {
  background: rgba(255, 255, 255, 0.445);
}

/* Fondo elegante con diseño */
.fondo-elegante {
  background-color: white;
  min-height: 100vh;
  padding: 20px;
  background-image: url('/path-to-your-design.png');
  background-size: cover;
  background-position: center;
}

/* Tarjetas con sombra y transición */
.tarjeta-elegante {
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
}

.tarjeta-elegante:hover {
  transform: scale(1.02);
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);
}

.page-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Alinea el contenido a la izquierda */
  padding: 20px;
}

.top-container {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding-left: 20px;
}

.user-card {
  background: rgba(0, 56, 168, 0.9); /* Azul con transparencia */
  color: white;
  padding: 50px 65px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  max-width: 320px;
}

.welcome-text {
  font-size: 14px;
  font-weight: bold;
}

.user-name {
  font-size: 16px;
  font-weight: bold;
}

</style>
