import { useState, useEffect } from "react";
import Sidebar from "../../components/dashboard/Sidebar";
import Header from "../../components/dashboard/Header";
import Banner from "../../components/dashboard/Banner";
import TawkToChat from "../../components/TawkToChat"
import { FiUpload, FiEdit, FiTrash2, FiPlus } from "react-icons/fi";
import { PiX } from "react-icons/pi";

const page = {
  title: "My Library",
  description: "Manage your time, track your learning progress"
};

// Library Item Component
const LibraryItem = ({ item, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col md:flex-row justify-between items-start md:items-center">
      <div className="flex items-center space-x-4 mb-4 md:mb-0">
        <div className="w-16 h-16 bg-gray-200 rounded-md overflow-hidden">
          {item.avater_image && (
            <img 
              src={item.avater_image} 
              alt={item.resourceName} 
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <div>
          <h3 className="font-semibold text-lg">{item.resourceName}</h3>
          <p className="text-gray-500 text-sm">Uploaded: {new Date(item.createdAt).toLocaleDateString()}</p>
        </div>
      </div>
      <div className="flex space-x-2">
        <button 
          onClick={() => onEdit(item)}
          className="p-2 bg-deepBlue text-white rounded-md scale transition-colors"
        >
          <FiEdit />
        </button>
        <button 
          onClick={() => onDelete(item._id)}
          className="p-2 bg-red-100 text-red-600 rounded-md hover:bg-red-200 transition-colors"
        >
          <FiTrash2 />
        </button>
      </div>
    </div>
  );
};

// Library Form Component
const LibraryForm = ({ onClose, onSubmit, initialData }) => {
  const [formData, setFormData] = useState({
    resourceName: initialData?.resourceName || "",
    avater_image: null,
    subject_file: null
  });
  const [previewImage, setPreviewImage] = useState(initialData?.avater_image || null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (e.target.name === "avater_image") {
        setPreviewImage(URL.createObjectURL(file));
      }
      setFormData(prev => ({ ...prev, [e.target.name]: file }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await onSubmit(formData);
      onClose();
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">
            {initialData ? "Edit Resource" : "Add New Resource"}
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <PiX />
          </button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Resource Name
            </label>
            <input
              type="text"
              name="resourceName"
              value={formData.resourceName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Cover Image
            </label>
            <div className="flex items-center space-x-4">
              {previewImage && (
                <div className="w-16 h-16 rounded-md overflow-hidden">
                  <img 
                    src={previewImage} 
                    alt="Preview" 
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <label className="cursor-pointer">
                <div className="p-2 border border-dashed border-gray-300 rounded-md flex items-center space-x-2">
                  <FiUpload />
                  <span>Upload Image</span>
                </div>
                <input
                  type="file"
                  name="avater_image"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
            </div>
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Subject File
            </label>
            <label className="cursor-pointer">
              <div className="p-2 border border-dashed border-gray-300 rounded-md flex items-center space-x-2">
                <FiUpload />
                <span>Upload File</span>
              </div>
              <input
                type="file"
                name="subject_file"
                onChange={handleFileChange}
                className="hidden"
                required={!initialData}
              />
            </label>
          </div>
          
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-2 bg-deepBlue text-white rounded-md disabled:bg-blue-400"
            >
              {isSubmitting ? "Processing..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const LibraryPage = () => {
  const [libraryItems, setLibraryItems] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const userId = "67d7f017a5ae292bf9248e5d"; // Replace with actual user ID

  // Fetch library items
  useEffect(() => {
    const fetchLibraryItems = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await fetch(`https://e-sdg.onrender.com/api/library-items/${userId}`);
        const data = await response.json();
        setLibraryItems(data);
      } catch (error) {
        console.error("Error fetching library items:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchLibraryItems();
  }, [userId]);

  const handleCreate = async (formData) => {
    const data = new FormData();
    data.append("userId", userId);
    data.append("resourceName", formData.resourceName);
    if (formData.avater_image) data.append("avater_image", formData.avater_image);
    if (formData.subject_file) data.append("subject_file", formData.subject_file);

    const response = await fetch("https://e-sdg.onrender.com/api/fileUpload", {
      method: "POST",
      body: data
    });

    if (response.ok) {
      // Refresh library items
      const updatedItems = await fetch(`https://e-sdg.onrender.com/api/library-items/${userId}`).then(res => res.json());
      setLibraryItems(updatedItems);
    }
  };

  const handleUpdate = async (formData) => {
    const data = new FormData();
    if (formData.subject_file) data.append("subject_file", formData.subject_file);
    if (formData.avater_image) data.append("avater_image", formData.avater_image);

    const response = await fetch(`https://e-sdg.onrender.com/api/update-library/${currentItem._id}`, {
      method: "PUT",
      body: data
    });

    if (response.ok) {
      // Refresh library items
      const updatedItems = await fetch(`https://e-sdg.onrender.com/api/library-items/${userId}`).then(res => res.json());
      setLibraryItems(updatedItems);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this resource?")) {
      const response = await fetch(`https://e-sdg.onrender.com/api/deleted-library-file/${id}`, {
        method: "DELETE"
      });

      if (response.ok) {
        setLibraryItems(libraryItems.filter(item => item._id !== id));
      }
    }
  };

  const openEditForm = (item) => {
    setCurrentItem(item);
    setIsFormOpen(true);
  };

  const handleFormSubmit = (formData) => {
    if (currentItem) {
      return handleUpdate(formData);
    } else {
      return handleCreate(formData);
    }
  };

  return (
    <div className="flex">
        <TawkToChat />
      {/* Fixed Sidebar */}
      <div className="fixed h-full">
        <Sidebar />
      </div>
      
      {/* Main content with padding to account for the fixed sidebar */}
      <div className="w-full flex flex-col items-start justify-start space-y-2 bg-ash ml-0 lg:ml-[250px] min-h-screen">
        <Header />
        <div className="pt-20 w-full">        
        <Banner page={page} />
        
        <div className="w-full p-4 md:p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">My Resources</h2>
            <button
              onClick={() => {
                setCurrentItem(null);
                setIsFormOpen(true);
              }}
              className="flex items-center space-x-2 bg-deepBlue text-white px-4 py-2 rounded-md scale-110"
            >
              <FiPlus />
              <span>Add Resource</span>
            </button>
          </div>
          
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-deepBlue"></div>
            </div>
          ) : libraryItems.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <p className="text-gray-500">No resources found. Add your first resource!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {libraryItems.map(item => (
                <LibraryItem
                  key={item._id}
                  item={item}
                  onEdit={openEditForm}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          )}
        </div>
        </div>
      </div>
      
      {isFormOpen && (
        <LibraryForm
          onClose={() => {
            setIsFormOpen(false);
            setCurrentItem(null);
          }}
          onSubmit={handleFormSubmit}
          initialData={currentItem}
        />
      )}
    </div>
  );
};

export default LibraryPage;