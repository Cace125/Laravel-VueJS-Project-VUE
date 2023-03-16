<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

  <nav class="pt-6 h-16 bg-gray-200">
        <div class="flex w-96 justify-evenly text-xl">
            <button @click="$router.push('/login')" class="text-slate-900 hover:text-slate-400">ToDo's</button>
            <div id="navbar">
                <ul class="flex w-48 justify-evenly text-lg">
                    <li>
                        <button @click="$router.push('/form')" class="text-slate-900 hover:text-slate-400">Form</button>
                    </li>
                    <li>
                        <button @click="$router.push('/to-dos')" class="text-slate-900 hover:text-slate-400">List</button>
                    </li>
                    <li>
                      <button @click="logout">Cerrar sesión</button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>


  <RouterView />
</template>

<script>
  // export default {
  //   name: 'Header',
  //   data () {
  //     return {
  //       authenticated: false // Variable que indica si el usuario está autenticado
  //     }
  //   },
  //   created () {
  //     const token = localStorage.getItem('token')
  //     if (token) {
  //       this.authenticated = true // Verifica si el usuario está autenticado al cargar el componente
  //     }
  //   },
  //   methods: {
  //     logout () {
  //       localStorage.removeItem('token') // Elimina el token de acceso del almacenamiento local del navegador
  //       this.authenticated = false // Cambia la variable que indica si el usuario está autenticado
  //       this.$router.push('/') // Redirige al usuario a la página de inicio de sesión
  //     }
  //   }
  // }

  import axios from 'axios';

  export default {
    data() {
      // return {
      //   user: JSON.parse(localStorage.getItem('user'))
      // };
    },
    methods: {
      logout() {
        axios.post('http://localhost:8000/logout', {}, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('session')}`
          }
        })
        .then(response => {
          localStorage.removeItem('session');
          localStorage.removeItem('user');
          this.$router.push('/login');
          // redirigir a la página de inicio de sesión o a la página que desees
        })
        .catch(error => {
          console.log(error.response.data.message);
        });
      }
    }
  }
</script>


