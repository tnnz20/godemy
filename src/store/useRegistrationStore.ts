import { create } from "zustand"

interface State {
  currentForm: number
}

const initialState: State = {
  currentForm: 0,
}

interface Action {
  setCurrentForm: (status: State["currentForm"]) => void
}

export const useRegistrationStore = create<State & Action>((set) => ({
  ...initialState,
  setCurrentForm: (currentForm) => set(() => ({ currentForm: currentForm })),
}))
