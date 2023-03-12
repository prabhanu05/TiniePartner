import { Endpoints } from '@constants/Endpoints';
import { Urls } from '@constants/Urls';
import { CreateCatSubcatResponseModel } from '@models/api/CategorySubcategoryModel';
import { AddServicePayloadModel } from '@models/data/AddServiceModel';
import axios from 'axios';

export const CreateService = async (data: AddServicePayloadModel) => {
    const formData = new FormData();

    if (!!data.serviceImage) {
        formData.append('serviceImage', data.serviceImage as any);
    }

    const apiUrl = await axios.post(
        `${Urls.CUSTOMER_LOCATION}business/${data.businessId}/${Endpoints.ADD_SERVICE}?cost=${data.cost}&description=${data.description}&discountPrice=${data.discountPrice}&duration=${data.duration}&itemsUsed=${data.itemsUsed}&name=${data.name}&serviceCategoryId=${data.serviceCategoryId}&serviceSubcategoryId=${data.serviceSubCategoryId}`,
        {
            // formData
        },
        {
            headers: {
                token: data.token,
            },
        }
    );

    const apiData = apiUrl.data as CreateCatSubcatResponseModel;

    console.log(apiData);

    if (apiData?.status === 'Category creation successful') {
        return true;
    }
    throw new Error('Unable to Create Category');
};
