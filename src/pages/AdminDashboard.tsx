
import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Loader2 } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

interface UserData {
  name: string;
  email: string;
  lastLogin: string;
  subscription?: {
    plan_type: string;
    status: string;
    start_date: string;
    end_date?: string;
  };
}

const AdminDashboard = () => {
  const [users, setUsers] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(true);
  const { isAdmin } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    try {
      setLoading(true);
      // Récupérer tous les utilisateurs du localStorage
      const rawUsers = localStorage.getItem('frg-users');
      const registeredUsers = rawUsers ? JSON.parse(rawUsers) : [];
      
      const formattedUsers = registeredUsers.map((user: any) => ({
        name: user.name || 'Utilisateur',
        email: user.email || 'Email inconnu',
        lastLogin: user.lastLogin || 'Jamais connecté',
        subscription: user.subscription || {
          plan_type: 'Gratuit',
          status: 'inactif',
          start_date: '-',
        }
      }));

      setUsers(formattedUsers);
    } catch (error) {
      console.error("Erreur lors de la récupération des utilisateurs:", error);
      toast({
        title: "Erreur",
        description: "Impossible de charger les utilisateurs",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (!isAdmin()) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <p className="text-xl text-red-500">Accès non autorisé</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-black/70 rounded-lg p-6"
        >
          <h1 className="text-3xl font-bold mb-8 text-green-500">Dashboard Administrateur</h1>
          
          {loading ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="h-8 w-8 animate-spin text-green-500" />
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-green-400">Nom</TableHead>
                    <TableHead className="text-green-400">Email</TableHead>
                    <TableHead className="text-green-400">Dernière connexion</TableHead>
                    <TableHead className="text-green-400">Abonnement</TableHead>
                    <TableHead className="text-green-400">Statut</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user, index) => (
                    <TableRow key={index}>
                      <TableCell className="text-green-400">{user.name}</TableCell>
                      <TableCell className="text-green-400">{user.email}</TableCell>
                      <TableCell className="text-green-400">{user.lastLogin}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-green-900 text-green-400 border-green-500">
                          {user.subscription?.plan_type || "Aucun"}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" 
                          className={`${
                            user.subscription?.status === 'active' 
                              ? 'bg-green-900 text-green-400' 
                              : 'bg-red-900 text-red-400'
                          } border-green-500`}
                        >
                          {user.subscription?.status || "Inactif"}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
