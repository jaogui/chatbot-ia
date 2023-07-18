import React from "react";
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

export default function Home() {
  return (
    <div className="flex min-h-screen bg-slate-50 items-center justify-center">
      <Card className="w-[500px] h-[700px] rounded-2xl grid grid-rows-[min_content_1fr_min_content]">
        <CardHeader>
          <CardTitle>Chatbot - OpenIA</CardTitle>
          <CardDescription>Chatbot interativo.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 flex flex-col gap-5">
          <article className="flex items-center gap-5 justify-start">
            <Avatar>
              <AvatarFallback>JG</AvatarFallback>
              <AvatarImage src="https://github.com/jaogui.png" />
            </Avatar>
            <p>Oque é desenvolvimento de software</p>
          </article>
          <article className="flex items-center gap-5 justify-start">
            <Avatar className="flex self-start">
              <AvatarFallback>IA</AvatarFallback>
              <AvatarImage src="https://github.com/openai.png" />
            </Avatar>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, quia. Quisquam atque ipsam doloremque corporis similique quae obcaecati ullam incidunt, nulla a quos possimus autem quod magni neque fuga veniam?</p>
          </article>
        </CardContent>
        <CardFooter>
          <Input placeholder="Escreva aqui sua dúvida.." />
          <Button type="submit">Enviar</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
