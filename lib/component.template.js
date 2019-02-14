module.exports = options => `import React from "react";

import styles from "./${options.styleName}.scss";

const ${options.name} = ({ className }) => (
  <div className={[styles.container, className].join(" ")} />
);

export default MyComponent;
`;
