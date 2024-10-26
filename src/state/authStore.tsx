import { mmkvStorage } from "./Storage";
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface authStore {
  user: Record<string, any> | null;
  setUser: (user: any) => void;
  setCurrentOrder: (order: any) => void;
  currentOrder: Record<string, any> | null;
  logOut: () => void;
}

export const useAuthStore = create<authStore>()(
    persist(
        (set, get)=>({
            user:null,
            currentOrder:null,
            setCurrentOrder:(order)=>set({currentOrder:order}),
            setUser:(data) =>set({user:data}),
            logOut:()=>set({user:null,currentOrder:null})
        }),
        {
            name:'auth-storage',
            storage:createJSONStorage (() => mmkvStorage)
        }
    )
)