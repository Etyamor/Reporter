import { create } from 'zustand';

const useNotificationsStore = create((set) => ({
    notifications: [],
    addNotification: (notification) => {
        const id = Math.random().toString(36).substr(2, 9);
        set((state) => ({ notifications: [...state.notifications, { ...notification, id }] }));
        setTimeout(() => {
            set((state) => ({ notifications: state.notifications.filter((n) => n.id !== id) }));
        }, 5000);
    },
}));

export default useNotificationsStore;