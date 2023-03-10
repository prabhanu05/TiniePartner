import { Endpoints } from '@constants/Endpoints';
import { Urls } from '@constants/Urls';
import {
    CreateCatSubcatPayloadModel,
    SubcatResponseModel,
} from '@models/api/CategorySubcategoryModel';
import axios from 'axios';

export const CreateSubcategory = async (data: CreateCatSubcatPayloadModel) => {
    const apiUrl = await axios.post(
        `${Urls.CUSTOMER_LOCATION}serviceCategory/${data.id}/${Endpoints.ADD_SERVICE_SUBCATEGORY}`,
        {
            name: data.name,
        },
        {
            headers: {
                token: data.token,
            },
        }
    );

    const apiData = apiUrl.data as SubcatResponseModel;

    if (apiData?.message === 'success') {
        return true;
    }
    throw new Error('Unable to Create Subcategory');
};
