import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from 'entities/Counter/model/slice/counterSlice';
import { getCounterValue } from 'entities/Counter/model/selectors/getCounterValue/getCounterValue';
import { t } from 'i18next';

interface CounterProps {
    className?: string
}

export const Counter = ({ className }: CounterProps) => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="value-counter">
                {counterValue}
            </h1>
            <Button
                data-testid="btn-increment"
                size="maxContent"
                onClick={increment}
            >
                {t('increment')}
            </Button>
            <Button
                data-testid="btn-decrement"
                size="maxContent"
                onClick={decrement}
            >
                {t('decrement')}
            </Button>
        </div>
    );
};
