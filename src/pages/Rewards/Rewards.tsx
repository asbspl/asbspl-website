import React, { useState } from "react";
import "./Rewards.css";

import {
  FiUser,
  FiLock,
  FiEye,
  FiEyeOff,
  FiArrowRight,
  FiGift,
  FiAward,
  FiTag,
  FiHeadphones,
  FiCheckCircle,
  FiLogIn,
} from "react-icons/fi";

const Rewards: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log({
      email,
      password,
    });

    // Backend / Supabase login will be added here later
    alert("Login submitted");
  };

  return (
    <main className="rewards-page">

      {/* ================= HERO ================= */}

      <section className="rewards-login-section">
        <div className="rewards-container">

          <div className="rewards-login-layout">

            {/* ================= LEFT CONTENT ================= */}

            <div className="rewards-info">

              <div className="rewards-logo">
                <span>Rockstar</span>
                <small>LOYALTY PROGRAM</small>
              </div>

              <h1>
                Welcome to
                <br />
                <span>Rockstar Rewards</span>
              </h1>

              <p className="rewards-intro">
                Register yourself to enjoy the exciting benefits
                of the Rockstar Loyalty Program.
              </p>

              <div className="rewards-benefits-list">

                <div className="reward-benefit">
                  <div className="benefit-icon">
                    <FiGift />
                  </div>

                  <div>
                    <h3>Discounts & Savings</h3>
                    <p>Enjoy special offers and savings.</p>
                  </div>
                </div>

                <div className="reward-benefit">
                  <div className="benefit-icon">
                    <FiAward />
                  </div>

                  <div>
                    <h3>Rewards & Points</h3>
                    <p>Earn points and redeem exciting rewards.</p>
                  </div>
                </div>

                <div className="reward-benefit">
                  <div className="benefit-icon">
                    <FiTag />
                  </div>

                  <div>
                    <h3>Exclusive Offers</h3>
                    <p>Get access to special member offers.</p>
                  </div>
                </div>

                <div className="reward-benefit">
                  <div className="benefit-icon">
                    <FiHeadphones />
                  </div>

                  <div>
                    <h3>Customer Support</h3>
                    <p>Get dedicated support when you need it.</p>
                  </div>
                </div>

                <div className="reward-benefit">
                  <div className="benefit-icon">
                    <FiCheckCircle />
                  </div>

                  <div>
                    <h3>Easy Redemption</h3>
                    <p>Redeem your points with a simple process.</p>
                  </div>
                </div>

              </div>

            </div>


            {/* ================= LOGIN CARD ================= */}

            <div className="rewards-login-card">

              <div className="login-card-icon">
                <FiLogIn />
              </div>

              <h2>Welcome Back</h2>

              <p className="login-subtitle">
                Login to your Rockstar Rewards account
              </p>

              <form onSubmit={handleLogin}>

                {/* EMAIL */}

                <div className="login-input-group">

                  <label htmlFor="email">
                    Email Address
                  </label>

                  <div className="login-input-wrapper">

                    <FiUser />

                    <input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />

                  </div>

                </div>


                {/* PASSWORD */}

                <div className="login-input-group">

                  <div className="password-label-row">

                    <label htmlFor="password">
                      Password
                    </label>

                    <button
                      type="button"
                      className="forgot-password"
                      onClick={() => alert("Forgot password")}
                    >
                      Forgot Password?
                    </button>

                  </div>

                  <div className="login-input-wrapper">

                    <FiLock />

                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />

                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() =>
                        setShowPassword(!showPassword)
                      }
                      aria-label={
                        showPassword
                          ? "Hide password"
                          : "Show password"
                      }
                    >
                      {showPassword ? (
                        <FiEyeOff />
                      ) : (
                        <FiEye />
                      )}
                    </button>

                  </div>

                </div>


                {/* LOGIN */}

                <button
                  type="submit"
                  className="login-button"
                >
                  Log In
                  <FiArrowRight />
                </button>

              </form>


              {/* SIGN UP */}

              <div className="signup-section">

                <span>
                  Don't have an account?
                </span>

                <button
                  type="button"
                  className="signup-button"
                  onClick={() => alert("Open Sign Up page")}
                >
                  Sign Up
                </button>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= HOW TO EARN ================= */}

      <section className="rewards-guide">

        <div className="rewards-container">

          <div className="guide-heading">
            <span>ROCKSTAR LOYALTY PROGRAM</span>

            <h2>
              How to Earn & Redeem Points
            </h2>

            <p>
              Simple steps to make the most of your Rockstar
              Loyalty Program.
            </p>
          </div>


          <div className="guide-grid">

            {/* BANK POINTS */}

            <div className="guide-card">

              <div className="guide-number">
                01
              </div>

              <div className="guide-icon">
                <FiAward />
              </div>

              <h3>
                How to Bank Points?
              </h3>

              <p>
                After purchasing the product, find the
                Rockstar coupon inside the package and use
                the available methods to save your points.
              </p>

              <ul>
                <li>
                  Login and scan or enter your Rockstar code.
                </li>

                <li>
                  Send the coupon image through WhatsApp.
                </li>

                <li>
                  Contact the Rockstar support team.
                </li>
              </ul>

            </div>


            {/* REDEEM POINTS */}

            <div className="guide-card">

              <div className="guide-number">
                02
              </div>

              <div className="guide-icon">
                <FiGift />
              </div>

              <h3>
                How to Redeem Points?
              </h3>

              <p>
                Members can request redemption of their
                accumulated points according to the available
                reward options.
              </p>

              <ul>
                <li>
                  Login to your Rockstar account.
                </li>

                <li>
                  Choose your preferred reward.
                </li>

                <li>
                  Contact the Rockstar support team when required.
                </li>
              </ul>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Rewards;