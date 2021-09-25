import { borderThickness, highlight, shadows, speed } from '../../../theme';

export const Interactive = `
  transition: border-radius ${speed.interactive.hyper}s ease-in-out,
    background-color ${speed.interactive.hyper}s ease-in-out,
    box-shadow ${speed.interactive.hyper}s ease-in-out;
  &:focus-within {
    border-color: ${highlight};
    outline: ${borderThickness.small} solid ${highlight};
    box-shadow: ${shadows.box.soft.small};
  }
  &:hover {
    box-shadow: ${shadows.box.soft.small};
  }
`;
