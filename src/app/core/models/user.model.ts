export interface LoginRequest {
    username: string;
    password: string;
}

export interface LoginResponse {
    id: number;
    username: string;
    role: string;
    token: string;
}

export interface RegisterRequest {
    username: string;
    password: string;
    role: number;
}

export interface ResetPasswordRequest {
    username: string;
    oldPassword: string;
    newPassword: string;
}