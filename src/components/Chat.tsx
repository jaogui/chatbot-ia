"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LucideMessagesSquare, BotIcon } from "lucide-react";

import { useChat } from "ai/react";
import { ScrollArea } from "@/components/ui/scroll-area"

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat',
  });

  return (
      <Card className="w-[550px]">
        <CardHeader className="flex flex-row justify-between border-b">
          <CardTitle className="flex gap-2">Chatbot</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent className="self-start pt-5">
          <ScrollArea className="h-[700px] rounded-md p-2">
          {messages.map(message => {
            return(
              <article key={message.id} className="flex items-center gap-5 justify-start text-sm text-zinc-600 py-2">
                {message.role === 'user' && (
                        <Avatar className="self-start">
                        <AvatarFallback>JG</AvatarFallback>
                        <AvatarImage src="https://github.com/jaogui.png" />
                      </Avatar>
                )}
                {message.role === 'assistant' && (
                       <Avatar className="flex self-start">
                       <AvatarFallback>
                         <BotIcon size={20} color="#000000" strokeWidth={1.5} />
                       </AvatarFallback>
                       <AvatarImage src="https://github.com/openai.png" />
                     </Avatar>
                )}
              <span className="flex flex-col">
                <p className="font-semibold">{message.role === 'user' ? 'Interação:' : 'IA:'}</p>
                <p>{message.content}</p>
              </span>
            </article>
            )
          })}
          </ScrollArea>
        </CardContent>
        <CardFooter className="text-sm self-end"> 
          <form className="flex gap-2 w-full items-center" onSubmit={handleSubmit}>
          <label>
            <LucideMessagesSquare size={25} color="#000000" strokeWidth={1.5} />
          </label>
            <Input
              placeholder="Escreva aqui sua dúvida.."
              value={input}
              onChange={handleInputChange}
            />
            <Button
              type="submit"
              className="flex items-center bg-black text-zinc-100 gap-2 border border-zinc-900 hover:text-zinc-900"
            >
              Enviar
            </Button>
          </form>
        </CardFooter>
      </Card>
  );
}
