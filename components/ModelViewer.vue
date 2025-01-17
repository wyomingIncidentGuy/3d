<script lang="ts" setup>
    import * as THREE from 'three'
    import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
    import WebGL from 'three/addons/capabilities/WebGL.js'

    const isWebGl = ref(false)

    const container = ref<HTMLDivElement | null>(null)

    const initScene = () => {
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
        const renderer = new THREE.WebGLRenderer()
        renderer.setSize(80, 80)

        if(container.value !== null){
            container.value.appendChild(renderer.domElement);
        }

        const light = new THREE.AmbientLight(0x404040);
        scene.add(light);

        camera.position.z = 5;

        const loader = new OBJLoader();
        loader.load(
            '/models/apparat.obj',
            (object) => {
                scene.add(object);
                object.position.set(0, 0, 0);
            }
        );

        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        }

        animate()
    }

    onMounted(() => {
        if ( WebGL.isWebGL2Available() ) {
            isWebGl.value = true
            initScene()
        }
    })
</script>

<template>
    <div class="model-viewer">
        <div v-if="isWebGl" ref="container" class="scene"></div>
        <!-- <img v-else src="images/1.jpg" alt="установка"> -->
    </div>
</template>

<style scoped lang="scss">
   .model-viewer {

        & > .scene{
            width: 80px;
            height: 80px;
            background-color: #f0f0f0;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        & > img{
            width: 45px;
            height: 45px;
        }
    }
</style>