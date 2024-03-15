import { formatCurrency } from '../../utils/helpers';
import { getCurrentQuantity } from './cartSlice';
import DeleteItem from './DeleteItem';
import UpdatePizzaQuantity from './UpdatePizzaQuantity';
import { useSelector } from 'react-redux';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currenQuantity = useSelector(getCurrentQuantity(pizzaId));
  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold ">{formatCurrency(totalPrice)}</p>
        <UpdatePizzaQuantity
          pizzaId={pizzaId}
          currenQuantity={currenQuantity}
        />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
