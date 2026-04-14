import React, { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import * as THREE from "three";
import { ArrowUpRight } from "lucide-react";

function ExeggutorModel() {
  const materials = useLoader(MTLLoader, "/models/exeggutor/materials.mtl");
  const obj = useLoader(OBJLoader, "/models/exeggutor/model.obj", (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });

  const meshRef = useRef();

  useEffect(() => {
    if (obj) {
      const box = new THREE.Box3().setFromObject(obj);
      const center = box.getCenter(new THREE.Vector3());
      obj.position.x = -center.x;
      obj.position.y = -box.min.y;
      obj.position.z = -center.z;
    }
  }, [obj]);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={meshRef} position={[0, -3, 0]}>
      {/* 1.8x scale so you can see the whole body perfectly */}
      <primitive object={obj} scale={1.8} />
    </group>
  );
}

// Loading Fallback
function Loader() {
  return (
    <mesh>
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial color="#7B61FF" wireframe />
    </mesh>
  );
}

export default function LetsConnect() {
  return (
    <section className="relative w-full min-h-[85vh] lg:min-h-screen bg-background border-t border-white/10 flex flex-col md:flex-row overflow-hidden">
      
      {/* CTA Text Area */}
      <a 
        href="mailto:afrelzhm@gmail.com"
        className="w-full shrink-0 md:w-1/3 flex flex-col justify-center p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10 group relative transition-all duration-500 overflow-hidden"
      >
        {/* Accent line that appears on hover - now on the right side */}
        <div className="absolute top-0 right-0 w-full md:w-1 h-1 md:h-full bg-accent origin-right md:origin-top scale-x-0 md:scale-x-100 md:scale-y-0 group-hover:scale-100 transition-transform duration-500 ease-out z-10 shadow-[0_0_20px_rgba(123,97,255,1)]"></div>
        
        <div className="relative z-20 flex flex-col items-start gap-6">
          <h2 className="font-drama text-4xl lg:text-5xl text-accent transition-all duration-300 leading-[1.1] group-hover:drop-shadow-[0_0_20px_rgba(123,97,255,0.6)] break-words w-full">
            Is there a project in mind? <br />
            <span className="text-white transition-colors duration-300 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]">Let's connect.</span>
          </h2>
          
          <div className="inline-flex items-center gap-3 bg-accent text-background px-6 py-3 rounded-full transition-all uppercase tracking-widest text-sm font-heading font-bold mt-4 shadow-[0_4px_15px_rgba(123,97,255,0.4)] group-hover:shadow-[0_6px_25px_rgba(123,97,255,0.7)] group-hover:-translate-y-1 group-hover:bg-[#a08aff]">
            Send an Email
            <span className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
              <ArrowUpRight size={18} />
            </span>
          </div>
        </div>
      </a>

      {/* 3D Model Area */}
      <div className="w-full md:w-2/3 h-[65vh] md:h-[85vh] lg:h-screen relative cursor-grab active:cursor-grabbing shrink-0">
        {/* Background visual flair */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background z-0"></div>
        
        <Canvas 
          camera={{ position: [0, 0, 10], fov: 45 }}
          className="z-10"
        >
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 20, 10]} intensity={1.5} color="#ffffff" />
          <spotLight position={[-10, 10, -10]} intensity={2} color="#7B61FF" />
          
          <Suspense fallback={<Loader />}>
            <ExeggutorModel />
            <Environment preset="city" />
            <ContactShadows position={[0, -3, 0]} opacity={0.6} scale={10} blur={2.5} far={4} color="#000000" resolution={256} />
          </Suspense>

          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2 - 0.5}
            target={[0, 0, 0]}
          />
        </Canvas>
      </div>
      
    </section>
  );
}
