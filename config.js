require("dotenv").config()

function getDatabaseUri() {
return (process.env.NODE_ENV === "test")
    ? "free_stuff_test"
    : process.env.DATABASE_URL || "free_stuff"; //DATABASE_URL production only
}

module.exports = {
    getDatabaseUri
}