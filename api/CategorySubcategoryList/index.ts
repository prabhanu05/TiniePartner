import { Endpoints } from '@constants/Endpoints';
import { Urls } from '@constants/Urls';
import { CategoryListModel } from '@models/api/CategoryListModel';
import axios from 'axios';

export const CategorySubcategoryList = async (token: string) => {
    const apiUrl = await axios.get(
        `${Urls.CUSTOMER_LOCATION}${Endpoints.LIST_CAT_SUBCAT}`,
        {
            headers: { token },
        }
    );

    const apiData = apiUrl.data as CategoryListModel[];

    if (Array.isArray(apiData) && apiData.length > 0) return apiData;
    throw new Error('Unable to find category list');
};
