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
import { CommentInput } from "./CommentInput"
import StarArea from "./StarArea"

export function DataCard() {
    return (
        <Card className="w-full max-w-xl bg-transparent">
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
                    className="rounded-md max-w-lg"
                />
            </CardContent>
            <CardFooter className="flex-col items-start justify-between  px-8 gap-4">
                <div className="flex flex-row items-center justify-between w-full">
                    <div className="flex flex-row w-2/3 items-center justify-start gap-4">
                        <LikeButton />
                        <button className="flex cursor-pointer items-center justify-center gap-1 ">
                            <MessageCircle className="h-7 w-7" />
                        </button>
                        <StarArea />
                    </div>

                    <SaveButton />
                </div>
                <div className="flex flex-row items-center justify-start gap-4 w-full">
                    <span className="text-sm text-muted-foreground">9.856 beğenme</span>
                </div>
                <CardDescription className="dark:text-white text-black">
                    <span className="text-sm font-bold pr-1 ">
                        @shadcn
                    </span>
                    Uçurtma Avcısı, Şuana kadar okuduğum en iyi kitaplardan biri. Kesinlikle tavsiye ederim!
                </CardDescription>
                <Button style={{
                    padding: 0,
                    margin: 0,
                    background: 'none',
                    border: 'none',
                    boxShadow: 'none',
                }} variant={"ghost"} className="text-sm text-muted-foreground">23 yorumun tümünü gör</Button>

                <CommentInput />
            </CardFooter>
        </Card>
    )
}
