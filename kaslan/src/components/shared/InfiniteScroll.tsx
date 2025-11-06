import * as React from "react"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { DataCard } from "./DataCard"

const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

export function InfiniteScroll() {
    return (
        <ScrollArea className="h-full max-h-[90vh] w-full rounded-md border">
            <div className="p-4">
                {tags.map((tag) => (
                    <React.Fragment key={tag}>
                        <div className=" flex w-full h-full items-center justify-center">
                            <DataCard />
                        </div>
                        <Separator className="my-2" />
                    </React.Fragment>
                ))}
            </div>
        </ScrollArea>
    )
}
//lı bağemın bu zıvıstan
//fexiye teyra edi qale