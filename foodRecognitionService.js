import axios from 'axios';

// This would be your actual API key from a food recognition service
// For example: Calorie Mama API, Nutritionix API, or similar
const API_KEY = 'your-api-key-here';

/**
 * Analyze a food image and return nutritional information
 * @param {String} base64Image - Base64 encoded image data
 * @returns {Promise<Object>} - Food data with nutritional information
 */
export const analyzeFoodImage = async (base64Image) => {
  try {
    // Note: In a real implementation, you would send the image to a real API
    // This is a mock implementation that simulates API behavior
    
    // Simulating API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Mock response for demonstration
    return mockFoodAnalysis();
    
    /* Real API implementation would look like this:
    
    const response = await axios.post('https://api.foodrecognition.com/analyze', {
      image: base64Image,
      api_key: API_KEY
    });
    
    return response.data;
    */
  } catch (error) {
    console.error('Error analyzing food image:', error);
    throw error;
  }
};

/**
 * Generate mock food data for demonstration
 * @returns {Object} - Mock food data
 */
const mockFoodAnalysis = () => {
  // Array of common foods with calorie information
  const foodOptions = [
    { 
      name: 'Apple', 
      calories: 95, 
      protein: '0.5g', 
      carbs: '25g', 
      fat: '0.3g', 
      servingSize: '1 medium apple'
    },
    { 
      name: 'Banana', 
      calories: 105, 
      protein: '1.3g', 
      carbs: '27g', 
      fat: '0.4g', 
      servingSize: '1 medium banana'
    },
    { 
      name: 'Chicken Salad', 
      calories: 320, 
      protein: '28g', 
      carbs: '12g', 
      fat: '18g', 
      servingSize: '1 cup'
    },
    { 
      name: 'Pizza Slice', 
      calories: 285, 
      protein: '12g', 
      carbs: '36g', 
      fat: '10g', 
      servingSize: '1 slice (1/8 of 14" pizza)'
    },
    { 
      name: 'Rice Bowl', 
      calories: 420, 
      protein: '15g', 
      carbs: '68g', 
      fat: '9g', 
      servingSize: '1 bowl'
    },
    { 
      name: 'Hamburger', 
      calories: 540, 
      protein: '25g', 
      carbs: '40g', 
      fat: '29g', 
      servingSize: '1 burger (150g)'
    },
    { 
      name: 'Pasta with Sauce', 
      calories: 380, 
      protein: '14g', 
      carbs: '70g', 
      fat: '8g', 
      servingSize: '1 cup cooked'
    },
    { 
      name: 'Yogurt', 
      calories: 150, 
      protein: '12g', 
      carbs: '17g', 
      fat: '3.8g', 
      servingSize: '1 cup'
    }
  ];
  
  // Pick a random food
  const randomFood = foodOptions[Math.floor(Math.random() * foodOptions.length)];
  
  // Return in the format expected by our app
  return {
    success: true,
    food: {
      ...randomFood,
      confidence: Math.floor(Math.random() * 20 + 80) // Random confidence between 80-99%
    }
  };
};

/**
 * Search for food by name
 * @param {String} query - Food name to search for
 * @returns {Promise<Array>} - Array of matching food items
 */
export const searchFoodByName = async (query) => {
  try {
    // This would be a real API call in production
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Mock food database
    const foodDatabase = [
      { name: 'Apple', calories: 95, servingSize: '1 medium' },
      { name: 'Banana', calories: 105, servingSize: '1 medium' },
      { name: 'Orange', calories: 62, servingSize: '1 medium' },
      { name: 'Chicken Breast', calories: 165, servingSize: '100g' },
      { name: 'Rice', calories: 130, servingSize: '100g cooked' },
      { name: 'Pasta', calories: 131, servingSize: '100g cooked' },
      { name: 'Bread', calories: 265, servingSize: '100g' },
      { name: 'Steak', calories: 271, servingSize: '100g' },
      { name: 'Salmon', calories: 206, servingSize: '100g' },
      { name: 'Egg', calories: 78, servingSize: '1 large' },
    ];
    
    // Filter foods based on query
    if (!query) return foodDatabase;
    
    const results = foodDatabase.filter(food => 
      food.name.toLowerCase().includes(query.toLowerCase())
    );
    
    return results;
  } catch (error) {
    console.error('Error searching for food:', error);
    return [];
  }
}; 