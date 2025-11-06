import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { ExploreCard } from "./components/ExploreCard"
import UcurtmaAvcisi from '@/assets/ucurtma-avcisi.jpg'
import Creed from '@/assets/creed.avif'

function Explore() {
    return (
        <div className="flex flex-col items-center justify-center h-screen overflow-hidden">
            <div className="flex w-5/6 h-full flex-col gap-6 overflow-hidden ">
                <Tabs defaultValue="books">
                    <TabsList>
                        <TabsTrigger value="books">Kitapları Keşfet</TabsTrigger>
                        <TabsTrigger value="movies">Filmleri Keşfet</TabsTrigger>
                    </TabsList>
                    <TabsContent value="books">
                        <div className="grid grid-cols-3 overflow-auto max-h-screen">
                            <ExploreCard image={UcurtmaAvcisi} />
                            <ExploreCard image={UcurtmaAvcisi} />
                            <ExploreCard image={UcurtmaAvcisi} />
                            <ExploreCard image={UcurtmaAvcisi} />
                            <ExploreCard image={UcurtmaAvcisi} />
                            <ExploreCard image={UcurtmaAvcisi} />
                            <ExploreCard image={UcurtmaAvcisi} />
                            <ExploreCard image={UcurtmaAvcisi} />
                            <ExploreCard image={UcurtmaAvcisi} />
                        </div>

                    </TabsContent>
                    <TabsContent value="movies">
                        <div className="grid grid-cols-3 overflow-auto max-h-screen ">
                            <ExploreCard image={Creed} />
                            <ExploreCard image={Creed} />
                            <ExploreCard image={Creed} />
                            <ExploreCard image={Creed} />
                            <ExploreCard image={Creed} />
                            <ExploreCard image={Creed} />
                            <ExploreCard image={Creed} />
                            <ExploreCard image={Creed} />
                            <ExploreCard image={Creed} />
                            <ExploreCard image={Creed} />
                        </div>

                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}

export default Explore