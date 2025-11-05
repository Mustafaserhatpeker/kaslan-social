import LightRays from '@/components/LightRays'
import { SignupForm } from '@/components/signup-form'

function Register() {
    return (
        <div className='w-full h-full bg-black'>
            <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#ffffff"
                    raysSpeed={1.5}
                    lightSpread={0.8}
                    rayLength={1.2}
                    followMouse={true}
                    mouseInfluence={0.1}
                    noiseAmount={0.1}
                    distortion={0.05}
                    className="custom-rays"
                />
                <SignupForm className='absolute top-18 left-1/4' style={{
                    width: "50vw"
                }} />
            </div>
        </div>
    )
}

export default Register