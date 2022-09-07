import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import { fetchTopRatedMovie } from '../../../api/api';
import MoviesCard from './MoviesCard';
import SeeMoreButton from './SeeMoreButton';

const TopRatedList = () => {
  const { isLoading, data } = useQuery(['homeTopRated'], () => fetchTopRatedMovie(1), {
    staleTime: 60 * 60 * 1000, // 1 hour refresh term
  });

  return (
    <Wrapper>
      {!isLoading ? (
        <>
          {data.results.map(item => (
            <MoviesCard key={item.id} item={item} />
          ))}
          <SeeMoreButton to="/top_rated" />
        </>
      ) : (
        '로딩중 '
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  overflow: auto;
  padding-left: 32px;
  padding-right: 160px;
  align-items: center;
`;

export default TopRatedList;
