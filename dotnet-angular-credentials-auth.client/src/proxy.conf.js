const PROXY_CONFIG = [
  {
    context: [
      "/api/Auth",
      "/api/Auth/register",
      "/api/Auth/login"
    ],
    target: "https://localhost:7256",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
