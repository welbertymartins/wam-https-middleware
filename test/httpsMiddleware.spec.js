const { expect } = require("chai")
const { getJSONApi } = require("../httpsMiddleware")

describe("Https Middleware Test", function () {

    it("Get Json Api When Url Is Invalid", async () => {
        const url = ""
        expect(await getJSONApi(url)).to.deep.equal({})
    })
})
