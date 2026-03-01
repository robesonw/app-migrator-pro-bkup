import React, { useEffect, useState } from 'react';
import { apiFetch } from '@/lib/api';

const NotificationBell = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        const fetchNotifications = async () => {
            const data = await apiFetch('/api/notifications');
            setNotifications(data);
        };
        fetchNotifications();
    }, []);

    return (
        <div>
            <button className="relative">
                <span className="bell-icon">🔔</span>
                {notifications.length > 0 && <span className="badge">{notifications.length}</span>}
            </button>
            {notifications.length > 0 && (
                <ul className="notification-dropdown">
                    {notifications.map((notification, index) => (
                        <li key={index}>{notification.message}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default NotificationBell;