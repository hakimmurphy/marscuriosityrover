<template>
    <div>
        <div v-for="cameras in data">
            <div v-for="camera in cameras">
                <div class="camera-name-color pb-3"> {{ camera.camera.full_name }}</div>
                <img class="image pb-7" :src="camera.img_src" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    import { ref, reactive, computed} from 'vue'
    
    export default {
        setup() {
            const data = ref({})
            return {
                data
            }
        },
        async created() {
            await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=2000&camera=mahli&page=1&api_key=${import.meta.env.VITE_KEY}`)
            .then(async (response) => {
                const data = await response.json()
                console.log('data', data)
                this.data = data
            })
            .catch((error) => {return error})
        }
    }
</script>

<style scoped>
    .image {
        border-radius: 20px;
        width: 500px;
        height: 300px;
        margin: 0 auto;
        border: 1px solid #999;
	    background-color: #F9D949;
	    padding: 4px;
    }
    .camera-name-color {
        color: #F9D949;
    }
</style>