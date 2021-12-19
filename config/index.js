module.exports = {
    secret: process.env.NODE_ENV === "production" ? process.env.SECRET: "AGTJMDKTO656F6GHSGJH32323FSD65G6FG5D6GD5G6DG54SDG5NM6NH5MCXCd",
    api: process.env.NODE_ENV === "production" ? "https://api.loja-teste.ampliee.com" : "http://localhost:3000",
    loja: process.env.NODE_ENV === "production" ? "https://loja-teste.ampliee.com" : "http://localhost:8000"
}