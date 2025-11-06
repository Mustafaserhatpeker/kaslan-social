import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Link } from "react-router-dom"

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
                <Button className="text-xs font-semibold text-accent-foreground" variant={"ghost"}>
                    Geçiş Yap
                </Button>
            </div>
            <Separator />
            <div className="flex flex-row w-full gap-4">
                <span className="text-md text-muted-foreground font-semibold">Senin için önerilen</span>
                <Link to="/all" className="ml-auto text-xs font-semibold text-accent-foreground hover:underline items-center justify-center flex">
                    Tümünü Gör
                </Link>
            </div>
            <div className="flex flex-col gap-2 w-full">
                {[1, 2, 3, 4, 5].map(() => (
                    <div className="flex w-full flex-row flex-wrap justify-between items-center gap-2 ">
                        <div className="flex flex-row items-center justify-between gap-2">
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col">
                                <span className="font-medium">shadcn</span>
                                <span className="text-xs text-muted-foreground">
                                    kubra_kilicaslan + 34 diğer kişi tak...
                                </span>
                            </div>
                        </div>
                        <Button className="text-xs font-semibold text-accent-foreground" variant={"ghost"}>
                            Takip Et
                        </Button>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default ForYou