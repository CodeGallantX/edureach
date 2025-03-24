import { useEffect, useState } from "react";
import { PiX } from "react-icons/pi";

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [selectedNotification, setSelectedNotification] = useState(null); // To show details

  useEffect(() => {
    // Let's add some fun details to our notifications!
    const simulatedNotifications = [
      {
        id: 1,
        message: "Welcome to Edureach!",
        details: "We're so happy to have you here! Get ready to learn and have fun!",
        viewed: false,
      },
      {
        id: 2,
        message: "New course: Learn to Draw Cute Animals!",
        details: "Join our new drawing course and learn to draw adorable animals in just a few lessons!",
        viewed: false,
      },
      {
        id: 3,
        message: "Your coding project is almost done!",
        details: "You're doing great! Just a few more steps and your coding project will be finished.",
        viewed: false,
      },
      {
        id: 4,
        message: "Time for your daily puzzle!",
        details: "Challenge your brain with today's fun puzzle! It's a great way to learn and have fun at the same time!",
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
      setSelectedNotification(null); // Clear details if notification is deleted
    }
  };

  const handleNotificationClick = (notification) => {
    setSelectedNotification(notification);
    markAsViewed(notification.id);
  };

  return (
    <div className="p-4 max-w-lg mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Notifications</h2>
      {notifications.length === 0 ? (
        <p>No notifications</p>
      ) : (
        <ul>
          {notifications.map(({ id, message, viewed, details }) => (
            <li
              key={id}
              className={`p-2 mb-2 border rounded flex justify-between items-center cursor-pointer ${viewed ? "text-gray-500" : "text-black"}`}
              onClick={() => handleNotificationClick({ id, message, details })}
            >
              <span>{message}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  deleteNotification(id);
                }}
              >
                <PiX className="text-red-500 w-5 h-5" />
              </button>
            </li>
          ))}
        </ul>
      )}
      {selectedNotification && (
        <div className="mt-4 p-4 border rounded">
          <h3 className="text-lg font-semibold">{selectedNotification.message}</h3>
          <p className="mt-2">{selectedNotification.details}</p>
        </div>
      )}
    </div>
  );
}