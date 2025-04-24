
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { LogOut } from "lucide-react";

const loginSchema = z.object({
  email: z.string().email("Email invalide"),
  password: z.string().min(6, "Mot de passe trop court (6 caractères minimum)"),
});

const registerSchema = z.object({
  name: z.string().min(2, "Nom trop court"),
  email: z.string().email("Email invalide"),
  password: z.string().min(6, "Mot de passe trop court (6 caractères minimum)"),
  confirmPassword: z.string().min(6, "Mot de passe trop court (6 caractères minimum)"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Les mots de passe ne correspondent pas",
  path: ["confirmPassword"],
});

export const LoginForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState<{name?: string; email?: string} | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();
  
  // Check if user is already logged in
  useEffect(() => {
    const user = localStorage.getItem('frg-user');
    if (user) {
      try {
        const parsedUser = JSON.parse(user);
        if (parsedUser.isLoggedIn) {
          setIsLoggedIn(true);
          setUserData(parsedUser);
        }
      } catch (e) {
        console.error("Error parsing user data", e);
      }
    }
  }, []);
  
  const loginForm = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  
  const registerForm = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  
  const onLoginSubmit = (values: z.infer<typeof loginSchema>) => {
    console.log("Login values:", values);
    
    // Check if user exists in localStorage
    const users = JSON.parse(localStorage.getItem('frg-users') || '[]');
    const user = users.find((u: any) => u.email === values.email);
    
    if (user && user.password === values.password) {
      // Store logged in state
      localStorage.setItem('frg-user', JSON.stringify({
        name: user.name,
        email: user.email,
        isLoggedIn: true
      }));
      
      toast({
        title: "Connexion réussie",
        description: "Bienvenue sur PRONOS STATS EMPIRE!",
      });
      
      // Redirect to home or VIP page
      navigate("/vip");
    } else {
      toast({
        title: "Erreur de connexion",
        description: "Email ou mot de passe incorrect",
        variant: "destructive"
      });
    }
  };
  
  const onRegisterSubmit = (values: z.infer<typeof registerSchema>) => {
    console.log("Register values:", values);
    
    // Get existing users or initialize empty array
    const users = JSON.parse(localStorage.getItem('frg-users') || '[]');
    
    // Check if user already exists
    if (users.some((user: any) => user.email === values.email)) {
      toast({
        title: "Erreur d'inscription",
        description: "Cet email est déjà utilisé",
        variant: "destructive"
      });
      return;
    }
    
    // Save new user
    users.push({
      name: values.name,
      email: values.email,
      password: values.password,
    });
    localStorage.setItem('frg-users', JSON.stringify(users));
    
    // Auto login after registration
    localStorage.setItem('frg-user', JSON.stringify({
      name: values.name,
      email: values.email,
      isLoggedIn: true
    }));
    
    toast({
      title: "Compte créé avec succès",
      description: "Bienvenue sur PRONOS STATS EMPIRE!",
    });
    
    // Redirect to VIP page
    navigate("/vip");
  };
  
  const handleLogout = () => {
    localStorage.removeItem('frg-user');
    setIsLoggedIn(false);
    setUserData(null);
    toast({
      title: "Déconnexion réussie",
      description: "À bientôt sur PRONOS STATS EMPIRE!",
    });
    navigate("/");
  };

  if (isLoggedIn && userData) {
    return (
      <div className="max-w-md mx-auto mt-16 p-6 bg-white rounded-lg shadow-lg animate-fade-in">
        <div className="mb-8 flex justify-center">
          <img 
            src="/lovable-uploads/ee4bcac4-2828-45d7-9260-48755b1e641e.png" 
            alt="PRONOS STATS EMPIRE Logo" 
            className="h-20 w-20 animate-bounce"
          />
        </div>
        
        <h2 className="text-2xl font-bold mb-6 text-center">Profil</h2>
        
        <div className="space-y-4 text-center">
          <h3 className="text-xl font-semibold">Bienvenue, {userData.name}!</h3>
          <p className="text-gray-600">{userData.email}</p>
          
          <div className="pt-4 border-t">
            <Button 
              onClick={handleLogout}
              className="w-full bg-red-600 hover:bg-red-700 flex items-center justify-center gap-2"
            >
              <LogOut size={16} /> Se déconnecter
            </Button>
          </div>
          
          <div className="pt-4">
            <Button 
              onClick={() => navigate("/vip")}
              className="w-full bg-green-600 hover:bg-green-700"
            >
              Accéder à l'espace VIP
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-16 p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-8 flex justify-center">
        <img 
          src="/lovable-uploads/ee4bcac4-2828-45d7-9260-48755b1e641e.png" 
          alt="PRONOS STATS EMPIRE Logo" 
          className="h-20 w-20 animate-bounce"
        />
      </div>
      
      <h2 className="text-2xl font-bold mb-6 text-center">Mon compte</h2>
      
      <div className="flex border-b mb-6">
        <button 
          onClick={() => setIsLogin(true)} 
          className={`flex-1 py-2 text-center transition-colors ${isLogin ? 'border-b-2 border-green-500 font-semibold' : 'text-gray-500'}`}
        >
          Se connecter
        </button>
        <button 
          onClick={() => setIsLogin(false)} 
          className={`flex-1 py-2 text-center transition-colors ${!isLogin ? 'border-b-2 border-green-500 font-semibold' : 'text-gray-500'}`}
        >
          Créer un compte
        </button>
      </div>
      
      <div className={`transition-all duration-300 transform ${isLogin ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 hidden'}`}>
        <Form {...loginForm}>
          <form onSubmit={loginForm.handleSubmit(onLoginSubmit)} className="space-y-4">
            <FormField
              control={loginForm.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="votreemail@exemple.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={loginForm.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mot de passe</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Mot de passe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
              Se connecter
            </Button>
          </form>
        </Form>
        <div className="mt-4 text-center">
          <a href="#" className="text-sm text-green-600 hover:underline">Mot de passe oublié?</a>
        </div>
      </div>
      
      <div className={`transition-all duration-300 transform ${!isLogin ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 hidden'}`}>
        <Form {...registerForm}>
          <form onSubmit={registerForm.handleSubmit(onRegisterSubmit)} className="space-y-4">
            <FormField
              control={registerForm.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom</FormLabel>
                  <FormControl>
                    <Input placeholder="Votre nom" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={registerForm.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="votreemail@exemple.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={registerForm.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mot de passe</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Mot de passe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={registerForm.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirmer mot de passe</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Confirmer mot de passe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
              Créer un compte
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};
