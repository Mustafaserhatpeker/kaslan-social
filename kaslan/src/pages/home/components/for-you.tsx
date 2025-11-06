import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

function ForYou() {
    return (
        <div className="flex w-3/4 flex-row flex-wrap justify-between items-center gap-2 mt-12">
            <div className="flex w-full flex-row flex-wrap justify-between items-center gap-2 ">
                <div className="flex flex-row items-center justify-between gap-2">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                        <span className="font-medium">shadcn</span>
                        <span className="text-sm text-muted-foreground">
                            Mustafa Peker
                        </span>
                    </div>
                </div>
                <Button variant={"ghost"}>
                    Takip Et
                </Button>
            </div>
            <Separator />
        </div>
    )
}

export default ForYou