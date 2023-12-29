import { useAppSelector } from '../../app/hooks.ts';
import { totalSum } from './totalSlice.ts';

const Total = () => {

  const sum = useAppSelector(totalSum)

  return (
    <div>
      <span>Total: {sum}</span>
    </div>
  );
};

export default Total;