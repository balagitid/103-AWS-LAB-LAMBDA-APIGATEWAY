import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const API_URL = process.env.REACT_APP_API_URL;

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-light min-vh-100">
      <div className="top-header bg-white text-center py-3 shadow-sm">
        <img
          src="https://kubelancerlogopublic.s3.us-east-1.amazonaws.com/Kubelancer+Logo-3.png"
          alt="Kubelancer Logo"
          className="img-fluid"
          style={{ maxHeight: "80px" }}
        />
      </div>

      <div className="running-text text-white text-center py-2">
        <p className="d-inline-block" style={{ animation: "marquee 15s linear infinite", whiteSpace: "nowrap" }}>
          AWS CLOUD DEMO LABS: AWS Lambda integrated with API Gateway - Learn, Experiment, and Innovate with AWS
        </p>
      </div>

      <div className="container mt-5">
        <div className="form-section bg-white p-4 rounded shadow-sm">
        <h4 className="text-center mb-4">How this AWS Lambda & API Gateway Demo Lab Works</h4>
          <ol>
            <li>This lab demonstrates how to build serverless applications using AWS Lambda integrated with API Gateway.</li>
            <li>It allows you to test event-driven APIs in the cloud.</li>
            <li>Trigger Lambda functions via the API Gateway endpoint below.</li>
            <li>Retrieve and display real-time responses from the Lambda function.</li>
            <li>Understand how serverless backend logic operates without server management.</li>
          </ol>

          <div className="bg-light p-3 rounded mt-4">
            <p>🌐 <strong>API Gateway Endpoint:</strong></p>
            <pre className="bg-white p-3 rounded shadow-sm">
              {API_URL}
            </pre>
          </div>

          <div className="bg-light p-3 rounded mt-3">
            <p>📊 <strong>API Response:</strong></p>
            <pre className="bg-white p-3 rounded shadow-sm">
              {loading
                ? "Loading..."
                : error
                ? `Error: ${error}`
                : data
                ? JSON.stringify(data, null, 2)
                : "No data fetched yet."}
            </pre>
          </div>

          <div className="text-center mt-3">
            <button
              onClick={fetchData}
              className="btn btn-primary btn-lg"
            >
              🔄 Refresh Page
            </button>
          </div>
        </div>
      </div>

      <div className="footer text-center py-3 text-muted">
        <p>© 2025 Kubelancer Private Limited | <a href="https://kubelancer.com">Visit Website</a></p>
        <p>📩 Contact us at <a href="mailto:connect@kubelancer.com">connect@kubelancer.com</a></p>
      </div>

      <style>{`
        .running-text {
          background-color: #0b5ed7;
          overflow: hidden;
          white-space: nowrap;
        }
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}
