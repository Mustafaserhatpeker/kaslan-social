import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { ExploreScroll } from "./components/ExploreScroll"

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
                        <ExploreScroll gridCols='grid-cols-3' />

                    </TabsContent>
                    <TabsContent value="movies">
                        <ExploreScroll gridCols='grid-cols-3' />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}

export default Explore