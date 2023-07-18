import styled from 'styled-components';
import { BsArrowLeftSquare } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
`;
export const MoviePoster = styled.img`
  width: 200px;
`;
export const Wrapper = styled.div``;

export const GenresList = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;
  gap: 12px;
`;

export const Arrow = styled(BsArrowLeftSquare)`
  margin-right: 10px;
`;

export const LinkBack = styled(Link)`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  margin-bottom: 10px;
  text-decoration: none;
  width: 100px;
  border: 1px solid tomato;
  border-radius: 5px;
  color: tomato;
`;

export const TitleBottom = styled.div`
  border-bottom: 1px solid black;
`;
