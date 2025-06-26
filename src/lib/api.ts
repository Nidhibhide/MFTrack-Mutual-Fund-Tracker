import axios from "axios";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
//api calls
export const registerUser = async (data: any) => {
  try {
    const response = await axios.post("/register", data);
    return response.data;
  } catch (error: any) {
    console.log(error);
  }
};

export const loginUser = async (data: any) => {
  try {
    const response = await axios.post("/login", data, {
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
    const response = await axios.get("/me", {
      withCredentials: true,
    });
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
