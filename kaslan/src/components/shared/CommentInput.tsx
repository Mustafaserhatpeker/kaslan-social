import { useState } from "react";
import { Send } from "lucide-react";

import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
    InputGroupButton,
} from "@/components/ui/input-group";

import { Spinner } from "@/components/ui/spinner";

export function CommentInput() {
    const [comment, setComment] = useState("");
    const [isSending, setIsSending] = useState(false);

    const handleSend = () => {
        if (!comment.trim()) return;

        setIsSending(true);

        // Sahte gecikme (server simülasyonu)
        setTimeout(() => {
            console.log("Gönderilen yorum:", comment); // burada API'ye gönderebilirsin
            setComment(""); // input'u temizle
            setIsSending(false);
        }, 2000); // 2 saniyelik delay
    };

    return (
        <div className="w-full bg-transparent">
            <InputGroup className="bg-transparent" data-disabled={isSending}>
                <InputGroupInput
                    className="bg-transparent"
                    placeholder="Yorum yaz..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    disabled={isSending}
                />

                <InputGroupAddon align="inline-end">
                    {isSending ? (
                        <Spinner />
                    ) : (
                        <InputGroupButton
                            size="icon-xs"
                            variant="default"
                            disabled={comment.trim().length === 0}
                            onClick={handleSend}
                        >
                            <Send className="h-4 w-4" />
                        </InputGroupButton>
                    )}
                </InputGroupAddon>
            </InputGroup>
        </div>
    );
}
