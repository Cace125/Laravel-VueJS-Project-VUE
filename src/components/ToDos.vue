<template>

    <div class="w-96 border border-slate-600 rounded-md p-4 mx-auto mt-12 bg-gray-100">
        <div class="mt-4 w-90 mx-auto">

            <h1 class="text-center mb-8 text-xl border-b pb-2 border-black">Tasks Pending</h1>

            <div v-for="(todo, id) in todos" :key="id" class="flex w-80 mx-auto pl-8 mb-4">
                <div class="w-2/3">
                    <h4>{{ todo.title }}</h4>
                </div>
                <div class="w-1/3">
                    <button @click="axiosDelete(todo.id)" class="text-center border border-red-800 bg-red-400 w-16 rounded-sm hover:text-white">Delete</button>
                </div>
            </div>
        
        </div>  
    </div>

    

</template>

<script>
    import axios from 'axios';
    import { ref, computed } from "vue";
    import { DateTime } from "luxon";

    export default {
        data () {
            return {
                message: "Hola",
                todos: []
            }
        },

        mounted() {
            this.axiosInfo();
        },

        methods: {
            // test() {
            //     alert('test fuction called');
            // }, 

            axiosInfo () {
                let url = "http://localhost:8000/list-user";
                axios.get(url)
                .then(data => {
                    this.todos = data.data.todos;
                })
                .catch(err => console.log(err))
            },

            axiosDelete (id) {
                console.log(id);
                let url = "http://localhost:8000/list-api";
                axios.delete(url + '/' + id)
                .then(response => {
                        console.log(response);
                        this.axiosInfo();
                })
                .catch(err => {
                        console.log(err);
                })
            }
        }
    }
</script>
