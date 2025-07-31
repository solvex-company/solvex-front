'use client';
import { useAuthContext } from '@/context/AuthContext';
import { getNotifications } from '@/services/notifications';
import React, { useState, useEffect } from 'react';

// Define la interfaz para el tipo de notificación
interface Notification {
  id: string | number;
  title: string;
  message: string;
  createdAt?: string;
  isRead?: boolean;
}

const Notifications: React.FC = () => {
  const { token } = useAuthContext();
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchNotifications = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await getNotifications(token!);
      setNotifications(data);
    } catch (error) {
      console.error('Error al obtener notificaciones:', error);
      setError('Error al cargar las notificaciones');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      fetchNotifications();
    }
  }, [token]);

  if (isLoading) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-xl">Notificaciones</h1>
        <div className="flex justify-center items-center h-32">
          <div className="text-gray-500">Cargando notificaciones...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-xl">Notificaciones</h1>
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mt-3">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold">NOTIFICACIONES</h1>
      <div className="bg-white shadow-md rounded-lg divide-y divide-gray-200 mt-3">
        {notifications.length === 0 ? (
          <div className="p-4 text-center text-gray-500">
            No tienes notificaciones
          </div>
        ) : (
          <ul className="flex flex-col">
            {notifications.map((notification) => (
              <li 
                key={notification.id} 
                className="p-4 hover:bg-gray-100 cursor-pointer text-lg border-b border-gray-200 last:border-b-0"
              >
                <strong>{notification.title}:</strong> {notification.message}
                {notification.createdAt && (
                  <div className="text-sm text-gray-500 mt-1">
                    {new Date(notification.createdAt).toLocaleString()}
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Notifications;