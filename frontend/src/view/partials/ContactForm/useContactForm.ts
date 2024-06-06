import { useState } from "react";
import { ContactFormValues } from "../../../data/@types/ContactFormValues/ContactFormValues.type";
import { FormFetch } from "../../../data/services/axios/config";
import swal from "sweetalert2";

export function useContactForm() {
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
            swal.fire({
                position: "center",
                icon: "success",
                title: "Sua Mensagem foi enviada com sucesso!",
                showConfirmButton: false,
                timer: 1500,
            });
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };
    return {
        loading,
        handleContact
    }
}