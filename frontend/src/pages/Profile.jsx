import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useRef } from "react";
import { useState } from "react";

const Profile = () => {
  const fileRef = useRef(null);
  const [image,setImage] =useState (undefined);
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="font-bold p-10 max-w-auto text-center text-4xl ">
        Profile
      </h1>
      <input type="file" ref={fileRef} hidden accept ='image/*' onChange={(e) => setImage(e.target.files [0])}/>
      {/*
// Craft rules based on data in your Firestore database
// allow write: if firestore.get(
//    /databases/(default)/documents/users/$(request.auth.uid)).data.isAdmin;
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read;
      allow  write:if
      request.resource.size<2 *1024*1024 &&
      requet.resource.conentType.matches('image/.*')
    }
  }
}*/}
      <form className="flex flex-col">
        <img
          src={currentUser.photo}
          alt="profile"
          className="h-24 w-24 self-center object-cover cursor-pointer rounded-full "
          onClick={() => fileRef.current.click()}
        />
        <input
          defaultValue={currentUser.name}
          type="username"
          placeholder="username"
          id="username"
          className="bg-gray-300 p-3 max-w-auto my-5 rounded-lg "
        />
        <input
          defaultValue={currentUser.email}
          
          className="bg-gray-300 p-3 max-w-auto  rounded-lg "
        />
        
        
      </form>
      <div className="flex justify-between mt-3">
        <span className="text-red-800">Delete Account</span>
        <span className="text-red-800">Sign-out </span>
      </div>
    </div>
  );
};

export default Profile;