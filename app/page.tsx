/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import {
  Checkbox,
  createTheme,
  FormControlLabel,
  TextField,
  ThemeProvider,
} from "@mui/material";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#333333",
    },
    secondary: {
      main: "#666666",
    },
  },
  typography: {
    fontFamily: "var(--font-clash-display)",
  },
});

export default function Component() {
  const [isLoading, setIsLoading] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const response = await fetch(
        "https://social-login.druckland.de/api/v1/user/signin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast.success("You have successfully logged in.");
      } else {
        toast.error(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to connect to the server. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="min-h-screen flex flex-col bg-[#F1F1F1]">
        {/* Top Bar */}
        <div className="bg-[#DDDDDD] border-b h-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-end space-x-4 text-sm text-[#0B0B0B]">
            <a href="/faq" className="hover:text-gray-700 flex items-center">
              <span className="flex items-center">FAQ</span>
              <img
                src="/question-outline.svg"
                alt="ChevronDown"
                className="ml-1 h-4 w-4"
              />
            </a>
            <a
              href="/inquiry"
              className="hover:text-gray-700 flex items-center"
            >
              <span className="flex items-center">Send Inquiry</span>
              <img
                src="/message.svg"
                alt="ChevronDown"
                className="ml-1 h-4 w-4"
              />
            </a>
            <a
              href="/support"
              className="hover:text-gray-700 flex items-center"
            >
              <span className="flex items-center">Live Support</span>
              <img src="/chat.svg" alt="ChevronDown" className="ml-1 h-4 w-4" />
            </a>
            <a
              href="/contact"
              className="hover:text-gray-700 flex items-center"
            >
              <span className="flex items-center">Contact</span>
              <img
                src="/person-outline.svg"
                alt="ChevronDown"
                className="ml-1 h-3 w-3"
              />
            </a>
          </div>
        </div>

        {/* Main Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center flex-grow-0 flex-[0_1_50%] min-w-min gap-4">
                <a href="/" className="text-2xl font-bold text-gray-800">
                  Drukland.de
                </a>

                <nav className="hidden md:ml-4 md:flex md:space-x-4 md:ml-auto flex-shrink-0">
                  <div className="relative group">
                    <button className="flex items-center text-black hover:text-gray-800 text-base font-normal leading-5 text-left no-underline">
                      Business
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="py-1">
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Business Cards
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Letterheads
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Envelopes
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="relative group">
                    <button className="flex items-center text-black hover:text-gray-800 text-base font-normal leading-5 text-left no-underline">
                      Products
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="py-1">
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Brochures
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Flyers
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Posters
                        </a>
                      </div>
                    </div>
                  </div>
                  <a
                    href="/about"
                    className="text-black hover:text-gray-800 text-base font-normal leading-5 text-left no-underline"
                  >
                    About Us
                  </a>
                </nav>
              </div>

              {/* desktop search */}
              <div className="hidden md:block flex-grow">
                <div className="relative mx-4 flex justify-end">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full pl-10 pr-10 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500 text-gray-800"
                  />
                  <svg
                    className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-4.35-4.35M16.65 10.65a6 6 0 11-12 0 6 6 0 0112 0z"
                    />
                  </svg>
                </div>
              </div>

              <div className="flex items-center space-x-4 flex-grow-0">
                <div className="flex items-center space-x-4">
                  <img src="/car.svg" alt="Truck" className="h-6 w-6" />
                  <img src="/person.svg" alt="User" className="h-6 w-6" />
                  <img
                    src="/bucket.svg"
                    alt="ShoppingCart"
                    className="h-6 w-6"
                  />
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div className="space-y-1">
                <button className="flex items-center w-full px-3 py-2 text-gray-500 hover:text-gray-800">
                  Business
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <a
                  href="#"
                  className="block px-6 py-2 text-sm text-gray-500 hover:text-gray-800"
                >
                  Business Cards
                </a>
                <a
                  href="#"
                  className="block px-6 py-2 text-sm text-gray-500 hover:text-gray-800"
                >
                  Letterheads
                </a>
                <a
                  href="#"
                  className="block px-6 py-2 text-sm text-gray-500 hover:text-gray-800"
                >
                  Envelopes
                </a>
              </div>
              <div className="space-y-1">
                <button className="flex items-center w-full px-3 py-2 text-gray-500 hover:text-gray-800">
                  Products
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <a
                  href="#"
                  className="block px-6 py-2 text-sm text-gray-500 hover:text-gray-800"
                >
                  Brochures
                </a>
                <a
                  href="#"
                  className="block px-6 py-2 text-sm text-gray-500 hover:text-gray-800"
                >
                  Flyers
                </a>
                <a
                  href="#"
                  className="block px-6 py-2 text-sm text-gray-500 hover:text-gray-800"
                >
                  Posters
                </a>
              </div>
              <a
                href="/about"
                className="block px-3 py-2 text-gray-500 hover:text-gray-800"
              >
                About Us
              </a>
            </div>
            <div className="px-4 py-3">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500 text-gray-800"
                />
                <svg
                  className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-4.35-4.35M16.65 10.65a6 6 0 11-12 0 6 6 0 0112 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div>
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Service Image Placeholder */}
              <div className="bg-white rounded-lg shadow-lg p-8 flex items-center justify-center min-h-[500px] w-full md:w-4/6">
                <div className="text-center text-gray-500">
                  <p className="text-2xl">Image or Video</p>
                  <p className="text-lg">of our services</p>
                </div>
              </div>

              {/* Login Form */}
              <div className="bg-white rounded-lg shadow-lg px-8 py-4 w-full md:w-2/6 md:max-w-[300px]">
                <div className="text-center mb-4">
                  <h1 className="text-[32px] font-bold leading-[39.36px] text-center decoration-skip-ink text-[#0F0F0F] font-[var(--font-clash-display)]">
                    Drukland.de
                  </h1>
                  <p className="text-base mt-4 text-[#0F0F0F]">
                    Sign In to your account
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {"Don't you have an account? "}
                    <a
                      href="/register"
                      className="text-gray-800 hover:underline font-normal"
                    >
                      Register
                    </a>
                  </p>
                </div>

                <form onSubmit={onSubmit} className="space-y-4">
                  <TextField
                    id="email"
                    name="email"
                    type="email"
                    label="Email Address"
                    variant="standard"
                    fullWidth
                    required
                    margin="dense"
                  />
                  <TextField
                    id="password"
                    name="password"
                    type="password"
                    label="Password"
                    variant="standard"
                    fullWidth
                    required
                    margin="dense"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        id="terms"
                        name="terms"
                        required
                        color="primary"
                      />
                    }
                    label={
                      <span className="text-xs text-gray-900">
                        I agree to all{" "}
                        <a
                          href="/terms"
                          className="text-gray-600 hover:underline"
                        >
                          Terms & Conditions
                        </a>
                      </span>
                    }
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-xs font-medium text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    {isLoading ? "Signing in..." : "Log In"}
                  </button>
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-xs">
                      <span className="px-2 bg-white text-gray-500">
                        or sign in with
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      className="flex justify-center items-center py-1 px-2 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-50"
                    >
                      <img
                        src="/linkedin.svg"
                        alt="LinkedIn"
                        className="h-4 w-4"
                      />
                    </button>
                    <button
                      type="button"
                      className="flex justify-center items-center py-1 px-2 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-50"
                    >
                      <img src="/google.svg" alt="Google" className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      className="flex justify-center items-center py-1 px-2 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-50"
                    >
                      <img
                        src="/facebook.svg"
                        alt="Facebook"
                        className="h-4 w-4"
                      />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </main>
        </div>

        {/* Footer */}
        <footer className="bg-[#F1F1F1] mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 ">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 border-t-[0.4px] border-gray-400 py-4">
              <p className="text-sm text-black text-left font-normal leading-[17.22px] decoration-skip-ink">
                All rights reserved © 2024 | Drukland.de
              </p>
              <div className="flex space-x-4 text-sm text-black text-left font-normal leading-[17.22px] decoration-skip-ink">
                <a href="/terms" className="hover:text-gray-800">
                  Terms of Use
                </a>
                <a href="/sitemap" className="hover:text-gray-800">
                  Sitemap
                </a>
                <a href="/company" className="hover:text-gray-800">
                  Company Information
                </a>
                <a href="/cookies" className="hover:text-gray-800">
                  Cookie settings
                </a>
              </div>
            </div>
          </div>
        </footer>

        <ToastContainer position="top-right" autoClose={5000} />
      </div>
    </ThemeProvider>
  );
}
