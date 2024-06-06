import { useState } from "react";
import { toast } from "react-toastify";
import { ContactFormValues } from "../../../data/@types/ContactFormValues/ContactFormValues.type";
import { FormFetch } from "../../../data/services/axios/config";

export function useContactUSForm() {
    const [loading, setLoading] = useState(false);
    const handleContact = async ({
        Name,
        Email,
        Phone,
        Category,
        Subject,
        Message,
    }: ContactFormValues) => {
        try {
            setLoading(true);
            await FormFetch.post("/contactForm", {
                Name,
                Email,
                Phone,
                Category,
                Subject,
                Message,
            });
            toast.success("E-mail enviado com sucesso");
        } catch (err) {
            toast.error("Erro ao enviar e-mail");
        } finally {
            setLoading(false);
        }
    };

    return {
        loading,
        handleContact
    }
}