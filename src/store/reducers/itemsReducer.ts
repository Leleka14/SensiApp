import {IItemsState, ItemsActionTypes} from '../../interfaces/items';
import {defaultItems} from '../default/items';

const items = {
  data: defaultItems,
};

export const itemsReducer = (
  state: IItemsState = items,
  action,
): IItemsState => {
  switch (action.type) {
    case ItemsActionTypes.INIT_STATE:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};
