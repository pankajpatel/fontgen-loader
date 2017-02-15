var glob = require("glob").sync;

module.exports = {
    fontName: "Octicons",
    files: glob("./octicons/svg/*.svg", {cwd: __dirname}),
    baseClass: "octicon",
    classPrefix: "octicon-",
    cssFile: 'css'
};
