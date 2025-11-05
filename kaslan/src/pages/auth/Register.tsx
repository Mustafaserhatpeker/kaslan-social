import Silk from '@/components/Silk'

function Register() {
    return (
        <div className='w-full h-full'>
            <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>


                <Silk
                    speed={5}
                    scale={1}
                    color="#5227ff"
                    noiseIntensity={1.5}
                    rotation={0}
                />
            </div>
        </div>
    )
}

export default Register