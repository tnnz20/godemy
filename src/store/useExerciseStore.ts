import { create } from "zustand"

interface State {
  status: string
  answer: string
}

interface Action {
  setStatus: (status: State["status"]) => void
  setAnswer: (answer: State["answer"]) => void
}

export const useExerciseStore = create<State & Action>((set) => ({
  answer: "",
  status: "idle",
  setAnswer: (answer) => set(() => ({ answer: answer })),
  setStatus: (status) => set(() => ({ status: status })),
}))
