"use server"
/* eslint-disable @typescript-eslint/no-explicit-any */

import jwt, { JwtPayload } from "jsonwebtoken";
import { getCookie } from "./auth.service";

export const getUserInfo = async (): Promise<any> => {
    try {

        // Get access token from cookies
        const accessToken = await getCookie("accessToken");

        if (!accessToken) {
            console.log("❌ No access token found");
            return null;
        }
        // Decode token to get user info
        const decoded = jwt.decode(accessToken) as JwtPayload | null;
        if (!decoded) {
            console.log("❌ Failed to decode token");
            return null;
        }
        const userInfo = {
            email: decoded.email,
            role: decoded.role,
        };
        console.log("userInfo", userInfo)
        return userInfo

    } catch (error: any) {
        console.error("❌ Error getting user info:", error.message);
        return null;
    }
}