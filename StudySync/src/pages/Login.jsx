import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaGraduationCap,
} from "react-icons/fa";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
    ) {
      newErrors.email = "Enter a valid email address";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password =
        "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    localStorage.setItem("userEmail", email);
    localStorage.setItem("rememberMe", rememberMe);

    navigate("/dashboard");
  };

  return (
    <div className="login-page">

      {/* Background */}
      <div className="bg-circle circle1"></div>
      <div className="bg-circle circle2"></div>

      <div className="login-container">

        {/* Left Side */}
        <div className="login-left">

          <div className="logo">
            <FaGraduationCap />
            <h2>StudySync</h2>
          </div>

          <h1>Welcome Back!</h1>

          <p>
            Continue your learning journey with StudySync.
            Organize your courses, track your progress and
            achieve your goals every day.
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

        {/* Right Side */}
        <div className="login-right">

          <form className="login-card" onSubmit={handleLogin}>

            <h2>Login</h2>

            <p>
              Sign in to continue learning.
            </p>

            {/* Email */}

            <div className="input-group">

              <FaEnvelope className="icon" />

              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
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
                  showPassword ? "text" : "password"
                }
                placeholder="Password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
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

            {/* Remember */}

            <div className="options">

              <label>

                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() =>
                    setRememberMe(!rememberMe)
                  }
                />

                Remember Me

              </label>

              <Link to="#">
                Forgot Password?
              </Link>

            </div>

            {/* Login Button */}

            <button
              className="login-btn"
              type="submit"
            >
              Login
            </button>

            {/* Divider */}

            <div className="divider">
              <span>OR</span>
            </div>

            {/* Google */}

            <button
              type="button"
              className="google-btn"
            >
              <FaGoogle />
              Continue with Google
            </button>

            {/* Register */}

            <p className="register-text">

              Don't have an account?{" "}

              <Link to="/register">
                Register
              </Link>

            </p>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Login;