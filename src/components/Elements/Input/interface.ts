export interface BuildInputProps {
  prefix?: boolean;
  prefixText?: string;
  suffix?: boolean;
  suffixText?: string;
  children: any;
}

export interface InputProps extends BuildInputProps {
  name: string;
  value: string;
}
