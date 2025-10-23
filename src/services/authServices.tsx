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

export const signupUser = async (data: {
  name: string;
  email: string;
  password: string;
}) => {
  const response = await api.post("/api/auth/signup", data);
  return response.data;
};