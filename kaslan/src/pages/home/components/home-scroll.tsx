import { DataCard } from '@/components/shared/DataCard'
import { InfiniteScroll } from '@/components/shared/InfiniteScroll'

function HomeScroll() {
    return (
        <div className='w-full h-full'>
            <InfiniteScroll DataCard={DataCard} />
        </div>
    )
}

export default HomeScroll