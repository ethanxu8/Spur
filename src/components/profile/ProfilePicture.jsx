import React, { useState } from 'react';

function ProfilePicture() {
  const [profileImage, setProfileImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveImage = () => {
    setProfileImage(previewImage);
    setPreviewImage(null);
  };

  return (
    <div className="profile-picture-container">
      <div className="profile-picture">
        <img
          src={profileImage || 'default-profile.png'}
          alt="Profile"
          className="profile-img"
        />
      </div>
      <input type="file" onChange={handleImageChange} />
      {previewImage && (
        <div className="preview-container">
          <img src={previewImage} alt="Preview" className="preview-img" />
          <button onClick={handleSaveImage}>Save</button>
        </div>
      )}
    </div>
  );
}

export default ProfilePicture;
