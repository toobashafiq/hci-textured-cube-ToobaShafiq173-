import * as THREE from "three";
import { useEffect, useRef } from "react";

function TexturedCube() {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const loader = new THREE.TextureLoader();

    // 6 unique images for 6 faces
    const materials = [
      new THREE.MeshBasicMaterial({ map: loader.load("/batch.jpeg") }),
      new THREE.MeshBasicMaterial({ map: loader.load("/logo.jpeg") }),
      new THREE.MeshBasicMaterial({ map: loader.load("/name.jpeg") }),
      new THREE.MeshBasicMaterial({ map: loader.load("/seatno.jpeg") }),
      new THREE.MeshBasicMaterial({ map: loader.load("/ubit.jpeg") }),
      new THREE.MeshBasicMaterial({ map: loader.load("/uni.jpeg") }),
    ];

   // Cube size increased
const cube = new THREE.Mesh(
  new THREE.BoxGeometry(3, 3, 3), // width, height, depth
  materials
);
scene.add(cube);

// Camera thoda peeche kar diya taake cube clearly visible ho
camera.position.z = 7;


    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef}></div>;
}

export default TexturedCube;
