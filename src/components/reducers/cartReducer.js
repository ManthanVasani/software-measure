import Item1 from "../../images/item1.jpg";
import Item2 from "../../images/item2.jpg";
import Item3 from "../../images/item3.jpg";
import Item4 from "../../images/item4.jpg";
import Item5 from "../../images/item5.jpg";
import Item6 from "../../images/item6.jpg";
import Item7 from "../../images/item7.jpg";
import Item8 from "../../images/item8.jpg";
import Item9 from "../../images/item9.jpg";
import Item10 from "../../images/item10.jpg";
import Item11 from "../../images/item11.jpg";
import Item12 from "../../images/item12.jpg";

import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_SHIPPING,
} from "../actions/action-types/cart-actions";

const initState = {
  items: [
    {
      id: 1,
      title: "Western Underground Orchid",
      desc: "A plant that spends its entire life living underground. But that’s exactly what the Western Underground Orchid does in its home habitat of Western Australia, where it was discovered back in 1928..",
      price: 525,
      img: Item1,
    },
    {
      id: 2,
      title: "Pitcher plant",
      desc: "These otherworldly plants only inhabit small sections of South American rainforests, and require extremely high levels of precipitation to grow. Pitcher plants are carnivores. They trap prey by luring it..",
      price: 480,
      img: Item2,
    },
    {
      id: 3,
      title: "Jellyfish tree",
      desc: "Growing only in Seychelles, a group of islands off the coast of East Africa, the jellyfish tree has one of the smallest habitats of any plant. Over the last 100 years, it was twice thought to be extinct, but has been rediscovered..",
      price: 620,
      img: Item3,
    },
    {
      id: 4,
      title: "Corpse flower",
      desc: "Despite its morbid name, the corpse flower is quite distinctive and beautiful, but unfortunately emits a scent that many describe as smelling like decomposition. The corpse flower also happens to be huge—the whole plant..",
      price: 460,
      img: Item4,
    },
    {
      id: 5,
      title: "Wood’s cycad",
      desc: "he Wood’s cycad is quite possibly the rarest plant on this list. Scientists believe it is completely extinct in the wild, but there are specimens living in several botanical gardens throughout the world. All living plants..",
      price: 499,
      img: Item5,
    },
    {
      id: 6,
      title: "Nepenthes Tenax",
      desc: "Having quite a few similarities with the pitcher plant, this plant grows up to a height of 100 cms with the pitcher shaped flower on the top, having a height of 15 cms. This is an extremely rare Australian lowland plant..",
      price: 799,
      img: Item6,
    },

    {
      id: 7,
      title: "Welwitschia",
      desc: "One of the longest living plants also known as the living fossil plant is again one of the rarest plant species found in Africa. This weird-looking plant has a woody, thick, short and stout trunk. This plant has a very slow..",
      price: 680,
      img: Item7,
    },
    {
      id: 8,
      title: "Pennantia Baylisiana",
      desc: "Scoring a place in the Guinness book of world records. Pennantia Baylisiana is again an extinct plant of the world which is rare to find means you can’t find it easily. This controversial plant has so many gender crisis, some..",
      price: 435,
      img: Item8,
    },

    {
      id: 9,
      title: "Amorphophallus Titanum",
      desc: "This strange-looking plant is only found in the botanical garden of the area, known as Rose Hills of Huntington. This moody plant only blooms occasionally and it looks like a flower with a red outing with an inner beige colour wick..",
      price: 564,
      img: Item9,
    },

    {
      id: 10,
      title: "Ghost Orchid",
      desc: "This weird looking plant resembles the shape of tiny ghosts hanging on its bushes. Like other orchids, this kind of orchid doesn’t have any leaves and has an apple scent. It is one of the rarest of orchid species found in the world and..",
      price: 423,
      img: Item10,
    },

    {
      id: 11,
      title: "Dragon’s Blood Tree",
      desc: "This Dragon Blood Tree resembles the shape of a mushroom when looked at it from below. If you want to see this rare tree, you’ll have to travel to Yemen, rent a boat, and visit the island of Socotra. The sap of this tree is red as blood and..",
      price: 875,
      img: Item11,
    },
    {
      id: 12,
      title: "Middlemist Red",
      desc: "The prettiest flower is no doubt rarest one in the world today. It has only two specimens left in the world: one in the Botanical gardens in London and the other in New Zealand. 200 years ago this was one of the most blooming flowers but due..",
      price: 745,
      img: Item12,
    },
  ],
  addedItems: [],
  total: 0,
};
const cartReducer = (state = initState, action) => {
  //INSIDE HOME COMPONENT
  if (action.type === ADD_TO_CART) {
    let addedItem = state.items.find((item) => item.id === action.id);
    //check if the action id exists in the addedItems
    let existed_item = state.addedItems.find((item) => action.id === item.id);
    if (existed_item) {
      addedItem.quantity += 1;
      return {
        ...state,
        total: state.total + addedItem.price,
      };
    } else {
      addedItem.quantity = 1;
      //calculating the total
      let newTotal = state.total + addedItem.price;

      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal,
      };
    }
  }
  if (action.type === REMOVE_ITEM) {
    let itemToRemove = state.addedItems.find((item) => action.id === item.id);
    let new_items = state.addedItems.filter((item) => action.id !== item.id);

    //calculating the total
    let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
    console.log(itemToRemove);
    return {
      ...state,
      addedItems: new_items,
      total: newTotal,
    };
  }
  //INSIDE CART COMPONENT
  if (action.type === ADD_QUANTITY) {
    let addedItem = state.items.find((item) => item.id === action.id);
    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.price;
    return {
      ...state,
      total: newTotal,
    };
  }
  if (action.type === SUB_QUANTITY) {
    let addedItem = state.items.find((item) => item.id === action.id);
    //if the qt == 0 then it should be removed
    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter((item) => item.id !== action.id);
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        addedItems: new_items,
        total: newTotal,
      };
    } else {
      addedItem.quantity -= 1;
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        total: newTotal,
      };
    }
  }

  if (action.type === ADD_SHIPPING) {
    return {
      ...state,
      total: state.total + 6,
    };
  }

  if (action.type === "SUB_SHIPPING") {
    return {
      ...state,
      total: state.total - 6,
    };
  } else {
    return state;
  }
};

export default cartReducer;
