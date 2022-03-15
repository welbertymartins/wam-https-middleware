const https = require("https")

const fromHttps = async (urlInput, printError = false) => {
    const url = String(urlInput)
    if (url.length === 0) {
        return {}
    }
    
    return await new Promise((resolve, reject) => {
        https.get(url, response => {
            const packages = []
            response.on("data", package => {
                packages.push(package)
            })
            response.on("end", () => {
                resolve(JSON.parse(packages.join("")))
            })
        }).on("error", (err) => {
            if (printError) {
                console.log(err.message)
            }
            reject({})
        })
    })
}

const getJSONApi = async (url, printError = false) => {
    try {
        return await fromHttps(url, printError)
    } catch (error) {
        console.log(error)
        return {}
    }
}

module.exports = { getJSONApi }
