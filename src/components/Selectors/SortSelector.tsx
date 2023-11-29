import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

type Props = {
  onSelectSortOrder: (sortOrder: string) => void;
  selectedSortOrder: string;
};

const SortSelector = ({ onSelectSortOrder, selectedSortOrder }: Props) => {
  const sortOrder = [
    { id: 1, value: '', label: 'Relevance' },
    { id: 2, value: '-added', label: 'Date added' },
    { id: 3, value: 'name', label: 'Name' },
    { id: 4, value: '-released', label: 'Release date' },
    { id: 5, value: '-metacritic', label: 'Popularity' },
    { id: 6, value: '-rating', label: 'Average rating' },
  ];

  const currentSortOrder = sortOrder.find(
    (order) => order.value === selectedSortOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Sort by: {currentSortOrder?.label || 'Relevance'}
      </MenuButton>
      <MenuList>
        {sortOrder.map((order) => (
          <MenuItem
            key={order.id}
            value={order.value}
            onClick={() => onSelectSortOrder(order.value)}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
export default SortSelector;
