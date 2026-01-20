import { cookies } from "next/headers";
import crypto from "crypto";

const COOKIE_NAME = "admin_session";
const TOKEN_EXPIRY = 24 * 60 * 60 * 1000; // 24 hours

// In-memory token store (simple approach for single-user admin)
const validTokens: Map<string, number> = new Map();

export function generateToken(): string {
  const token = crypto.randomBytes(32).toString("hex");
  validTokens.set(token, Date.now() + TOKEN_EXPIRY);
  return token;
}

export function validatePassword(password: string): boolean {
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminPassword) {
    console.error("ADMIN_PASSWORD environment variable not set");
    return false;
  }
  return password === adminPassword;
}

export async function validateSession(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;

  if (!token) return false;

  const expiry = validTokens.get(token);
  if (!expiry || Date.now() > expiry) {
    validTokens.delete(token);
    return false;
  }

  return true;
}

export async function setSessionCookie(token: string): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: TOKEN_EXPIRY / 1000,
    path: "/",
  });
}

export async function clearSession(): Promise<void> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (token) {
    validTokens.delete(token);
  }
  cookieStore.delete(COOKIE_NAME);
}
