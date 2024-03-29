import "styled-components";
declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;
      span: string;
      background: string;
      text: string;
      color: string;
      color_button: string;
      borda: string;
      color_Form: string;
      box_shadow: string;
      color_emailVerification: string;
      post_background: string;
      post_border: string;
    };
  }
}
