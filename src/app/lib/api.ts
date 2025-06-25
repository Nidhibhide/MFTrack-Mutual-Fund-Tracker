import axios from "axios";

//api calls
export const registerUser = async (data: any) => {
  try {
    const response = await axios.post("/api/register", data);
    return response.data;
  } catch (error: any) {
    console.log(error);
  }
};

export const loginUser = async (data: any) => {
  try {
    const response = await axios.post("/api/login", data);
    return response.data;
  } catch (error: any) {
    console.log(error);
  }
};
