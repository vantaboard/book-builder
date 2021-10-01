import { Interactive } from 'components/Common/Interactive/styles';
import styled from 'styled-components';

export const StyledButtonBase = styled('button')`
  ${Interactive}
  display: flex;
  z-index: 0;
  position: relative;
  height: 100%;
  width: 100%;
  border-width: 0;
`;