import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useState } from "react";  // Import useState

import { useNavigate } from "react-router-dom";
import AuthService from "../../@api/auth.service";
import { TextInput } from "../../shared/Inputs/TextInput";

interface AuthLoginForm {
    username: string;
    password: string;
}

export const Auth = () => {
    const navigate = useNavigate();

    const initialValues = {
        username: "",
        password: "",
    };

    const [error, setError] = useState(""); // Add error state variable and setter

    const validationSchema = Yup.object({
        username: Yup.string().required("Введите ваш логин"),
        password: Yup.string().required("Введите ваш пароль"),
    });

    const handleSubmit = async (values: AuthLoginForm) => {
        try {
            const response = await AuthService.login(values);
            console.log(response);
            localStorage.setItem("apiKey", response.access_token);
            navigate("/cost-estimate");
        } catch (error) {
            console.error(error);
            setError("Неверный логин или пароль");
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        >
            <Form className="min-h-screen flex justify-center items-center">
                <div className="py-10 px-10 bg-bg-block flex flex-col gap-3 rounded-main justify-center">
                    <div className="w-80 flex flex-col">
                        <label htmlFor="username" className="mb-2 font-medium">Корпоративная почта</label>
                        <TextInput name="username" placeholder="Логин" />
                        <label htmlFor="password" className="mb-2 font-medium">Пароль</label>
                        <TextInput name="password" placeholder="Пароль" type="password" />
                    </div>
                    {error && <div className="text-red-500">{error}</div>}
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                    >
                        Вход
                    </button>
                </div>

            </Form>
        </Formik>
    );
};
