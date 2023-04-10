import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from 'entities/Counter/model/slice/counterSlice';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

interface CounterProps {
    className?: string
}

export const Counter = ({ className }: CounterProps) => {
    const dispatch = useDispatch();
    const counter = useSelector((state:StateSchema) => state.counter);

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1>
                value=
                {counter.value}
            </h1>
            <Button
                size="maxContent"
                onClick={increment}
            >
                increment
            </Button>
            <Button
                size="maxContent"
                onClick={decrement}
            >
                decrement
            </Button>
        </div>
    );
};
