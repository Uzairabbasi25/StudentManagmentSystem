//@ts-nocheck
// stores/useUserStore.ts
import {create} from 'zustand';

// Define the user type
type Organization = {
 name:string;

 id:string
};

// Define the store state type
interface OrganizationStore {
    selectdOrganizationId:string;
  organizations: Organization[] | [];  
  setOrganizations: (organizations: Organization[]) => void; // Function to set user info
  clearOrganizations: () => void; // Function to clear user info
  setSelectdOrganizationId:(id:string)=>void;
}

// Create the Zustand store with proper typing
const useOrganizationStore = create<OrganizationStore>((set) => ({
  organizations: [], // Initial user state
  selectdOrganizationId:null,
  setOrganizations: (organizations:Organization[]) => set({ organizations: organizations }),
  clearOrganizations: () => set({ organizations: [] }),
  setSelectdOrganizationId:(id:string)=>set({selectdOrganizationId:id})
}));

export default useOrganizationStore;
