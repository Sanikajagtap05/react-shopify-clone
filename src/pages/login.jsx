import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function login() {
    if (username === "admin" && password === "1234") {
      alert("Login Successful");
    } else {
      alert("Wrong Username or Password");
    }
  }

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f2f2f2",
      }}
    >
      <div
        style={{
          width: "300px",
          padding: "30px",
          backgroundColor: "white",
          borderRadius: "10px",
          textAlign: "center",
          boxShadow: "0 0 10px gray",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>Login Page</h2>

        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            border: "1px solid gray",
            borderRadius: "5px",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "20px",
            border: "1px solid gray",
            borderRadius: "5px",
          }}
        />

        <button
          onClick={login}
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;