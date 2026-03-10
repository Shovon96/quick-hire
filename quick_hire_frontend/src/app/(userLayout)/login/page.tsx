'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeOff } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import backgroundImage from "../../../../public/assets/background-design.png";
import logoIcon from "../../../../public/assets/logoIcon.png";
import Navbar from '../../components/Navbar';

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setMessage(null);

        if (!email.trim() || !password.trim()) {
            setMessage({ type: 'error', text: 'Please fill in all fields' });
            return;
        }

        try {
            setLoading(true);
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Login failed');
            }

            setMessage({ type: 'success', text: 'Login successful! Redirecting...' });

            // Store token if provided
            if (data.token) {
                localStorage.setItem('token', data.token);
            }

            // Redirect based on role
            setTimeout(() => {
                if (data.user?.role === 'ADMIN') {
                    router.push('/admin/dashboard');
                } else {
                    router.push('/');
                }
            }, 1500);
        } catch (err) {
            setMessage({
                type: 'error',
                text: err instanceof Error ? err.message : 'An error occurred'
            });
        } finally {
            setLoading(false);
        }
    };

    const fillDemoCredentials = (role: 'user' | 'admin') => {
        if (role === 'user') {
            setEmail('user@example.com');
            setPassword('password123');
        } else {
            setEmail('admin@example.com');
            setPassword('admin123');
        }
    };

    return (
    <>
            <Navbar />
        <div className="flex items-center justify-center p-4">
            {/* backgournd Image */}
            <div className="w-full h-full absolute top-0 left-0 -z-10">
                <Image
                    src={backgroundImage}
                    alt="Background"
                    fill
                    className="object-cover"
                />
            </div>
            <div className="w-full max-w-xl">
                {/* Card */}
                <div className="bg-white rounded-lg shadow-xl p-8">
                    {/* Logo */}
                    <div className="flex items-center justify-center gap-2">
                        <div className="w-8 h-8 bg-linear-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                            <Image src={logoIcon} alt="Logo" width={32} height={32} />
                        </div>
                        <span style={{ fontFamily: 'var(--font-clash)' }} className="text-[24px] font-semibold text-[#25324B]">QuickHire</span>
                    </div>

                    {/* Header */}
                    <div className="text-center mb-4">
                        <h1 style={{ fontFamily: 'var(--font-clash)' }} className="text-[28px] font-bold text-[#25324B] mb-2">
                            Welcome Back
                        </h1>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleLogin} className="space-y-3 mb-6">
                        {/* Email */}
                        <div>
                            <label className="font-epilogue text-[#25324B] font-semibold text-[14px] block mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="w-full border border-[#E8E8F0] rounded-lg px-4 py-3 text-[#25324B] font-epilogue text-[14px] outline-none focus:border-[#4640DE] transition"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="font-epilogue text-[#25324B] font-semibold text-[14px] block mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                    className="w-full border border-[#E8E8F0] rounded-lg px-4 py-3 text-[#25324B] font-epilogue text-[14px] outline-none focus:border-[#4640DE] transition"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#7C8493] hover:text-[#25324B] transition-colors"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>

                        {/* Remember Me & Forgot Password */}
                        <div className="flex items-center justify-between">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 rounded border-[#E8E8F0] text-[#4640DE] cursor-pointer"
                                />
                                <span className="font-epilogue text-[#7C8493] text-[14px]">Remember me</span>
                            </label>
                            <Link href="#" className="font-epilogue text-[#4640DE] text-[14px] hover:underline">
                                Forgot password?
                            </Link>
                        </div>

                        {/* Message */}
                        {message && (
                            <div className={`p-4 rounded-lg font-epilogue text-[14px] ${message.type === 'success'
                                ? 'bg-green-50 border border-green-200 text-green-700'
                                : 'bg-red-50 border border-red-200 text-red-700'
                                }`}>
                                {message.text}
                            </div>
                        )}

                        {/* Login Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-[#4640DE] text-white font-epilogue font-semibold text-[16px] px-6 py-3 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? 'Signing in...' : 'Sign In'}
                        </button>
                    </form>

                    {/* Demo Credentials */}
                    <div className="flex items-center gap-4">
                        <p className="font-epilogue text-[#25324B] text-[16px]">
                            Demo Credentials: 
                        </p>
                            <button
                                type="button"
                                onClick={() => fillDemoCredentials('user')}
                                className="border border-[#4640DE] text-[#4640DE] font-epilogue font-semibold text-[12px] px-3 py-1 rounded-lg hover:bg-[#4640DE] hover:text-white transition-colors"
                            >
                                User Demo
                            </button>
                            <button
                                type="button"
                                onClick={() => fillDemoCredentials('admin')}
                                className="border border-[#4640DE] text-[#4640DE] font-epilogue font-semibold text-[12px] px-3 py-1 rounded-lg hover:bg-[#4640DE] hover:text-white transition-colors"
                            >
                                Admin Demo
                            </button>
                    </div>

                    {/* Sign Up Link */}
                    <div className="text-center mt-3 pt-3 border-t border-[#E8E8F0]">
                        <p className="font-epilogue text-[#7C8493] text-[14px]">
                            Don't have an account?{' '}
                            <Link href="/register" className="text-[#4640DE] font-semibold hover:underline">
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
