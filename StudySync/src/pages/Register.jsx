import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaGraduationCap,
} from "react-icons/fa";
import "./Register.css";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password =
        "Password must be at least 6 characters";
    }

    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword =
        "Confirm your password";
    } else if (
      formData.password !== formData.confirmPassword
    ) {
      newErrors.confirmPassword =
        "Passwords do not match";
    }

    if (!acceptTerms) {
      newErrors.terms =
        "Please accept the Terms & Conditions";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    localStorage.setItem(
      "user",
      JSON.stringify({
        name: formData.name,
        email: formData.email,
      })
    );

    navigate("/dashboard");
  };

  return (
    <div className="register-page">

      <div className="bg-circle circle1"></div>
      <div className="bg-circle circle2"></div>

      <div className="register-container">

        {/* LEFT SIDE */}

        <div className="register-left">

          <div className="logo">
            <FaGraduationCap />
            <h2>StudySync</h2>
          </div>

          <h1>Create Your Account</h1>

          <p>
            Join thousands of students who are building
            better study habits with StudySync.
          </p>

          <div className="login-stats">

            <div className="stat">
              <h2>20K+</h2>
              <span>Students</span>
            </div>

            <div className="stat">
              <h2>150+</h2>
              <span>Universities</span>
            </div>

            <div className="stat">
              <h2>4.9★</h2>
              <span>Rating</span>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="register-right">

          <form
            className="register-card"
            onSubmit={handleRegister}
          >

            <h2>Create Account</h2>

            <p>
              Start your learning journey today.
            </p>

            {/* Name */}

            <div className="input-group">

              <FaUser className="icon" />

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
              />

            </div>

            {errors.name && (
              <span className="error">
                {errors.name}
              </span>
            )}

            {/* Email */}

            <div className="input-group">

              <FaEnvelope className="icon" />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
              />

            </div>

            {errors.email && (
              <span className="error">
                {errors.email}
              </span>
            )}

            {/* Password */}

            <div className="input-group">

              <FaLock className="icon" />

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />

              <span
                className="eye"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </span>

            </div>

            {errors.password && (
              <span className="error">
                {errors.password}
              </span>
            )}

            {/* Confirm Password */}

            <div className="input-group">

              <FaLock className="icon" />

              <input
                type={
                  showConfirm
                    ? "text"
                    : "password"
                }
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />

              <span
                className="eye"
                onClick={() =>
                  setShowConfirm(!showConfirm)
                }
              >
                {showConfirm ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </span>

            </div>

            {errors.confirmPassword && (
              <span className="error">
                {errors.confirmPassword}
              </span>
            )}

            {/* Terms */}

            <div className="options">

              <label>

                <input
                  type="checkbox"
                  checked={acceptTerms}
                  onChange={() =>
                    setAcceptTerms(!acceptTerms)
                  }
                />

                I accept the Terms &
                Conditions

              </label>

            </div>

            {errors.terms && (
              <span className="error">
                {errors.terms}
              </span>
            )}

            {/* Register */}

            <button
              type="submit"
              className="register-btn"
            >
              Create Account
            </button>

            <div className="divider">
              <span>OR</span>
            </div>

            <button
              type="button"
              className="google-btn"
            >
              <FaGoogle />
              Sign up with Google
            </button>

            <p className="register-text">

              Already have an account?{" "}

              <Link to="/login">
                Login
              </Link>

            </p>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Register;