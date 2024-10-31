// src/app/metadata.ts

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000";

export const metadata = {
  metadataBase: new URL(BASE_URL),
};
