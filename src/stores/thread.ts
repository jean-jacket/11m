import { create } from 'zustand'
import type { Message } from '../types'

// TODO: Add prompt
// TODO: Add Models
interface Thread {
    id: string;
    createdAt: number;
    updatedAt: number;
    modelName: string;
    messages: Message[];
    generateResponse: (message: string) => Promise<void>
}

export const useThreadStore = create<Thread>()((set, get) => ({
  id: crypto.randomUUID(),
  createdAt: Date.now(),
  updatedAt: Date.now(),
  modelName: "gpt-4o-mini-2024-07-18",
  messages: [],
  generateResponse: async (msg) => {
    set((state) => ({messages: [...state.messages, {"content": msg, "role": "user"}]}))

  const messages = get().messages
  
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
            "Authorization": import.meta.env.VITE_OPENAI_TOKEN
        },
        body: JSON.stringify({
          "model": "gpt-4o-mini-2024-07-18",
          "stream": false,
          "messages": [{"content": "You are a helpful assistant.", "role": "system"}, ...messages]
        })
    })

    const jsonResponse = await response.json()

    const generatedMessage = jsonResponse.choices[0].message as Message

    set((state) => ({messages: [...state.messages, generatedMessage]}))


}
}))