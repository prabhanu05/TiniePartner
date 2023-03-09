import { Endpoints } from '@constants/Endpoints';
import { Urls } from '@constants/Urls';
import {
    CategoryListModel,
    CategoryModel,
} from '@models/api/CategoryListModel';
import axios from 'axios';

export const CategoryList = async () => {
    const apiUrl = await axios.get(
        `${Urls.CUSTOMER_LOCATION}${Endpoints.LIST_CAT_SUBCAT}`
    );

    const apiData = apiUrl.data as CategoryListModel[];
    const transformedData = [] as CategoryModel[];

    if (Array.isArray(apiData)) {
        for (let item of apiData) {
            for (let data of item?.subCategories) {
                transformedData.push({
                    id: data?.id?.toString(),
                    name: data?.name,
                });
            }
        }
        return transformedData;
    }
    throw new Error('Unable to find category list');
};
