import useAuthStore from '../store/authStore';

function Dashboard() {

    const { logout } = useAuthStore();

    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
                    <div className="mb-4">
                    </div>
                    <button
                        onClick={logout}
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </>
    )
}

export default Dashboard;