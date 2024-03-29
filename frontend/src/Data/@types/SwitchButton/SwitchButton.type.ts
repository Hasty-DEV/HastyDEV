export interface SwitchButtonProps {
  toggleTheme(): void;
  theme: ThemeProps;
}

type ThemeProps = {
  title: string;
};
