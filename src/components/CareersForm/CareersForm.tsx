import { type FormEvent, useState } from "react";
import "./CareersForm.css";

const Careers = () => {
  const [isSending, setIsSending] = useState(false);

  const [status, setStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({
    type: "",
    message: "",
  });

const handleSubmit = async (
  event: FormEvent<HTMLFormElement>
) => {
  event.preventDefault();

  setIsSending(true);

  setStatus({
    type: "",
    message: "",
  });

  const form = event.currentTarget;
  const formData = new FormData(form);

  const accessKey =
    "1b35ef7d-ee4c-4579-9f20-40f800b7c8d4";

  // Get selected job position
  const selectedPositions = formData.getAll("position");

  // Position is required
  if (selectedPositions.length === 0) {
    setStatus({
      type: "error",
      message: "Please select at least one job position.",
    });

    setIsSending(false);
    return;
  }

  // Convert selected positions to text
  const positionsText = selectedPositions.join(", ");

  // Web3Forms access key
  formData.append("access_key", accessKey);

  // Dynamic email subject
  formData.append(
    "subject",
    `New Career Application - ${positionsText}`
  );

  // Sender name
  formData.append(
    "from_name",
    "Rockstar Careers"
  );

  // Position inside email body
  formData.append(
    "selected_position",
    positionsText
  );

  try {
    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        body: formData,
      }
    );

    const result = await response.json();

    if (result.success) {
      setStatus({
        type: "success",
        message:
          "Thank you! Your application has been submitted successfully.",
      });

      form.reset();
    } else {
      setStatus({
        type: "error",
        message:
          result.message ||
          "Something went wrong. Please try again.",
      });
    }
  } catch (error) {
    console.error(
      "Web3Forms career submission error:",
      error
    );

    setStatus({
      type: "error",
      message:
        "Unable to submit your application. Please try again later.",
    });
  } finally {
    setIsSending(false);
  }
};

  return (
    <main className="careers-page">

      <section className="careers-section">

        <div className="careers-container">

          <div className="careers-card">

            {/* LEFT SIDE - JOB OPENINGS */}

            <div className="careers-form">

              <h2>JOBS OPENINGS :</h2>

              <div className="job-list">

                <label className="job-option">
                  <input
                    type="radio"
                    name="position"
                    value="HR Manager"
                    form="career-form"
                  />
                  <span>HR Manager</span>
                </label>

                <label className="job-option">
                  <input
                    type="radio"
                    name="position"
                    value="Sales Executive"
                    form="career-form"
                  />
                  <span>Sales executive</span>
                </label>

                <label className="job-option">
                  <input
                    type="radio"
                    name="position"
                    value="Business Development Association"
                    form="career-form"
                  />
                  <span>
                    Business Development Association
                  </span>
                </label>

                <label className="job-option">
                  <input
                    type="radio"
                    name="position"
                    value="Senior Team Leading Hosting Product Specialist"
                    form="career-form"
                  />
                  <span>
                    Senior Team Leading Hosting Product Specialist
                  </span>
                </label>

              </div>


              {/* APPLICATION FORM */}

              <form
                id="career-form"
                className="career-form"
                onSubmit={handleSubmit}
              >

                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  autoComplete="name"
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  autoComplete="email"
                  required
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  autoComplete="tel"
                  required
                />

                <input
                  type="text"
                  name="qualification"
                  placeholder="qualification"
                  required
                />

                {/* Honeypot */}
                <input
                  type="checkbox"
                  name="botcheck"
                  tabIndex={-1}
                  autoComplete="off"
                  className="career-honeypot"
                />

                <button
                  type="submit"
                  disabled={isSending}
                >
                  {isSending ? (
                    <>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                    </>
                  )}
                </button>

              </form>


              {/* STATUS */}

              {status.message && (
                <div
                  className={`career-status ${status.type}`}
                  role="alert"
                >
                  {status.message}
                </div>
              )}

            </div>


            {/* RIGHT SIDE - IMAGE */}


          </div>

        </div>

      </section>

    </main>
  );
};

export default Careers;