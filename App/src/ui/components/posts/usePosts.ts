import { useState, useCallback, useEffect } from "react";
import { PostType } from "../../../data/@types/Post/Post.type";
import { api } from "../../../data/services/api";

export function usePosts(searchTerm: string) {
    const [postFilter, setPostFilter] = useState<PostType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const getPostsFilter = async (searchTerm: string) => {
        try {
            const userToken = await localStorage.getItem("userToken");

            if (userToken) {
                api.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;
                const response = await api.get(
                    `/items/search?searchTerm=${searchTerm}`
                );

                return response.data;
            }
        } catch (error) {
            console.error("Erro ao pegar dados de Posts:", error);
            throw error;
        }
    };


    const fetchPostsFilter = useCallback(async () => {
        setLoading(true);
        try {
            const response = await getPostsFilter(searchTerm);
            const reversedPosts = response.reverse();
            setPostFilter(reversedPosts);
        } catch (error) {
            console.error("Erro ao buscar os posts:", error);
        } finally {
            setLoading(false);
        }
    }, [searchTerm]);

    useEffect(() => {
        fetchPostsFilter();
    }, [fetchPostsFilter]);

    return {
        loading,
        postFilter
    }
}