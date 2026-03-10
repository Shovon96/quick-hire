'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeOff } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import backgroundImage from "../../../../public/assets/background-design.png";
import logoIcon from "../../../../public/assets/logoIcon.png";

export default function RegisterPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: 'USER'
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const validateForm = (): boolean => {
        if (!formData.fullName.trim()) {
            setMessage({ type: 'error', text: 'Full name is required' });
            return false;
        }
        if (!formData.email.trim()) {
            setMessage({ type: 'error', text: 'Email is required' });
            return false;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            setMessage({ type: 'error', text: 'Please enter a valid email' });
            return false;
        }
        if (!formData.password.trim()) {
            setMessage({ type: 'error', text: 'Password is required' });
            return false;
        }
        if (formData.password.length < 6) {
            setMessage({ type: 'error', text: 'Password must be at least 6 characters' });
            return false;
        }
        if (formData.password !== formData.confirmPassword) {
            setMessage({ type: 'error', text: 'Passwords do not match' });
            return false;
        }
        return true;
    };

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setMessage(null);

        if (!validateForm()) return;

        try {
            setLoading(true);
            const response = await fetch('https://quick-hire-server-amber.vercel.app/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({
                    fullName: formData.fullName,
                    email: formData.email,
                    password: formData.password,
                    role: formData.role
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Registration failed');
            }

            setMessage({ type: 'success', text: 'Registration successful! Redirecting to login...' });
            
            setTimeout(() => {
                router.push('/login');
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

    return (
        <div className="flex items-center justify-center p-4">
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
                <div className="bg-white rounded-lg shadow-xl p-4">
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
                            Create Account
                        </h1>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleRegister} className="space-y-3 mb-6">
                        {/* Full Name */}
                        <div>
                            <label className="font-epilogue text-[#25324B] font-semibold text-[14px] block mb-2">
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                                className="w-full border border-[#E8E8F0] rounded-lg px-4 py-3 text-[#25324B] font-epilogue text-[14px] outline-none focus:border-[#4640DE] transition"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="font-epilogue text-[#25324B] font-semibold text-[14px] block mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className="w-full border border-[#E8E8F0] rounded-lg px-4 py-3 text-[#25324B] font-epilogue text-[14px] outline-none focus:border-[#4640DE] transition"
                            />
                        </div>

                        {/* Role */}
                        <div>
                            <label className="font-epilogue text-[#25324B] font-semibold text-[14px] block mb-2">
                                I am a
                            </label>
                            <select
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                className="w-full border border-[#E8E8F0] rounded-lg px-4 py-3 text-[#25324B] font-epilogue text-[14px] outline-none focus:border-[#4640DE] transition"
                            >
                                <option value="USER">Job Seeker</option>
                                <option value="ADMIN">Employer</option>
                            </select>
                        </div>

                        {/* Password */}
                        <div>
                            <label className="font-epilogue text-[#25324B] font-semibold text-[14px] block mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
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

                        {/* Confirm Password */}
                        {/* <div>
                            <label className="font-epilogue text-[#25324B] font-semibold text-[14px] block mb-2">
                                Confirm Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder="Confirm your password"
                                    className="w-full border border-[#E8E8F0] rounded-lg px-4 py-3 text-[#25324B] font-epilogue text-[14px] outline-none focus:border-[#4640DE] transition"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#7C8493] hover:text-[#25324B] transition-colors"
                                >
                                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div> */}

                        {/* Terms */}
                        <label className="flex items-start gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                className="w-4 h-4 rounded border-[#E8E8F0] text-[#4640DE] cursor-pointer mt-1"
                            />
                            <span className="font-epilogue text-[#7C8493] text-[12px]">
                                I agree to the{' '}
                                <Link href="#" className="text-[#4640DE] hover:underline">
                                    Terms of Service
                                </Link>
                                {' '}and{' '}
                                <Link href="#" className="text-[#4640DE] hover:underline">
                                    Privacy Policy
                                </Link>
                            </span>
                        </label>

                        {/* Message */}
                        {message && (
                            <div className={`p-4 rounded-lg font-epilogue text-[14px] ${
                                message.type === 'success'
                                    ? 'bg-green-50 border border-green-200 text-green-700'
                                    : 'bg-red-50 border border-red-200 text-red-700'
                            }`}>
                                {message.text}
                            </div>
                        )}

                        {/* Register Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-[#4640DE] text-white font-epilogue font-semibold text-[16px] px-6 py-3 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? 'Creating account...' : 'Create Account'}
                        </button>
                    </form>

                    {/* Sign In Link */}
                    <div className="text-center">
                        <p className="font-epilogue text-[#7C8493] text-[14px]">
                            Already have an account?{' '}
                            <Link href="/login" className="text-[#4640DE] font-semibold hover:underline">
                                Sign in
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
