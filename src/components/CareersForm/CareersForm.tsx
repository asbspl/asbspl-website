import { type FormEvent, useState } from "react";
import "./CareersForm.css";

interface JobOpening {
  id: number;
  title: string;
  location: string;
  type: string;
  skills: string[];
  qualifications: string[];
}

/*
|--------------------------------------------------------------------------
| JOB OPENINGS
|--------------------------------------------------------------------------
| Manage your career openings from here.
|
| ADD:
| Add a new object.
|
| EDIT:
| Change the existing object.
|
| DELETE:
| Remove the object completely.
|
| These controls are ONLY in the code.
| Website users will NOT see Add / Edit / Delete buttons.
|--------------------------------------------------------------------------
*/

const jobOpenings: JobOpening[] = [
  // {
  //   id: 1,

  //   title: "HR Intern",

  //   location: "Pune, India",

  //   type: "Full-Time",

  //   skills: [
  //     "Good communication",
  //     "Basic HR knowledge",
  //     "Team coordination",
  //   ],

  //   qualifications: [
  //     "B.B.A. / B.Com / MBA HR",
  //     "Good interpersonal skills",
  //     "Basic knowledge of HR activities",
  //   ],
  // },

  // {
  //   id: 2,

  //   title: "Business Development Executive",

  //   location: "Pune, India",

  //   type: "Full-Time",

  //   skills: [
  //     "Good communication",
  //     "Lead generation",
  //     "Client relationship management",
  //   ],

  //   qualifications: [
  //     "Bachelor's degree in any discipline",
  //     "Good communication skills",
  //     "Sales / Business Development knowledge",
  //   ],
  // }


  
];

const Careers = () => {
  /*
  |--------------------------------------------------------------------------
  | EXPANDED JOB
  |--------------------------------------------------------------------------
  */

  const [expandedJob, setExpandedJob] = useState<number | null>(
    jobOpenings.length > 0
      ? jobOpenings[0].id
      : null
  );

  /*
  |--------------------------------------------------------------------------
  | SELECTED POSITION
  |--------------------------------------------------------------------------
  */

  const [selectedPosition, setSelectedPosition] =
    useState("");

  /*
  |--------------------------------------------------------------------------
  | SHOW APPLICATION FORM
  |--------------------------------------------------------------------------
  */

  const [showApplicationForm, setShowApplicationForm] =
    useState(false);

  /*
  |--------------------------------------------------------------------------
  | FORM SENDING
  |--------------------------------------------------------------------------
  */

  const [isSending, setIsSending] =
    useState(false);

  /*
  |--------------------------------------------------------------------------
  | STATUS
  |--------------------------------------------------------------------------
  */

  const [status, setStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({
    type: "",
    message: "",
  });

  /*
  |--------------------------------------------------------------------------
  | APPLY FOR POSITION
  |--------------------------------------------------------------------------
  */

  const handleApply = (job: JobOpening) => {
    /*
    * Select only this position
    */
    setSelectedPosition(job.title);

    /*
    * Show application form
    */
    setShowApplicationForm(true);

    /*
    * Expand selected job
    */
    setExpandedJob(job.id);

    /*
    * Scroll to application form
    */
    setTimeout(() => {
      document
        .getElementById("career-application-form")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 100);
  };

  /*
  |--------------------------------------------------------------------------
  | CHANGE POSITION
  |--------------------------------------------------------------------------
  */

  const handleChangePosition = () => {
    setSelectedPosition("");

    setShowApplicationForm(false);

    setStatus({
      type: "",
      message: "",
    });

    /*
    * Scroll back to job openings
    */
    setTimeout(() => {
      document
        .getElementById("career-openings")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 100);
  };

  /*
  |--------------------------------------------------------------------------
  | FORM SUBMIT
  |--------------------------------------------------------------------------
  */

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    /*
    * Reset status
    */
    setStatus({
      type: "",
      message: "",
    });

    /*
    * Position validation
    */
    if (!selectedPosition) {
      setStatus({
        type: "error",

        message:
          "Please select a job position before applying.",
      });

      return;
    }

    setIsSending(true);

    const form = event.currentTarget;

    const formData = new FormData(form);

    /*
    |--------------------------------------------------------------------------
    | WEB3FORMS ACCESS KEY
    |--------------------------------------------------------------------------
    */

    const accessKey =
      "1e404c77-2308-4a89-b201-4c25b9155406";


      

    /*
    |--------------------------------------------------------------------------
    | WEB3FORMS DATA
    |--------------------------------------------------------------------------
    */

    formData.append(
      "access_key",
      accessKey
    );

    /*
    * Dynamic email subject
    */

    formData.append(
      "subject",
      `New Career Application - ${selectedPosition}`
    );

    /*
    * Sender name
    */

    formData.append(
      "from_name",
      "Rockstar Careers"
    );

    /*
    * Selected position
    */

    formData.append(
      "selected_position",
      selectedPosition
    );

    try {
      /*
      |--------------------------------------------------------------------------
      | SEND TO WEB3FORMS
      |--------------------------------------------------------------------------
      */

      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",

          body: formData,
        }
      );

      const result = await response.json();

      /*
      |--------------------------------------------------------------------------
      | SUCCESS
      |--------------------------------------------------------------------------
      */

      if (result.success) {
        setStatus({
          type: "success",

          message:
            "Thank you! Your application has been submitted successfully.",
        });

        /*
        * Reset form
        */
        form.reset();

        /*
        * Reset selected position
        */
        setSelectedPosition("");

        /*
        * Hide application form
        */
        setShowApplicationForm(false);

        /*
        * Scroll back to openings
        */
        setTimeout(() => {
          document
            .getElementById("career-openings")
            ?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
        }, 500);
      } else {
        /*
        |--------------------------------------------------------------------------
        | ERROR FROM WEB3FORMS
        |--------------------------------------------------------------------------
        */

        setStatus({
          type: "error",

          message:
            result.message ||
            "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      /*
      |--------------------------------------------------------------------------
      | NETWORK ERROR
      |--------------------------------------------------------------------------
      */

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

      {/* =====================================================
          CAREERS SECTION
      ====================================================== */}

      <section className="careers-section">

        <div className="careers-container">

          {/* =================================================
              PAGE HEADING
          ================================================== */}

          <div className="careers-heading">

            <span className="careers-eyebrow">
              CAREER OPPORTUNITIES
            </span>

            <h1>
              Join Our <span>Team</span>
            </h1>

            <p>
              Explore our current job openings and
              find an opportunity to grow with
              Rockstar.
            </p>

          </div>

          {/* =================================================
              JOB OPENINGS
          ================================================== */}

          <div
            id="career-openings"
            className="job-openings"
          >

            {jobOpenings.length > 0 ? (

              jobOpenings.map((job) => {

                const isExpanded =
                  expandedJob === job.id;

                return (
                  <div
                    className={`job-card ${
                      isExpanded
                        ? "expanded"
                        : ""
                    }`}
                    key={job.id}
                  >

                    {/* =======================================
                        JOB HEADER
                    ======================================== */}

                    <div className="job-header">

                      <div className="job-main-info">

                        <h2>
                          {job.title}
                        </h2>

                        <div className="job-meta">

                          {/* LOCATION */}

                          <span>

                            <span className="job-icon">
                              ◉
                            </span>

                            {job.location}

                          </span>

                          <span className="job-divider">
                            |
                          </span>

                          {/* JOB TYPE */}

                          <span>

                            <span className="job-icon">
                              ▣
                            </span>

                            {job.type}

                          </span>

                        </div>

                      </div>

                      {/* =====================================
                          ACTIONS
                      ====================================== */}

                      <div className="job-actions">

                        {/* APPLY */}

                        <button
                          type="button"
                          className="apply-btn"
                          onClick={() =>
                            handleApply(job)
                          }
                        >
                          Apply
                        </button>

                        {/* EXPAND */}

                        <button
                          type="button"
                          className="expand-btn"
                          onClick={() =>
                            setExpandedJob(
                              isExpanded
                                ? null
                                : job.id
                            )
                          }
                          aria-label={
                            isExpanded
                              ? "Collapse job details"
                              : "Expand job details"
                          }
                        >
                          {isExpanded
                            ? "⌃"
                            : "⌄"}
                        </button>

                      </div>

                    </div>

                    {/* =======================================
                        JOB DETAILS
                    ======================================== */}

                    {isExpanded && (

                      <div className="job-details">

                        {/* =================================
                            REQUIRED SKILLS
                        ================================== */}

                        <div className="job-detail-column">

                          <h3>
                            REQUIRED SKILLS
                          </h3>

                          <div className="skills-list">

                            {job.skills.map(
                              (
                                skill,
                                index
                              ) => (

                                <span
                                  className="skill-tag"
                                  key={index}
                                >
                                  {skill}
                                </span>

                              )
                            )}

                          </div>

                        </div>

                        {/* =================================
                            QUALIFICATIONS
                        ================================== */}

                        <div className="job-detail-column">

                          <h3>
                            KEY QUALIFICATIONS
                          </h3>

                          <ul>

                            {job.qualifications.map(
                              (
                                qualification,
                                index
                              ) => (

                                <li
                                  key={index}
                                >
                                  {qualification}
                                </li>

                              )
                            )}

                          </ul>

                        </div>

                        {/* =================================
                            APPLY BUTTON
                        ================================== */}

                        <div className="job-bottom">

                          <button
                            type="button"
                            className="apply-position-btn"
                            onClick={() =>
                              handleApply(job)
                            }
                          >
                            Apply for this position
                          </button>

                        </div>

                      </div>

                    )}

                  </div>
                );
              })

            ) : (

              /* =================================================
                 NO JOB OPENINGS
              ================================================== */

              <div className="no-openings">

                <div className="no-openings-icon">
                  ✓
                </div>

                <h2>
                  No Current Openings
                </h2>

                <p>
                  There are currently no job
                  openings available.
                </p>

                <span>
                  Please check back soon for
                  new opportunities.
                </span>

              </div>

            )}

          </div>

          {/* =================================================
              STATUS MESSAGE
          ================================================== */}

          {status.message && (

            <div
              className={`career-status ${status.type}`}
              role="alert"
            >
              {status.message}
            </div>

          )}

          {/* =================================================
              APPLICATION FORM

              IMPORTANT:
              This section is ONLY visible after
              clicking Apply.
          ================================================== */}

          {jobOpenings.length > 0 &&
            showApplicationForm && (

              <section
                id="career-application-form"
                className="application-section"
              >

                {/* =========================================
                    APPLICATION HEADING
                ========================================== */}

                <div className="application-heading">

                  <span>
                    CAREER APPLICATION
                  </span>

                  <h2>
                    Apply for a Position
                  </h2>

                  <p>
                    Fill in your details and our HR
                    team will get back to you.
                  </p>

                </div>

                {/* =========================================
                    SELECTED POSITION
                ========================================== */}

                <div className="selected-position-box">

                  <div>

                    <span>
                      Selected Position
                    </span>

                    <strong>
                      {selectedPosition}
                    </strong>

                  </div>

                  <button
                    type="button"
                    className="change-position-btn"
                    onClick={
                      handleChangePosition
                    }
                  >
                    Change Position
                  </button>

                </div>

                {/* =========================================
                    APPLICATION FORM
                ========================================== */}

                <form
                  id="career-form"
                  className="career-form"
                  onSubmit={handleSubmit}
                >

                  <div className="form-grid">

                    {/* FULL NAME */}

                    <div className="form-group">

                      <label htmlFor="name">
                        Full Name
                      </label>

                      <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        autoComplete="name"
                        required
                      />

                    </div>

                    {/* EMAIL */}

                    <div className="form-group">

                      <label htmlFor="email">
                        Email Address
                      </label>

                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        autoComplete="email"
                        required
                      />

                    </div>

                    {/* PHONE */}

                    <div className="form-group">

                      <label htmlFor="phone">
                        Phone Number
                      </label>

                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        placeholder="Enter your phone number"
                        autoComplete="tel"
                        required
                      />

                    </div>

                    {/* QUALIFICATION */}

                    <div className="form-group">

                      <label htmlFor="qualification">
                        Qualification
                      </label>

                      <input
                        id="qualification"
                        type="text"
                        name="qualification"
                        placeholder="Enter your qualification"
                        required
                      />

                    </div>

                  </div>

                  {/* =======================================
                      POSITION
                  ======================================== */}

                  <input
                    type="hidden"
                    name="position"
                    value={selectedPosition}
                  />

                  {/* =======================================
                      HONEYPOT
                  ======================================== */}

                  <input
                    type="checkbox"
                    name="botcheck"
                    tabIndex={-1}
                    autoComplete="off"
                    className="career-honeypot"
                  />

                  {/* =======================================
                      SUBMIT
                  ======================================== */}

                  <button
                    type="submit"
                    className="submit-application-btn"
                    disabled={isSending}
                  >
                    {isSending
                      ? "Sending..."
                      : "Send Application"}
                  </button>

                </form>

              </section>

            )}

        </div>

      </section>

    </main>
  );
};

export default Careers;