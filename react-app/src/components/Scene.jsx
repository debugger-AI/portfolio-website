import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Scene = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x18181b, 0.02);

        const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
        camera.position.z = 6;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        mountRef.current.appendChild(renderer.domElement);

        const geometry = new THREE.BufferGeometry();
        const count = 2000;
        const posArray = new Float32Array(count * 3);
        for (let i = 0; i < count * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 8;
        }
        geometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

        const material = new THREE.PointsMaterial({
            size: 0.025,
            color: 0xe4e4e7,
            transparent: true,
            opacity: 0.9,
            blending: THREE.AdditiveBlending,
        });
        const particles = new THREE.Points(geometry, material);
        scene.add(particles);

        const lineGeo = new THREE.IcosahedronGeometry(2, 1);
        const lineMat = new THREE.MeshBasicMaterial({ color: 0x71717a, wireframe: true, transparent: true, opacity: 0.25 });
        const lineMesh = new THREE.Mesh(lineGeo, lineMat);
        scene.add(lineMesh);

        let mouseX = 0,
            mouseY = 0,
            targetX = 0,
            targetY = 0;
        const windowHalfX = window.innerWidth / 2;
        const windowHalfY = window.innerHeight / 2;

        const handleMouseMove = (e) => {
            mouseX = e.clientX - windowHalfX;
            mouseY = e.clientY - windowHalfY;
        };
        window.addEventListener('mousemove', handleMouseMove);

        const animate = () => {
            targetX = mouseX * 0.0001;
            targetY = mouseY * 0.0001;
            particles.rotation.y += 0.002;
            particles.rotation.x += 0.001;
            particles.rotation.y += 0.25 * (targetX - particles.rotation.y);
            particles.rotation.x += 0.25 * (targetY - particles.rotation.x);
            lineMesh.rotation.y -= 0.001;
            lineMesh.rotation.x -= 0.001;
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };
        animate();

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
            if (mountRef.current) mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef} className="fixed top-0 left-0 w-full h-screen -z-10 bg-zinc-900" />;
};

export default Scene;
