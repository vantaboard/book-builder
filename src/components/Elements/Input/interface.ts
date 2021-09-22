export interface InputProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  value: string;
  prefix?: string;
  suffix?: string;
}
