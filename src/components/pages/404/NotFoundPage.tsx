import { Result, Button } from "antd";
import "../../../App.css";

function NotFoundPage() {
  return (
    <div
      style={{
        height: "90vh",
        display: "flex",
      }}
    >
      <Result
        status="error"
        title="404 - Contact an administrator if you believe this is an error."
        className="my-auto mx-auto"
        style={{width: "30%"}}
        extra={
          <Button
            className="btn-primary-soft-alt px-5"
            shape="round"
            size="large"
            href="/"
          >
            Go Back
          </Button>
        }
      />
    </div>
  );
}

export default NotFoundPage;
