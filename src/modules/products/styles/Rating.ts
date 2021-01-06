import styled from 'styled-components';

import { ReactComponent as Star } from 'common/assets/star.svg';
import { ReactComponent as EmptyStar } from 'common/assets/emptyStar.svg';

export const Wrapper = styled.div`
  margin: auto 16px 0px 16px;
`;

export const StyledStar = styled(Star)`
  margin-right: 10px;
  width: 13px;
  height: 12px;
`;

export const StyledEmptyStar = styled(EmptyStar)`
  margin-right: 10px;
  width: 13px;
  height: 12px;
`;
