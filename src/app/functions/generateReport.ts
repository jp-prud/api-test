import OpenAI from "openai";
import { IEvent } from "../types/IEvent";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function handler({ body }: IEvent) {
  console.log(body);
  const complementation = {};
  // const completion = await openai.chat.completions.create({
  //   messages: [
  //     {
  //       role: "assistant",
  //       content:
  //         "Se comporte como um médico muito inteligente. Eu irei realizar a entrada de alguns dados e você deve gerar um relatório sobre as informações e elas vão ser enviadas por WhasApp, segue: Idoso: João Pedro, urinou 2 vezes hoje, almoçou corretamente, apresentou cansaço de tarde e foi ao banheiro 5 vezes.",
  //     },
  //   ],
  //   model: "gpt-3.5-turbo",
  // });

  // await fetch("http://localhost:3001/client/sendMessage/joaopedro", {
  //   method: "POST",
  //   body: JSON.stringify({
  //     chatId: "554797013377@c.us",
  //     contentType: "string",
  //     content: completion.choices[0].message.content,
  //   }),
  //   headers: {
  //     "x-api-key": "comunidadezdg.com.br",
  //     "Content-Type": "application/json",
  //   },
  // });

  return {
    statusCode: 200,
    body: JSON.stringify({
      // message: completion.choices[0].message.content,
    }),
  };
}
