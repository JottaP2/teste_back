"use client";

import { type FormEvent, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

import LogoRocketHeroDark from "@/assets/logos/logo-rocket-hero-dark.svg";

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setError("");
        setIsSubmitting(true);

        const result = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });

        setIsSubmitting(false);

        if (!result || result.error) {
            setError("Email ou senha invalidos.");
            return;
        }

        router.push("/dashboard");
        router.refresh();
    }

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-black p-4">
            <div className="flex flex-col items-center justify-center gap-4 rounded-lg border border-neutral-700/50 bg-neutral-900 p-10">
                <Image src={LogoRocketHeroDark} alt="Logo" width={200} height={200} />
                <h1>Acesso Dashboard</h1>

                <form onSubmit={handleSubmit} className="flex w-full flex-col gap-2 p-4">
                    <div className="mb-4 flex flex-col gap-2">
                        <label htmlFor="email">Email:</label>
                        <input
                            className="rounded-lg border border-gray-600 bg-neutral-800 p-2 text-white placeholder:text-gray-500"
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-4 flex flex-col gap-2">
                        <label htmlFor="password">Senha:</label>
                        <input
                            className="rounded-lg border border-gray-600 bg-neutral-800 p-2 text-white placeholder:text-gray-500"
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            required
                        />
                    </div>

                    {error ? <p className="mb-2 text-sm text-red-400">{error}</p> : null}

                    <button
                        type="submit"
                        className="cursor-pointer rounded bg-red-800 px-4 py-2 font-bold text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Entrando..." : "Login"}
                    </button>
                </form>
            </div>
        </div>
    );
}