interface CloudflareEnv {
  // Server-side only. Set DB_API_KEY as an encrypted secret, never as NEXT_PUBLIC_*.
  DB_API_ENDPOINT: string;
  DB_API_KEY: string;
  // The names this project was first set up with; read when DB_* are unset.
  '1DB_API_ENDPOINT'?: string;
  '1DB_API_KEY'?: string;
}
