const getUser = async (username) => {
    try {
        const response = await fetch(`/api/bios/${username}`);
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const data = await response.json();
        return data;
    } catch (error) {
      console.error('Error fetching user data:', error);
      throw error;
    }
};
const userService = {
    getUser
  };

export default  userService;
