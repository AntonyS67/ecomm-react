import { useState } from "react";
import { getMeApi } from "../api/user";

export async function useUser() {
  const getME = async (token) => {
    try {
      const response = await getMeApi(token);
      return response;
    } catch (error) {
      throw error;
    }
  };

  return {
      getME
  }
}
