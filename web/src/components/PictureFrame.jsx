import { Image } from '@chakra-ui/react';
import PicFrame from '../assets/pictureframe.png';

const PictureFrame = ({ src, alt, ...props }) => {
  return (
    <Image
      src={src}
      alt={alt}
      {...props}
      borderWidth={'60px'}
      borderStyle={'solid'}
      style={{
        borderImage: `url(${PicFrame}) 20% round`,
      }}
    />
  );
};

export default PictureFrame;
