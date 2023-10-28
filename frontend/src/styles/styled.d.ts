import 'styled-components'
declare module 'styled-components' {
    
    export interface DefaultTheme {
        title: string;

        colors: {
            primary: string;
            secondary: string;

            background: string;
            text: string;
            color:string;
            color_button: string;
            borda:string;
        }
    }
}