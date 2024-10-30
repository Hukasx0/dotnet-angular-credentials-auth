const PROXY_CONFIG = [
  {
    context: [
      "/api/Auth",
    ],
    target: "https://localhost:7256",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
