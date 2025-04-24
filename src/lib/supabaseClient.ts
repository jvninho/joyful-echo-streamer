
// Ce fichier est conservé pour compatibilité avec le code existant
// mais nous utilisons maintenant MongoDB comme base de données principale
// Voir src/lib/mongoClient.ts pour la nouvelle implémentation

import { createClient } from '@supabase/supabase-js';

// Ces valeurs ne sont pas utilisées car nous avons migré vers MongoDB
const supabaseUrl = 'NOT_USED';
const supabaseAnonKey = 'NOT_USED';

// Création d'un client fictif pour éviter les erreurs dans le code existant
// qui dépend encore de l'importation de supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Note: Ce fichier devrait être progressivement supprimé
// au fur et à mesure que vous migrerez toutes les fonctionnalités vers MongoDB
