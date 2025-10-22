import api from "@/lib/axios";

export interface loginData {
  email: string;
  password: string;
}

export interface signupData {
  name: string;
  email: string;
  password: string;
}

// login services

export const loginUser = async (data: loginData) => {
  try {
    const response = await api.post("/api/auth/login", data);
    response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error logging in");
  }
};

// signup services

export const signupUser = async (data: signupData) => {
  try {
    const response = await api.post("/api/auth/signup", data);
    response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error signing up");
  }
};