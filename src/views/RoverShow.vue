<template>
    <div>
        <div>
            <div id="homePhotos" class="grid grid-cols-1 justify-items-center bg-transparent md:grid-cols-2">
                <router-link 
                        class="bg-transparent"
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

<style scooped>
    .image {
        width: 500px;
        height: 300px;
        border-radius: 20px;
        border: 1px solid #999;
	    background-color: #F9D949;
	    padding: 4px; 
    }

    .font-work {
        color: #F9D949;
        font-weight: 400;
        font-size: 3em;
    }

    .container[data-v-7a7a37b1] {
        background-color: transparent;
}
</style>

