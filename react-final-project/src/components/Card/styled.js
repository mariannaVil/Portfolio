import { Card, Typography } from '@mui/material';
import styled from 'styled-components';

export const CardWrapper = styled(Card)`
  width: 300px;
  font-style: italic;
  margin-bottom: 30px;
`;

export const DescriptionTypography = styled(Typography)`
  max-height: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
