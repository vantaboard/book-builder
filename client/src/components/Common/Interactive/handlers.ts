import { toggle } from 'features/interactAnimation/interactAnimationSlice';
import { useAppDispatch } from 'hooks';

export const handleInteraction = () => {
  const dispatch = useAppDispatch();

  return () => {
    dispatch(toggle(true));
    dispatch(toggle(false));
  };
};
