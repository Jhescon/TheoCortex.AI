import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please check your .env file.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface ConsultationRequest {
  id: string;
  full_name: string;
  email: string;
  company_name: string;
  service_selection: string;
  problems: string;
  additional_info: string;
  status: 'pending' | 'contacted' | 'scheduled' | 'completed' | 'cancelled';
  created_at: string;
  updated_at: string;
}

export type ConsultationRequestInsert = Omit<ConsultationRequest, 'id' | 'created_at' | 'updated_at' | 'status'> & {
  status?: ConsultationRequest['status'];
};