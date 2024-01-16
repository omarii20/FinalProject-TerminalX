export interface LoginCredentials {
  username: string;
  password: string;
}

export const BuildLoginRequest = (username: string, password: string): LoginCredentials => {
    return {
        username: username,
        password: password,
    };
};
