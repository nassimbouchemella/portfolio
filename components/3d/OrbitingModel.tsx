"use client"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Group } from "three"
import { ReactNode } from "react"

interface OrbitingModelProps {
  radius: number
  baseSpeed: number
  amplitude?: number // variation de la vitesse
  offset?: number
  children: ReactNode
}

export default function OrbitingModel({
  radius,
  baseSpeed,
  amplitude = 0.2,
  offset = 0,
  children
}: OrbitingModelProps) {
  const ref = useRef<Group>(null)

  const vitesse = (2 * Math.PI) / 4
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() + offset
    const variableSpeed = baseSpeed + amplitude * Math.sin(t * 1.5) // fréquence d’oscillation

    const angle = t
    const x = Math.cos(angle) * radius 
    const y = Math.cos(angle) * radius
    const z = Math.sin(angle) * radius

    if (ref.current) {
      ref.current.position.set(x, 0, z)
      ref.current.lookAt(0, 0, 0)
    }
  })

  return <group ref={ref}>{children}</group>
}