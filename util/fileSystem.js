import * as fs from "fs";
export default {
    require: function () {
        if (typeof process === "object" && process.versions && process.versions["electron"]) {
            try {
                const ogfs = require("original-fs");
                const originalFs = ogfs;
                if (Object.keys(originalFs).length > 0) {
                    return originalFs;
                }
            } catch (e) { }
        }
        return fs;
    }
};