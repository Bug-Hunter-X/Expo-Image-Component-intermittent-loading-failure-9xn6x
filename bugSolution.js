```javascript
import React, { useState, useEffect } from 'react';
import { Image } from 'expo-image';

const MyComponent = () => {
  const [imageUrl, setImageUrl] = useState('https://example.com/image.jpg');  // Replace with your image URL
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImg = async () => {
      try {
        // Simulate intermittent failure for demonstration
        // Replace with your actual image loading logic
        await new Promise(resolve => setTimeout(resolve, 1000));
        if (Math.random() < 0.5) {
          throw new Error('Image loading failed');
        }
        setLoading(false);
        setError(null);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    loadImg();
  }, [imageUrl]);

  if (error) {
    return <Text>Error loading image: {error.message}</Text>;
  }

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <Image source={{ uri: imageUrl }} style={{ width: 200, height: 200 }} />
  );
};

export default MyComponent;
```