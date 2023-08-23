<template>
    <div>
        <div>
            <div id="homePhotos" class="grid grid-cols-1 justify-items-center bg-transparent md:grid-cols-2">
                <router-link 
                        v-for="camera in cameras"
                        :key="camera.id"
                        :to="camera.name"
                    >
                        <h2 class="font-work">{{ camera.name }}</h2>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import sourceData from '../data.json'
export default {
     data() {
        return {
            cameras: sourceData.cameras
        }
     }
}
</script>

<style scoped>
    .font-work {
        color: #F9D949;
        font-weight: 400;
        font-size: 3em;
    }
</style>

