<script lang="ts" setup>
    import * as THREE from 'three'
    import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
    import WebGL from 'three/addons/capabilities/WebGL.js'

    const isWebGl = ref(false)

    const container = ref<HTMLDivElement | null>(null)

    const initScene = () => {
        const scene = new THREE.Scene()
        scene.background = new THREE.Color(0xffffff);
        const camera = new THREE.PerspectiveCamera(60, 100 / 100, 0.1, 1000)
        const renderer = new THREE.WebGLRenderer()
        renderer.setSize(100, 100)

        if(container.value !== null){
            container.value.appendChild(renderer.domElement)
        }

        const light = new THREE.AmbientLight(0x404040)
        scene.add(light);

        const directionalLight = new THREE.DirectionalLight(0xB0E2FF, 1.5);
        directionalLight.position.set(1, 1, 1).normalize();
        scene.add(directionalLight);

        camera.position.set(40, 20, 2)
        camera.lookAt(0, 0, 0)

        const loader = new OBJLoader()
        loader.load(
            '/models/apparat.obj',
            (object) => {
                scene.add(object)
                object.scale.set(0.1, 0.1, 0.1);
                object.position.set(0, 0, 0)
            }
        );

        const animate = () => {
            requestAnimationFrame(animate)
            renderer.render(scene, camera)
        }

        animate()
    }

    onMounted(() => {
        if ( WebGL.isWebGL2Available() ) {
            isWebGl.value = true

            nextTick(() => {
                initScene()
            })
        }
    })
</script>

<template>
    <div class="model-viewer">
        <div v-if="isWebGl" ref="container" class="scene"></div>
        <img v-else src="/images/1.jpg" alt="установка">
    </div>
</template>

<style scoped lang="scss">
   .model-viewer {

        & > .scene{
            width: 100px;
            height: 100px;
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