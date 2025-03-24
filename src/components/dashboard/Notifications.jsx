import { useEffect, useState } from "react";
import { PiX } from "react-icons/pi";
import { motion, AnimatePresence } from "framer-motion";

export default function Notifications() {
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
      {
        id: 3,
        message: "Your course progress: 85% completed!",
        details: "You're almost there! Keep up the good work.",
        viewed: false,
      },
      {
        id: 4,
        message: "Don't forget your daily quiz!",
        details: "Complete your daily quiz to keep your learning streak going.",
        viewed: false,
      },
    ];
    setNotifications(simulatedNotifications);
  }, []);

  const markAsViewed = async (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, viewed: true } : n))
    );
  };

  const deleteNotification = async (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
    if (selectedNotification && selectedNotification.id === id) {
      setSelectedNotification(null);
    }
  };

  const handleNotificationClick = (notification) => {
    setSelectedNotification(notification);
    markAsViewed(notification.id);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Notifications</h2>
        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
          {notifications.length} new
        </span>
      </div>

      {notifications.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center py-10 text-gray-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 mb-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <p>No notifications</p>
        </motion.div>
      ) : (
        <ul className="space-y-3">
          <AnimatePresence>
            {notifications.map(({ id, message, viewed, details }) => (
              <motion.li
                key={id}
                layout
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: 50, transition: { duration: 0.2 } }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className={`relative overflow-hidden rounded-xl cursor-pointer transition-all duration-200 ${
                  viewed ? "bg-gray-50" : "bg-blue-50"
                }`}
              >
                <div
                  className={`absolute left-0 top-0 h-full w-1 ${
                    viewed ? "bg-gray-300" : "bg-blue-500"
                  }`}
                ></div>
                <div
                  className="p-4 flex justify-between items-start"
                  onClick={() => handleNotificationClick({ id, message, details })}
                >
                  <div className="flex-1">
                    <p
                      className={`font-medium ${
                        viewed ? "text-gray-600" : "text-gray-900"
                      }`}
                    >
                      {message}
                    </p>
                    {!viewed && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="mt-1 h-2 w-2 bg-blue-500 rounded-full"
                      />
                    )}
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteNotification(id);
                    }}
                    className="ml-3 p-1 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    <PiX className="text-gray-500 hover:text-red-500 w-4 h-4 transition-colors" />
                  </button>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      )}

      <AnimatePresence>
        {selectedNotification && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 bg-blue-50 rounded-xl overflow-hidden"
          >
            <div className="p-4">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold text-gray-800">
                  {selectedNotification.message}
                </h3>
                <button
                  onClick={() => setSelectedNotification(null)}
                  className="ml-2 p-1 rounded-full hover:bg-blue-200 transition-colors"
                >
                  <PiX className="text-gray-500 w-4 h-4" />
                </button>
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="mt-2 text-gray-600"
              >
                {selectedNotification.details}
              </motion.p>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-3 h-1 bg-blue-200 rounded-full"
              >
                <div className="h-full w-full bg-blue-500 rounded-full"></div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}