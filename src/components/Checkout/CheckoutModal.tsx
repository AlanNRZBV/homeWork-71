import { useAppDispatch } from '../../app/hooks.ts';
import { toggleVisibility } from './checkoutSlice.ts';

const Checkout = () => {
  const dispatch = useAppDispatch()

  const onCloseHandler = ()=>{
    dispatch(toggleVisibility())
  }

  return (
    <div className="border border-1 rounded-3 p-3">
      <span className="text-primary">test</span>
      <button onClick={onCloseHandler} type="button" className="btn btn-outline-warning">close</button>
    </div>
  );
};

export default Checkout;