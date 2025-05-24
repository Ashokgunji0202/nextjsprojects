import { useUser } from "@clerk/nextjs";

export const useUserRole = () => {
    const { user } = useUser();
    // return user?.publicMetadata.role;
    return user?.publicMetadata.role === "admin";
};