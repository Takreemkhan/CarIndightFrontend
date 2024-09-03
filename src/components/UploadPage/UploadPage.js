// src/components/UploadPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { api } from '../../App';
const UploadPage = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    setSelectedFiles(Array.from(event.target.files));
  };

  const handleUpload = async () => {
    const storedData = {
      phoneNumber: localStorage.getItem('phoneNumber'),
      carNumber: localStorage.getItem('carNumber'),
      brandName: localStorage.getItem('brandName'),
      year: localStorage.getItem('year'),
      model: localStorage.getItem('model'),
      ownership: localStorage.getItem('ownership'),
      km: localStorage.getItem('km'),
      city: localStorage.getItem('city'),
      price: localStorage.getItem('sellingPrice'),
      photo: []  // Placeholder for photo URLs
    };

    // Upload photos and update storedData with URLs
    if (selectedFiles.length > 0) {
      const formData = new FormData();
      selectedFiles.forEach((file) => formData.append('photos', file));
      try {
        const uploadResponse = await axios.post(`${api}/api/uploadPhotos`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        storedData.photo = uploadResponse.data.urls; // Assuming your API returns URLs of uploaded photos
      } catch (error) {
        console.error('Error uploading photos:', error);
      }
    }

    // Send the data to the server
    try {
      await axios.post('http://localhost:3001/api/saveCarListing', storedData);
      navigate('/submit');
    } catch (error) {
      console.error('Error saving car listing:', error);
    }
  };

  return (
    <div style={styles.outerShadowContainer}>
      <div style={styles.container}>
        <div style={styles.uploadSection}>
          {selectedFiles.length === 0 ? (
            <label style={styles.button}>
              Insert Photo +
              <input
                type="file"
                multiple
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />
            </label>
          ) : (
            <>
              <div style={styles.previewContainer}>
                {selectedFiles.map((file, index) => (
                  <img
                    key={index}
                    src={URL.createObjectURL(file)}
                    alt={`preview ${index}`}
                    style={styles.imagePreview}
                  />
                ))}
              </div>
              <button style={styles.uploadButton} onClick={handleUpload}>
                Upload Photo
              </button>
            </>
          )}
        </div>

        <div style={styles.tipsContainer}>
          <h3 style={styles.tipsTitle}>Tips for photos</h3>
          <ul style={styles.tipsList}>
            <li><span style={styles.tick}>&#10003;</span> Click multiple photos & cover 360 of car</li>
            <li><span style={styles.tick}>&#10003;</span> Use a good high-resolution camera</li>
            <li><span style={styles.tick}>&#10003;</span> Make sure it's under natural light</li>
            <li><span style={styles.tick}>&#10003;</span> Try avoiding another car in the background</li>
            <li><span style={styles.tick}>&#10003;</span> Avoid any reflection or shadow</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const styles = {
  outerShadowContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '90vh',
    backgroundColor: '#f0f4f8',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  },
  uploadSection: {
    marginBottom: '20px',
  },
  button: {
    backgroundColor: '#ff6600',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  uploadButton: {
    backgroundColor: 'green',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '10px',
  },
  previewContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    marginBottom: '10px',
  },
  imagePreview: {
    width: '80px',
    height: '80px',
    objectFit: 'cover',
    borderRadius: '5px',
    border: '1px solid #ddd',
  },
  tipsContainer: {
    padding: '20px',
    backgroundColor: '#e6f7ff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    width: '100%',
    textAlign: 'center',
  },
  tipsTitle: {
    marginBottom: '10px',
    color: '#333',
  },
  tipsList: {
    listStyleType: 'none',
    padding: '0',
    color: '#555',
    textAlign: 'left',
  },
  tick: {
    color: 'green',
    marginRight: '8px',
  },
};

export default UploadPage;
