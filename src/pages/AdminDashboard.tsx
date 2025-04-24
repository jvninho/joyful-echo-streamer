
import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabaseClient";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Loader2 } from "lucide-react";

interface UserProfile {
  id: string;
  full_name: string;
  email: string;
  created_at: string;
  subscription?: {
    plan_type: string;
    status: string;
    start_date: string;
    end_date: string;
  };
}

const AdminDashboard = () => {
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    checkAdminStatus();
    fetchUsers();
  }, []);

  const checkAdminStatus = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const { data: profile } = await supabase
      .from('user_profiles')
      .select('is_admin')
      .eq('user_id', user.id)
      .single();

    setIsAdmin(profile?.is_admin || false);
  };

  const fetchUsers = async () => {
    try {
      const { data: profiles, error } = await supabase
        .from('user_profiles')
        .select(`
          *,
          users (
            email,
            created_at
          ),
          subscriptions (
            plan_type,
            status,
            start_date,
            end_date
          )
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;

      const formattedUsers = profiles.map((profile: any) => ({
        id: profile.id,
        full_name: profile.full_name,
        email: profile.users.email,
        created_at: new Date(profile.users.created_at).toLocaleDateString('fr-FR'),
        subscription: profile.subscriptions?.[0],
      }));

      setUsers(formattedUsers);
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Impossible de charger les utilisateurs",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (!isAdmin) {
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
                    <TableHead className="text-green-400">Date d'inscription</TableHead>
                    <TableHead className="text-green-400">Abonnement</TableHead>
                    <TableHead className="text-green-400">Statut</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="text-green-400">{user.full_name}</TableCell>
                      <TableCell className="text-green-400">{user.email}</TableCell>
                      <TableCell className="text-green-400">{user.created_at}</TableCell>
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
