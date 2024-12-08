import { User } from "../user/user.model";

export interface LoginRequest {
    email: string;
    password: string;
  }

export interface LoginResponse {
    user: User;
    accessToken: string;
  }