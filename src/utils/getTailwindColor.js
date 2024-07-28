import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

const fullConfig = resolveConfig(tailwindConfig);

export const getTailwindColor = (colorName) => {
  return fullConfig.theme.colors[colorName];
};
