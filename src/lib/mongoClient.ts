
import { MongoClient } from 'mongodb';

// Pour ne pas exposer les identifiants de connexion dans le code, nous utilisons
// des variables d'environnement ou une approche sécurisée
// ⚠️ N'utilisez PAS directement les identifiants dans le code source ⚠️
// Nous allons utiliser une approche intermédiaire pour le développement,
// mais ceci devrait être remplacé par une approche plus sécurisée en production

// Astuce: Utilisez un .env local ou définissez ces variables dans votre environnement
// de déploiement pour plus de sécurité
let MONGODB_URI = '';

// Cette fonction sera appelée avec les paramètres nécessaires
// uniquement au moment de la connexion
export const initializeMongoClient = (uri: string): MongoClient => {
  MONGODB_URI = uri;
  return new MongoClient(MONGODB_URI);
};

// Client MongoDB singleton
let client: MongoClient | null = null;

// Fonction pour obtenir le client MongoDB
export async function getMongoClient(): Promise<MongoClient> {
  if (!client) {
    if (!MONGODB_URI) {
      throw new Error("La connexion MongoDB n'a pas été initialisée. Appelez initializeMongoClient d'abord.");
    }
    
    client = new MongoClient(MONGODB_URI);
    await client.connect();
    console.log("Connecté à MongoDB avec succès");
  }
  
  return client;
}

// Fonction pour obtenir une collection MongoDB
export async function getCollection(dbName: string, collectionName: string) {
  const client = await getMongoClient();
  const db = client.db(dbName);
  return db.collection(collectionName);
}

// Interface pour les utilisateurs
export interface UserProfile {
  id: string;
  user_id: string;
  full_name: string;
  is_admin: boolean;
  created_at: Date;
}

// Interface pour les abonnements
export interface Subscription {
  id: string;
  user_id: string;
  plan_type: string;
  status: string;
  start_date: Date;
  end_date: Date | null;
  created_at: Date;
}
