import ItemDetails from "../components/views/ItemDetails.vue";
import Inventory from "../components/views/Inventory.vue";

export const routes = [
    {
        path: '',
        component: Inventory
    },
    {
        path: '/item/:id',
        component: ItemDetails
    }
]