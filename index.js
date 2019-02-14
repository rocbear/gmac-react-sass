const fs = require("fs");
const path = require("path");

module.exports = options => {
  const { useSASS } = options;
  const componentContent = require("./lib/component.template")(options);
  const styleContent = require("./lib/styles.template")(options);
  return {
    component: {
      content: componentContent,
      extension: ".js"
    },
    styles: {
      content: styleContent,
      extension: useSASS ? ".sass" : "scss"
    }
  };
};
