import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    colors: {
      main: string;
      secondary: string;
    };
    backgroundColors: {
      main: string;
      secondary: string;
      hover: string;
    };
    font: string;
    padding: {
      resources: string;
    };
  }
}
