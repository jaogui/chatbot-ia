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
import { BotIcon } from "lucide-react";

import { useChat } from "ai/react";

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat',
  });

  return (
      <Card className="w-[500px] h-[700px] rounded-2xl grid grid-rows-[min-content]">
        <CardHeader className="flex flex-row justify-between border-b">
          <CardTitle className="flex gap-2">Chatbot</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 flex flex-col gap-2 self-start pt-5">
          {messages.map(message => {
            return(
              <article key={message.id} className="flex items-center gap-5 justify-start text-sm text-zinc-600">
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
        </CardContent>
        <CardFooter className="text-sm self-end"> 
          <form className="flex gap-2 w-full items-center" onSubmit={handleSubmit}>
          <label>
            <BotIcon size={25} color="#000000" strokeWidth={1.5} />
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
