//@ts-nocheck
// stores/useUserStore.ts
import {create} from 'zustand';

// Define the user type
type User = {
  username: string;
  role: {
    id:string;
    name:string
  };
  organizationId: string;

};

// Define the store state type
interface UserStore {
  user: User | null; // User can be null or of type User
  setUser: (userInfo: User) => void; // Function to set user info
  clearUser: () => void; // Function to clear user info
}

// Create the Zustand store with proper typing
const useUserStore = create<UserStore>((set) => ({
  user: null, // Initial user state
  setUser: (userInfo) => set({ user: userInfo }),
  clearUser: () => set({ user: null }),
}));

export default useUserStore;
