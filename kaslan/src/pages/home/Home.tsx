import ForYou from './components/for-you'
import HomeScroll from './components/home-scroll'
function Home() {
    return (
        <div className='grid grid-cols-5 items-start gap-8 '>
            <div className='col-span-3 overflow-auto scroll-smooth h-[88vh]'>
                <HomeScroll />
            </div>
            <div className='col-span-2'>
                <ForYou />
            </div>
        </div>
    )
}

export default Home