import { HTMLAttributes } from "react";
import { Weaken } from "../../../helpers/typings";

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
