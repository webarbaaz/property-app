import type * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  slug: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  phone,
  slug,
}) => (
  <div
    style={{
      fontFamily: "'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif",
      color: "#333",
      backgroundColor: "#f4f4f4",
      padding: "40px 0",
    }}
  >
    <table
      cellPadding="0"
      cellSpacing="0"
      style={{
        maxWidth: "600px",
        width: "100%",
        margin: "0 auto",
        backgroundColor: "#ffffff",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <thead>
        <tr>
          <th
            style={{
              backgroundColor: "#3498db",
              color: "#ffffff",
              padding: "30px",
              fontSize: "28px",
              fontWeight: "300",
              textAlign: "center",
            }}
          >
            Property Enquiry
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ padding: "40px 30px" }}>
            <h2
              style={{
                fontSize: "22px",
                color: "#3498db",
                marginBottom: "20px",
              }}
            >
              Enquiry Details
            </h2>
            {[
              { label: "Name", value: name },
              { label: "Email", value: email },
              { label: "Phone", value: phone },
              { label: "Link", value: slug },
            ].map(({ label, value }) => (
              <p
                key={label}
                style={{ fontSize: "16px", margin: "10px 0", color: "#555" }}
              >
                <span
                  style={{
                    fontWeight: "600",
                    color: "#333",
                    marginRight: "10px",
                  }}
                >
                  {label}:
                </span>
                {value}
              </p>
            ))}
          </td>
        </tr>
        <tr>
          <td
            style={{
              padding: "20px 30px",
              backgroundColor: "#f8f8f8",
              textAlign: "center",
              color: "#888",
              fontSize: "14px",
            }}
          >
            This email was sent automatically. Please do not reply.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);
