import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import GithubModel from './GithubModel'
import PythonModel from './PythonModel'
import ReactModel from './ReactModel'
import JavaModel from './JavaModel'
import OrbitingModel from './OrbitingModel'

export default function Scene() {
  return (
    <Canvas style={{ height: '100vh%',width:"100vw", background: 'transparent' , overflow:'visible'}}
    camera={{position:[0,0,8],fov:20}}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 10]} intensity={0.2}/>
      <directionalLight position={[0, 0, 10]} intensity={0.2}/>
      <directionalLight position={[0, 0, -10]} intensity={0.2}/>
      <directionalLight position={[10, 0, 0]} intensity={0.2}/>
      <directionalLight position={[-10, 0, 0]} intensity={0.2}/>
      <OrbitingModel radius={3} baseSpeed={0.00002} amplitude={1.5} offset={0} >
        <GithubModel />
      </OrbitingModel>
      <OrbitingModel radius={3} baseSpeed={0.00002} amplitude={1.5} offset={1} >
        <PythonModel/>
    </OrbitingModel>
      <OrbitingModel radius={3} baseSpeed={0.00002} amplitude={1.5} offset={2} >
        <JavaModel/>
        </OrbitingModel>
      <OrbitingModel radius={3} baseSpeed={0.00002} amplitude={1.5} offset={3} >
        <ReactModel/>
        </OrbitingModel>
      <OrbitControls enableZoom={false} autoRotate={false} />
    </Canvas>
  )
}