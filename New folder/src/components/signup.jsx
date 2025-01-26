import React from "react";

import "../index.css";
import { useFormik } from "formik";
import * as Yup from "yup";

function App() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string()
        .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Invalid email address")
        .required("Required"),
      password: Yup.string()
        .required("Required")
        .matches(
          /^(?=.[A-Z])(?=.\d).{8,}$/,
          "Must include one uppercase letter,  one number and be at least 8 characters"
        ),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div>
      <section className="showcase">
        <div className="overlay">
          <article>
            <p className="tag">
              <strong>Creat Your Account </strong>
            </p>
            <form className="form" onSubmit={formik.handleSubmit}>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First Name"   
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <div style={{ color: "red" }}>{formik.errors.firstName}</div>
              ) : null}
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <div style={{ color: "red" }}>{formik.errors.lastName}</div>
              ) : null}
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div style={{ color: "red" }}>{formik.errors.email}</div>
              ) : null}
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <div style={{ color: "red" }}>{formik.errors.password}</div>
              ) : null}
              <button type="submit">Sign up </button>
              <small>
                By clicking the button, you are agreeing to our{" "}
                <span className="red">Terms and Services</span>
              </small>
            </form>
          </article>
        </div>
      </section>
    </div>
  );
}

export default App;
