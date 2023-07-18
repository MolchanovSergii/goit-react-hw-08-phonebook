import { ActorPhoto } from './CastCardStyled';
import { BsCardImage } from 'react-icons/bs';

const CastCard = ({ actors }) => {
  if (!actors.cast.length) {
    return <p>Sorry, no figures for cast</p>;
  }

  const baseImagePath = 'https://image.tmdb.org/t/p/w500';

  return (
    <>
      {actors.cast.map(({ profile_path, original_name, character, id }) => (
        <div key={id}>
          {profile_path ? (
            <ActorPhoto
              src={`${baseImagePath}${profile_path}`}
              alt="Movie Actors Cast"
            />
          ) : (
            <BsCardImage size={100} />
          )}
          <li>{original_name}</li>
          <p>Character: {character}</p>
        </div>
      ))}
    </>
  );
};

export default CastCard;
