import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export const registerUser = async (data: any) => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, data);
    return response.data;
  } catch (error: any) {
    console.log(error);
  }
};

export const loginUser = async (data: any) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, data, {
      withCredentials: true,
    });
    return response.data;
  } catch (error: any) {
    console.error("Login error:", error.response?.data || error.message);
    throw error;
  }
};

export const getMe = async () => {
  try {
    const response = await axiosInstance.get("/me");
    return response.data;
  } catch (error: any) {
    console.log(error);
  }
};

export const fundPortfolio = async () => {
  try {
    const response = await fetch(`${BASE_URL}/portfolio`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error("Failed to fetch Funds");
    }
    return response.json();
  } catch (error: any) {
    console.log(error);
  }
};

export const getTransactions = async () => {
  try {
    const response = await fetch(`${BASE_URL}/transactions`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error("Failed to fetch transactions");
    }
    return response.json();
  } catch (error: any) {
    console.log(error);
  }
};
