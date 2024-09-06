import useNotificationsStore from "../store/notificationsStore";

function Notifications() {
    const { notifications } = useNotificationsStore();
    const notificationClassDict = {
        error: 'bg-red-100 text-red-700',
        success: 'bg-green-100 text-green-700',
        info: 'bg-blue-100 text-blue-700',
    };

    return (
        <div className="fixed bottom-2 right-2 flex-row-reverse space-y-2">
            {notifications.map((notification) => (
                <div key={notification.id}
                     className={`py-2 px-8 shadow-md rounded transition notification-disappear ${notificationClassDict[notification.type]}`}>
                    {notification.message}
                </div>
            ))}
        </div>
    );
}

export default Notifications;