import {useState} from "react";
import useAuthStore from '../store/authStore';
import useNotificationsStore from '../store/notificationsStore';

function Settings() {

    const { updateUserProfile, updatePassword } = useAuthStore();
    const { addNotification } = useNotificationsStore();

    const [username, setUsername] = useState(useAuthStore.getState().user.displayName || '');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function handleUserProfileUpdatePassword(password) {
        if (password.length < 6) {
            addNotification({message: 'Password must be at least 6 characters long', type: 'error'});
            return;
        }
        if (password !== confirmPassword) {
            addNotification({message: 'Passwords do not match', type: 'error'});
            return;
        }
        updatePassword(password);
    }

    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h1 className="text-2xl font-bold mb-4">Settings</h1>
                    <div className="">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Display name</label>
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full p-2 mb-4 border rounded"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <button
                            onClick={() => updateUserProfile(username)}
                            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 mb-4"
                        >Update profile
                        </button>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Reset password</label>
                        <input
                            type="password"
                            placeholder="New password"
                            className="w-full p-2 mb-4 border rounded"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Confirm password"
                            className="w-full p-2 mb-4 border rounded"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}/>
                        <button
                            onClick={() => handleUserProfileUpdatePassword(password, confirmPassword)}
                            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 mb-4"
                        >Update password
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Settings;