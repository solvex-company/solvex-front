const Notifications: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl">Notificaciones</h1>
      <div className="bg-white shadow-md rounded-lg divide-y divide-gray-200 mt-3">
        <ul className="flex flex-col gap-2">
          <li className="p-4 hover:bg-gray-100 cursor-pointer text-lg">
            <strong>Notificación 1:</strong> Esta es una notificación de
            ejemplo.
          </li>
          <li className="p-4 hover:bg-gray-100 cursor-pointer text-lg">
            <strong>Notificación 2:</strong> Esta es otra notificación de
            ejemplo.
          </li>
          <li className="p-4 hover:bg-gray-100 cursor-pointer text-lg">
            <strong>Notificación 3:</strong> Aquí hay una tercera notificación
            de ejemplo.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Notifications;
