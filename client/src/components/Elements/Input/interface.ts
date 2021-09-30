import { Weaken } from "helpers/typings";
import { HTMLAttributes } from "react";

export interface BuildInputProps extends Weaken<HTMLAttributes<HTMLInputElement>, 'prefix'> {
  prefix?: boolean;
  prefixText?: string;
  suffix?: boolean;
  suffixText?: string;
}

export interface InputProps extends BuildInputProps {
  name: string;
  value: string;
}
