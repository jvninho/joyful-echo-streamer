
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
    return email === "diomande.ble@laposte.net" && password === "Ble@94";
  };

  return { isLoggedIn, isAdmin, checkAdminCredentials };
};
