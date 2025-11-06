import {
    Card,

    CardContent,


} from "@/components/ui/card"






export function ExploreCard(
    { image }: { image: string }
) {
    return (
        <Card className="w-full max-w-xl bg-transparent p-0 m-0">

            <CardContent className="flex items-center justify-center p-0 m-0">
                <img
                    src={image}
                    alt="Uçurtma Avcısı Kitap Kapak"
                    className="rounded-md  aspect-square"
                />
            </CardContent>

        </Card>
    )
}
