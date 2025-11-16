import * as React from "react"

import { ScrollArea } from "@/components/ui/scroll-area"
import { ExploreCard } from "./ExploreCard"
import UcurtmaAvcisi from '@/assets/ucurtma-avcisi.jpg'

const tags = Array.from({ length: 10 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
)


export function ExploreScroll(
    { gridCols }: { gridCols?: string }
) {
    return (
        <ScrollArea className="h-full max-h-[90vh] w-full rounded-md ">
            <div className={` grid ${gridCols ?? ''}`} >
                {tags.map((tag) => (
                    <React.Fragment key={tag}>
                        <div className={` flex w-full h-full  items-center justify-center`}>
                            <ExploreCard image={UcurtmaAvcisi} />
                        </div>

                    </React.Fragment>
                ))}
            </div>
        </ScrollArea>
    )
}
