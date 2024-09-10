import React from 'react';

const user = {
  name: 'Jane Doe',
  username: 'janedoe',
  email: 'janedoe@example.com',
  phone: '+1 (555) 123-4567',
  address: '123 Elm Street, Springfield, IL 62704',
  bio: 'Jane is a passionate web developer with a love for creating interactive and user-friendly web applications. In her free time, she enjoys hiking and exploring new technologies.',
  profilePicture: 'https://randomuser.me/api/portraits/women/50.jpg'
};

export default function PersonalInformation() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-3xl mx-auto">
        <div className="flex flex-col items-center sm:flex-row sm:items-start p-6 bg-gray-800 text-white">
          <img
            src={user.profilePicture}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-gray-200 mb-4 sm:mb-0 sm:mr-6"
          />
          <div className="text-center sm:text-left">
            <h1 className="text-3xl font-semibold">{user.name}</h1>
            <h2 className="text-lg text-gray-400 mt-1">@{user.username}</h2>
          </div>
        </div>
        <div className="p-6 bg-gray-50">
          <dl className="divide-y divide-gray-200">
            <div className="py-4 flex items-center justify-between">
              <dt className="text-sm font-medium text-gray-700">Email</dt>
              <dd className="text-base text-gray-900">{user.email}</dd>
            </div>
            <div className="py-4 flex items-center justify-between">
              <dt className="text-sm font-medium text-gray-700">Phone</dt>
              <dd className="text-base text-gray-900">{user.phone}</dd>
            </div>
            <div className="py-4 flex items-center justify-between">
              <dt className="text-sm font-medium text-gray-700">Address</dt>
              <dd className="text-base text-gray-900">{user.address}</dd>
            </div>
            <div className="py-4 flex items-center justify-between">
              <dt className="text-sm font-medium text-gray-700">Bio</dt>
              <dd className="text-base text-gray-900">{user.bio}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
