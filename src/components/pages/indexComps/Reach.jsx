// React Imports
import React, { useRef, useEffect, createContext } from "react";

// Three.js Imports
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// import { GLTFLoader } from "three/examples/jsm/Addons.js";

const Reach = () => {
  // Refs
  const canvas = useRef();

  const CanvasRef = createContext();

  // Creating, Loading and Setting Three.js 
  useEffect(() => {
    // Creating a Scene
    const scene = new THREE.Scene();

    // Main Model Variables
    const aspectRatio = window.innerWidth / 1000;
    const maxPixelRatio = Math.min(window.devicePixelRatio, 2);

    const loadThree = () => {
      const geo = new THREE.SphereGeometry(1, 32, 32);
      const mat = new THREE.MeshBasicMaterial({ color: "blue" });
      const mesh = new THREE.Mesh(geo, mat);

      // Texture Loader
      const textureLoader = new THREE.TextureLoader();
      textureLoader.load("");

      scene.add(mesh);

      // Initializing a Light
      const light = new THREE.AmbientLight("white", 1);
      scene.add(light);

      // Intitializing a Camera
      const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.5, 2000);
      camera.position.set(0, 0, 5);

      // Initializing a renderer
      const renderer = new THREE.WebGLRenderer({
        canvas: canvas.current,
        antialias: true,
      });
      renderer.setSize(window.innerWidth, 1000);
      renderer.setPixelRatio(maxPixelRatio);

      // Initializing OrbitControls
      const controls = new OrbitControls(camera, canvas.current);
      controls.autoRotate = true;
      controls.enableZoom = false;

      // Resize Event Handler
      window.addEventListener("resize", () => {
        console.log("Screen resized.");
        camera.aspect = window.innerWidth / 1000;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, 1000);
      });

      // Creating a render loop
      const renderloop = () => {
        controls.update();
        renderer.render(scene, camera);
        window.requestAnimationFrame(renderloop);
      };

      renderloop();
    }

    loadThree();
  });

  // const gltfLoader = new GLTFLoader();

  // gltfLoader.load("../../../canvas/earth.gltf", (gltfScene) => {
  //   let loadModel = gltfScene;
  //   console.log(loadModel);
  //   scene.add(gltfScene);
  // });

  return (
    <>
      <CanvasRef.Provider value={{ canvas }}>
        <section id="reach">
          <canvas ref={canvas}></canvas>
        </section>
      </CanvasRef.Provider>
    </>
  );
};

export default Reach;
