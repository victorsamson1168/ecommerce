// Standard packages
import { FC } from 'react';

// Third-party packages
import Backdrop from './Backdrop';
import Container from './Container';
import Loader from './Loader';

// PropTypes
type BackdropLoaderProps = {
  /** send true if don't want to shift to left */
  isShiftedRight?: boolean;
};

const BackdropLoader: FC<BackdropLoaderProps> = (
  props: BackdropLoaderProps
) => {
  const { isShiftedRight = false } = props;
  return (
    <Backdrop isShiftedRight={isShiftedRight}>
      <Container
        className='h-screen flex flex-col justify-center items-center'
        maxWidth='sm'
      >
        <Loader />
      </Container>
    </Backdrop>
  );
};

export default BackdropLoader;
