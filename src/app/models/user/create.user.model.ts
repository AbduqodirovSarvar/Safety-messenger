export interface CreateUserRequest {
    FirstName: string;
    LastName: string;
    Email: string;
    ConfirmCode: string;
    Password: string;
    ConfirmPassword: string;
    Photo?: File | null;
  }