import axios from 'axios';

export const fetchLockers = async (query) => {
  const url = `https://sameday.ro/wp/wp-admin/admin-ajax.php?action=get_lockers_request&search=${encodeURIComponent(query)}`;
  
  try {
    const response = await axios.get(url);
    return response.data; // Assuming the response data is the format you need
  } catch (error) {
    throw new Error('Failed to fetch lockers:', error);
  }
};

