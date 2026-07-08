import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

import AuthLayout from "../../components/auth/AuthLayout";
import AuthCard from "../../components/auth/AuthCard";
import AuthInput from "../../components/auth/AuthInput";
import PasswordInput from "../../components/auth/PasswordInput";
import AuthButton from "../../components/auth/AuthButton";

import { loginSchema } from "../../validation/authSchema";

import authService from "../../services/authService";
import useAuth from "../../hooks/useAuth";

export default function Login() {

    const navigate = useNavigate();

    const { login } = useAuth();

    const [loading, setLoading] = useState(false);

    const {

        register,

        handleSubmit,

        formState: { errors },

    } = useForm({

        resolver: zodResolver(loginSchema),

        defaultValues: {

            email: "",

            password: "",

        },

    });

    const onSubmit = async (data) => {

    console.log("LOGIN DATA", data);

    try {

        setLoading(true);

        const response = await authService.login(data);

        console.log("LOGIN RESPONSE", response);

        const token = response.data.token;

        const user = response.data.user;

        console.log("TOKEN", token);

        console.log("USER", user);

        login(token, user);

        console.log("LOGIN CONTEXT DONE");

        navigate("/dashboard", { replace: true });

    } catch (error) {

        console.log("LOGIN ERROR");

        console.log(error);

        console.log(error.response);

        toast.error(

            error.response?.data?.message ||

            error.message ||

            "Login Failed"

        );

    } finally {

        setLoading(false);

    }

};

    return (

        <AuthLayout>

            <AuthCard

                title="Welcome Back"

                subtitle="Login to your Broker-X account."

            >

                <form

                    onSubmit={handleSubmit(onSubmit)}

                    className="space-y-6"

                >

                    <AuthInput

                        label="Email"

                        type="email"

                        placeholder="Enter your email"

                        error={errors.email}

                        {...register("email")}

                    />

                    <PasswordInput

                        label="Password"

                        placeholder="Enter your password"

                        error={errors.password}

                        {...register("password")}

                    />

                    <div className="flex justify-end">

                        <Link

                            to="/forgot-password"

                            className="text-sm text-yellow-500 hover:text-yellow-400"

                        >

                            Forgot Password?

                        </Link>

                    </div>

                    <AuthButton

                        type="submit"

                        disabled={loading}

                    >

                        {

                            loading

                                ? "Signing In..."

                                : "Login"

                        }

                    </AuthButton>

                </form>

                <div className="mt-8 text-center text-gray-400">

                    Don't have an account?

                    <Link

                        to="/register"

                        className="ml-2 text-yellow-500 hover:text-yellow-400"

                    >

                        Register

                    </Link>

                </div>

            </AuthCard>

        </AuthLayout>

    );

}