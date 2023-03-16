<template>
    <div class="w-96 border border-slate-600 rounded-md p-4 mx-auto mt-12 bg-gray-100">
        
        <form @submit.prevent="axiosPost">
            <div class="mb-8 pl-6">
                <label for="title" class="text-lg">Task's name:</label>
                <input type="text" name="title" v-model="title"  class="border border-slate-400 ml-4 text-center rounded-sm border-dotted">
            </div>
            <button type="submit" class="h-8 w-16 rounded-md ml-36 border-2 border-blue-800 bg-blue-400 hover:text-white hover:bg-blue-900">Save</button>
        </form>
        
    </div>

</template>

<script>
    import axios from 'axios';
    import { ref, computed } from "vue";
    import { DateTime } from "luxon";

    export default {
        data() {
            return {
                title: ''
            };
        },
        methods: {

            axiosPost () {
                // console.log("Saving title")
                // let url = "http://localhost:8000/form-api";
                // axios.post(url)
                // .then(data => {
                //     console.log(data);
                // })
                // .catch(err => console.log(err))
                const task = { title: this.title };
                axios.post("http://localhost:8000/form-api", task)
                    .then(response => {
                        console.log(response);

                    })
                    .catch(err => console.log(err))
            }
        }
    }
</script>
