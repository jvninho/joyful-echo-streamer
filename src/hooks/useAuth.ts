
export const useAuth = () => {
  const isLoggedIn = () => {
    const user = localStorage.getItem('frg-user');
    if (!user) return false;
    
    try {
      const userData = JSON.parse(user);
      return userData.isLoggedIn === true;
    } catch (e) {
      return false;
    }
  };

  return { isLoggedIn };
};
