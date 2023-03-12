import { Endpoints } from '@constants/Endpoints';
import { Urls } from '@constants/Urls';
import {
    CreateCatSubcatPayloadModel,
    CreateCatSubcatResponseModel,
} from '@models/api/CategorySubcategoryModel';
import axios from 'axios';

export const CreateCategory = async (data: CreateCatSubcatPayloadModel) => {
    const apiUrl = await axios.post(
        `${Urls.CUSTOMER_LOCATION}business/${data.id}/${Endpoints.ADD_SERVICE_CATEGORY}`,
        {
            name: data.name,
        },
        {
            headers: {
                token: data.token,
            },
        }
    );

    const apiData = apiUrl.data as CreateCatSubcatResponseModel;

    if (apiData?.status === 'Category creation successful') {
        return true;
    }
    throw new Error('Unable to Create Category');
};
