"use client"
import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { Group } from 'three'
import { Box } from '@react-three/drei'

export default function GithubModel() {
  const { scene } = useGLTF('/models/github.glb')
    const modelRef = useRef<Group>(null)
    const { camera } = useThree()
  
    useFrame(() => {
      if (modelRef.current) {
        modelRef.current.lookAt(camera.position)
      }
    })
    
  return (
    <primitive ref={modelRef} object={scene} scale={0.7} position={[0, 0, 0]} />
  )
}

useGLTF.preload('/models/github.glb')
