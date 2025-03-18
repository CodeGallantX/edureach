import React from 'react';
import { PiFacebookLogo, PiInstagramLogo, PiLinkedinLogo } from 'react-icons/pi';

const AuthorDetails = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">About the Author</h2>
      <div className="flex items-center space-x-4 mb-4">
        <img
          src="https://placehold.co/80x80" // Replace with your image URL
          alt="Author"
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h3 className="font-semibold">Enoobong George</h3>
          <p className="text-sm text-gray-600">enoobong14nig@yahoo.com</p>
        </div>
      </div>
      <p className="text-gray-700 mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi pariatur laboriosam quaerat molestias quia
        corporis non, fugit et sequi beatae laudantium assumenda, temporibus excepturi quo possimus atque inventore,
        laborum neque?
      </p>
      <div className="flex space-x-4">
        <a href="#" className="bg-blue-500 text-white rounded-full p-2">
          <PiFacebookLogo className="text-xl" />
        </a>
        <a href="#" className="bg-pink-500 text-white rounded-full p-2">
          <PiInstagramLogo className="text-xl" />
        </a>
        <a href="#" className="bg-blue-800 text-white rounded-full p-2">
          <PiLinkedinLogo className="text-xl" />
        </a>
      </div>
    </div>
  );
};

export default AuthorDetails;