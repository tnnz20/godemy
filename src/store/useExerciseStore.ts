import { create } from "zustand"

interface State {
  status: string
  answer: string
}

const initialState: State = {
  answer: "",
  status: "idle",
}

interface Action {
  setStatus: (status: State["status"]) => void
  setAnswer: (answer: State["answer"]) => void
  resetState: () => void
}

export const useExerciseStore = create<State & Action>((set) => ({
  ...initialState,
  setAnswer: (answer) => set(() => ({ answer: answer })),
  setStatus: (status) => set(() => ({ status: status })),
  resetState: () => {
    set(initialState)
  },
}))
