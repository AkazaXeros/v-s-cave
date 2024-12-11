import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import useGameQueryStore from '../../store';

const SortSelector = () => {
  const sortOrders = [
    { id: 1, value: '', label: 'Relevance' },
    { id: 2, value: '-added', label: 'Date added' },
    { id: 3, value: 'name', label: 'Name' },
    { id: 4, value: '-released', label: 'Release date' },
    { id: 5, value: '-metacritic', label: 'Popularity' },
    { id: 6, value: '-rating', label: 'Average rating' },
  ];

  const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);
  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Sort by: {currentSortOrder?.label || 'Relevance'}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            key={order.id}
            value={order.value}
            onClick={() => setSortOrder(order.value)}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
export default SortSelector;
