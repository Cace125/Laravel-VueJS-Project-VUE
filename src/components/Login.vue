<template>
  <div>
    <!-- <form @submit.prevent="login">
      <label for="email">Email:</label>
      <input type="email" v-model="email" required>
      <label for="password">Password:</label>
      <input type="password" v-model="password" required>
      <button type="submit">Log in</button>
    </form> -->

    <input type="email" v-model="email" placeholder="Email">
    <input type="password" v-model="password" placeholder="Password">
    <button @click="login">Log In</button>
  </div>
</template>

<script>
// import axios from 'axios';

// export default {
//   data() {
//     return {
//       email: '',
//       password: '',
//     };
//   },
//   methods: {
//     submit() {
//       axios.post("http://localhost:8000/login", {
//         email: this.email,
//         password: this.password,
//       })
//       .then(response => {
//         localStorage.setItem('token', response.data.token);
//         axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token;
//         this.$router.push('/to-dos');
//         console.log(response);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//     },
//   },
// };

import axios from 'axios';

export default {
  // data() {
  //   return {
  //     email: '',
  //     password: ''
  //   };
  // },
  // methods: {
  //   login() {
  //   //   axios.post('http://localhost:8000/login', {
  //   //     email: this.email,
  //   //     password: this.password
  //   //   })
  //   //   .then(response => {
  //   //     localStorage.setItem('session', response.data.session);
  //   //     localStorage.setItem('user', JSON.stringify(response.data.user));
  //   //     this.$router.push('/form');
  //   //     console.log(user);
  //   //     // redirigir a la página principal o a la página que se estaba intentando acceder
  //   //   })
  //   //   .catch(error => {
  //   //     console.log(error.response.data.message);
  //   //   });

  //   axios.post('http://localhost:8000/login', {
  //       email: this.email,
  //       password: this.password
  //   })
  //   .then(response => {
  //       if (response.data) {
  //       let data = JSON.parse(response.data);
  //       console.log(data);
  //       } else {
  //       console.log('Undefined');
  //       }
  //   })
  //   .catch(error => {
  //       console.log(error);
  //   });

  //   }

    data() {
      return {
        email: '',
        password: '',
      }
    },
    methods: {
      async login() {
        try {
          const response = await axios.post('http://localhost:8000/login', {
            email: this.email,
            password: this.password,
          })
          const userId = response.data
          console.log('User ID:', userId)
          this.$router.push('/form');
          // Hacer algo con el user id, como redirigir a otra página
        } catch (error) {
          console.error(error)
        }
      },
    },
}
</script>