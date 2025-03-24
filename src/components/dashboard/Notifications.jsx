import { useEffect, useState } from "react";
import { PiX, PiTrash, PiInfo } from "react-icons/pi";
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
        icon: "🎓",
      },
      {
        id: 2,
        message: "New course available: Learn Salsa Dancing!",
        details: "Start dancing salsa in 3 weeks! Check it out now.",
        viewed: false,
        icon: "💃",
      },
      {
        id: 3,
        message: "Your course progress: 85% completed!",
        details: "You're almost there! Keep up the good work.",
        viewed: false,
        icon: "📈",
      },
      {
        id: 4,
        message: "Don't forget your daily quiz!",
        details: "Complete your daily quiz to keep your learning streak going.",
        viewed: false,
        icon: "🧠",
      },
    ];
    setNotifications(simulatedNotifications);
  }, []);

  const markAsViewed = async (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, viewed: true } : n))
    );
    onMarkAsRead();
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
    <>
      {/* Notifications Panel */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="w-80 max-h-[70vh] bg-white shadow-xl rounded-lg border border-gray-200 overflow-hidden"
      >
        <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
          <h2 className="text-lg font-bold">Notifications</h2>
          <button 
            onClick={onClose} 
            className="p-1 rounded-full hover:bg-gray-200 transition-colors"
          >
            <PiX className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {notifications.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center p-8 text-gray-500"
          >
            <PiInfo className="text-4xl mb-3 text-gray-300" />
            <p>No notifications</p>
          </motion.div>
        ) : (
          <ul className="divide-y divide-gray-100 overflow-y-auto max-h-[calc(70vh-56px)]">
            <AnimatePresence>
              {notifications.map(({ id, message, viewed, details, icon }) => (
                <motion.li
                  key={id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.2 }}
                  className={`hover:bg-gray-50 cursor-pointer ${viewed ? "bg-white" : "bg-blue-50"}`}
                >
                  <div 
                    className="p-3 flex items-start"
                    onClick={() => handleNotificationClick({ id, message, details, icon })}
                  >
                    <span className="text-2xl mr-3">{icon}</span>
                    <div className="flex-1">
                      <p className={`${viewed ? "text-gray-600" : "font-medium text-gray-900"}`}>
                        {message}
                      </p>
                      {!viewed && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="mt-1 h-1.5 w-1.5 bg-blue-500 rounded-full"
                        />
                      )}
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteNotification(id);
                      }}
                      className="ml-2 p-1 text-gray-400 hover:text-red-500 rounded-full hover:bg-red-50"
                    >
                      <PiTrash className="w-4 h-4" />
                    </button>
                  </div>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        )}
      </motion.div>

      {/* Notification Detail Modal */}
      <AnimatePresence>
        {selectedNotification && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 20 }}
              className="bg-white rounded-xl max-w-md w-full p-6 shadow-2xl"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-start">
                  <span className="text-3xl mr-3">
                    {selectedNotification.icon}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900">
                    {selectedNotification.message}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedNotification(null)}
                  className="p-1 rounded-full hover:bg-gray-200"
                >
                  <PiX className="w-5 h-5 text-gray-500" />
                </button>
              </div>
              <p className="text-gray-600 pl-11 mb-6">
                {selectedNotification.details}
              </p>
              <div className="flex justify-end">
                <button
                  onClick={() => {
                    setSelectedNotification(null);
                    onClose();
                  }}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}