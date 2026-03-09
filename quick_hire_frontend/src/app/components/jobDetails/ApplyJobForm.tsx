'use client';

import { useState } from 'react';

interface ApplyJobFormProps {
  jobId: string | number;
}

interface FormData {
  jobId: string | number;
  name: string;
  email: string;
  contactNo: string;
  resume: string;
  coverLetter: string;
  status: string;
}

export default function ApplyJobForm({ jobId }: ApplyJobFormProps) {
  const [formData, setFormData] = useState<FormData>({
    jobId,
    name: '',
    email: '',
    contactNo: '',
    resume: '',
    coverLetter: '',
    status: 'PENDING'
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setMessage({ type: 'error', text: 'Name is required' });
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
    if (!formData.contactNo.trim() || formData.contactNo.length < 10) {
      setMessage({ type: 'error', text: 'Contact number is required and minimum 10 digits' });
      return false;
    }
    if (!formData.resume.trim()) {
      setMessage({ type: 'error', text: 'Resume link is required' });
      return false;
    }
    if (!formData.coverLetter.trim()) {
      setMessage({ type: 'error', text: 'Cover letter is required' });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage(null);

    if (!validateForm()) return;

    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/api/applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      console.log(data?.message)
      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit application');
      }

      setMessage({
        type: 'success',
        text: 'Application submitted successfully! We will review your application soon.'
      });

      // Reset form
      setFormData({
        jobId,
        name: '',
        email: '',
        contactNo: '',
        resume: '',
        coverLetter: '',
        status: 'PENDING'
      });
    } catch (err) {
      setMessage({
        type: 'error',
        text: 'An error occurred while submitting your application'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border border-[#E8E8F0] rounded-lg p-8 bg-white my-8 max-w-3xl mx-auto">
      <h2 style={{ fontFamily: 'var(--font-clash)' }} className="text-[24px] font-bold text-[#25324B] mb-6">
        Apply for this job
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <label className="font-epilogue text-[#25324B] font-semibold text-[14px] block mb-2">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full border border-[#E8E8F0] rounded-lg px-4 py-3 text-[#25324B] font-epilogue text-[14px] outline-none focus:border-[#4640DE] transition"
          />
        </div>

        {/* Email Field */}
        <div>
          <label className="font-epilogue text-[#25324B] font-semibold text-[14px] block mb-2">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            className="w-full border border-[#E8E8F0] rounded-lg px-4 py-3 text-[#25324B] font-epilogue text-[14px] outline-none focus:border-[#4640DE] transition"
          />
        </div>

        {/* Contact Number Field */}
        <div>
          <label className="font-epilogue text-[#25324B] font-semibold text-[14px] block mb-2">
            Contact Number *
          </label>
          <input
            type="tel"
            name="contactNo"
            value={formData.contactNo}
            onChange={handleChange}
            placeholder="Enter your contact number"
            className="w-full border border-[#E8E8F0] rounded-lg px-4 py-3 text-[#25324B] font-epilogue text-[14px] outline-none focus:border-[#4640DE] transition"
          />
        </div>

        {/* Resume Link Field */}
        <div>
          <label className="font-epilogue text-[#25324B] font-semibold text-[14px] block mb-2">
            Resume Link *
          </label>
          <input
            type="url"
            name="resume"
            value={formData.resume}
            onChange={handleChange}
            placeholder="https://example.com/resume.pdf"
            className="w-full border border-[#E8E8F0] rounded-lg px-4 py-3 text-[#25324B] font-epilogue text-[14px] outline-none focus:border-[#4640DE] transition"
          />
        </div>

        {/* Cover Letter Field */}
        <div>
          <label className="font-epilogue text-[#25324B] font-semibold text-[14px] block mb-2">
            Cover Letter *
          </label>
          <textarea
            name="coverLetter"
            value={formData.coverLetter}
            onChange={handleChange}
            placeholder="Tell us why you're a great fit for this position..."
            rows={6}
            className="w-full border border-[#E8E8F0] rounded-lg px-4 py-3 text-[#25324B] font-epilogue text-[14px] outline-none focus:border-[#4640DE] transition resize-none"
          />
        </div>

        {/* Message Area */}
        {message && (
          <div className={`p-4 rounded-lg font-epilogue text-[14px] ${message.type === 'success'
              ? 'bg-green-50 border border-green-200 text-green-700'
              : 'bg-red-50 border border-red-200 text-red-700'
            }`}>
            {message.text}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#4640DE] text-white font-epilogue font-semibold text-[16px] px-6 py-3 rounded-lg hover:bg-[#3a34b8] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Submitting...' : 'Submit Application'}
        </button>
      </form>
    </div>
  );
}
