import { useState } from "react";
import { logoutApi } from "../api/auth";
import { removeToken } from "../api/token";
import { getMeApi } from "../api/user";

export default function useUser() {
  const getME = async (token) => {
    try {
      const response = await getMeApi(token);
      return response;
    } catch (error) {
      throw error;
    }
  };

  const logout = async (token) => {
    try {
      await logoutApi(token);
      removeToken();
    } catch (error) {
      console.log(error);
    }
  };
  return { getME, logout };
}
