import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,

} from "@/components/ui/card"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import UcurtmaAvcisi from '@/assets/ucurtma-avcisi.jpg'
import LikeButton from "./LikeButton"
import { MessageCircle } from "lucide-react"
import SaveButton from "./SaveButton"

export function DataCard() {
    return (
        <Card className="w-full max-w-lg bg-transparent">
            <CardHeader>
                <div className="flex flex-row flex-wrap items-center gap-2">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                        <span className="font-medium">shadcn</span>
                        <span className="text-sm text-muted-foreground">
                            @shadcn · 2 saat önce
                        </span>
                    </div>
                </div>
                <CardDescription>
                    Uçurtma Avcısı, Şuana kadar okuduğum en iyi kitaplardan biri. Kesinlikle tavsiye ederim!
                </CardDescription>
                <CardAction>
                    <Button variant="link">
                        Takip Et
                    </Button>
                </CardAction>
            </CardHeader>
            <CardContent className="flex items-center justify-center">
                <img
                    src={UcurtmaAvcisi}
                    alt="Uçurtma Avcısı Kitap Kapak"
                    className="rounded-md max-w-md"
                />

            </CardContent>
            <CardFooter className="flex-row items-center justify-between  px-8">
                <div className="flex flex-row w-1/2 items-center justify-start gap-4">
                    <LikeButton />
                    <button className="flex cursor-pointer items-center justify-center gap-1 ">
                        <MessageCircle className="h-7 w-7" />
                    </button>
                </div>

                <SaveButton />

            </CardFooter>
        </Card>
    )
}
