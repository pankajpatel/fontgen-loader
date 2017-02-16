var glob = require("glob").sync;

module.exports = {
    fontName: "Octicons",
    files: glob("./octicons/svg/*.svg", {cwd: __dirname}),
    baseSelector: ".octicon",
    classPrefix: "octicon-",
    cssFile: 'css'
};
