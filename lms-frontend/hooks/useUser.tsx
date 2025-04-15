"use client";

import axios from "axios";
import { useEffect, useState } from "react";

interface User {
    _id: string; // Assuming _id is a string
    name: string;
    email: string;
    role: string;
    userProgress: []
    // Add other properties as needed
}

export default function useUser() {
    const [user, setUser] = useState<User | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState(true);

    const fetchUser = async () => {
        setLoading(true);
        try {
            const res = await axios.get('/api/user/user-details')
            setUser(res.data.user);
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err); // Set the error if it's an instance of Error
            } else {
                setError(new Error("An unknown error occurred")); // Fallback for non-Error objects
            }
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchUser()
    }, []);

    return { user, error, loading }
}