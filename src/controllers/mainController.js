require("dotenv").config()

module.exports = {
    index: (req, res) => {
        res.render("index", {domain: process.env.DOMAIN, formMail: process.env.FORM_MAIL})
    }
}