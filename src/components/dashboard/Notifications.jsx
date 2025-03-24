import { useEffect, useState } from "react";
import { PiX } from "react-icons/pi";
import { motion, AnimatePresence } from "framer-motion";

export default function Notifications({ onClose, onMarkAsRead }) {
  const [notifications, setNotifications] = useState([]);
  const [selectedNotification, setSelectedNotification] = useState(null);

  useEffect(() => {
    const simulatedNotifications = [
      {
        id: 1,
        message: "Welcome to Edureach!",
        details: "Enjoy your learning journey with us!",
        viewed: false,
      },
      {
        id: 2,
        message: "New course available: Learn Salsa Dancing!",
        details: "Start dancing salsa in 3 weeks! Check it out now.",
        viewed: false,
      },
    ];
    setNotifications(simulatedNotifications);
  }, []);

  const markAsViewed = async (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, viewed: true } : n))
    );
    onMarkAsRead(); // Notify parent component
  };

  const deleteNotification = async (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
    if (selectedNotification?.id === id) {
      setSelectedNotification(null);
    }
    // Check if all notifications are read after deletion
    if (notifications.every(n => n.viewed || n.id === id)) {
      onMarkAsRead();
    }
  };

  const handleNotificationClick = (notification) => {
    setSelectedNotification(notification);
    markAsViewed(notification.id);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-80 max-h-96 overflow-y-auto bg-white shadow-xl rounded-lg border border-gray-200"
    >
      <div className="p-4 border-b border-gray-200 flex justify-between items-center">
        <h2 className="text-lg font-bold">Notifications</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <PiX className="w-5 h-5" />
        </button>
      </div>

      {notifications.length === 0 ? (
        <div className="p-4 text-center text-gray-500">No notifications</div>
      ) : (
        <ul className="divide-y divide-gray-100">
          <AnimatePresence>
            {notifications.map(({ id, message, viewed, details }) => (
              <motion.li
                key={id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={`p-3 hover:bg-gray-50 cursor-pointer ${viewed ? "bg-white" : "bg-blue-50"}`}
                onClick={() => handleNotificationClick({ id, message, details })}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <p className={`${viewed ? "text-gray-600" : "font-medium text-gray-900"}`}>
                      {message}
                    </p>
                    {!viewed && (
                      <div className="mt-1 h-1.5 w-1.5 bg-blue-500 rounded-full"></div>
                    )}
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteNotification(id);
                    }}
                    className="ml-2 text-gray-400 hover:text-red-500"
                  >
                    <PiX className="w-4 h-4" />
                  </button>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      )}

      {selectedNotification && (
        <div className="p-4 border-t border-gray-200">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold">{selectedNotification.message}</h3>
            <button 
              onClick={() => setSelectedNotification(null)}
              className="text-gray-400 hover:text-gray-600"
            >
              <PiX className="w-4 h-4" />
            </button>
          </div>
          <p className="text-gray-600">{selectedNotification.details}</p>
        </div>
      )}
    </motion.div>
  );
}