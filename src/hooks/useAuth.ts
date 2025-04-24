
interface User {
  email: string;
  password: string;
  isAdmin: boolean;
  isLoggedIn: boolean;
  lastLogin: string;
  name: string;
}

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

  const isAdmin = () => {
    const user = localStorage.getItem('frg-user');
    if (!user) return false;
    
    try {
      const userData = JSON.parse(user);
      return userData.isAdmin === true;
    } catch (e) {
      return false;
    }
  };

  const checkAdminCredentials = (email: string, password: string) => {
    return email === "dio" && password === "Boss@94";
  };

  return { isLoggedIn, isAdmin, checkAdminCredentials };
};
