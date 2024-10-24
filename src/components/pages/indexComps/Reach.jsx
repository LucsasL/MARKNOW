import React, { useRef } from "react";

import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

const Reach = () => {
  // Creating a Scene
  const scene = new THREE.Scene();

  // Main Model Variables
  const aspectRatio = window.innerWidth / window.innerHeight;
  const maxPixelRatio = Math.min(window.devicePixelRatio, 2);

  // Refs
  const canvas = useRef();

  const gltfLoader = new GLTFLoader();

  function loadThree() {
    const geo = new THREE.SphereGeometry(1, 32, 32);
    const mat = new THREE.MeshBasicMaterial({ color: "blue" });
    const mesh = new THREE.Mesh(geo, mat);

    scene.add(mesh);

    // Initializing a Light
    const light = new THREE.AmbientLight("white", 1);
    scene.add(light);

    // Intitializing a Camera
    const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.5, 2000);

    // Initializing a renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas.current,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(maxPixelRatio);

    // Initializing OrbitControls
    const controls = new OrbitControls(camera, canvas.current);
    controls.autoRotate = true;

    // Resize Event Handler
    window.addEventListener("resize", () => {
      console.log("Screen resized.");
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Creating a render loop
    const renderloop = () => {
      controls.update();
      renderer.render(scene, camera);
      window.requestAnimationFrame(renderloop);
    };

    renderloop();
  }

  // gltfLoader.load("../../../canvas/earth.gltf", (gltfScene) => {
  //   let loadModel = gltfScene;
  //   console.log(loadModel);
  //   scene.add(gltfScene);
  // });

  loadThree();

  return (
    <>
      <section id="reach">
        <canvas ref={canvas}></canvas>
      </section>
    </>
  );
};

export default Reach;
