import { Endpoints } from '@constants/Endpoints';
import { Urls } from '@constants/Urls';
import { SubcatResponseModel } from '@models/api/CategorySubcategoryModel';
import { AddServicePayloadModel } from '@models/data/AddServiceModel';
import axios from 'axios';

export const CreateService = async (data: AddServicePayloadModel) => {
    let msg = '';

    for (let item of data.itemsUsed) {
        msg += `&itemsUsed=${item}`;
    }
    const formData = new FormData();

    formData.append('serviceImage', data.serviceImage as any);

    const apiUrl = await axios.post(
        `${Urls.CUSTOMER_LOCATION}business/${data.businessId}/${Endpoints.ADD_SERVICE}?cost=${data.cost}&description=${data.description}&discountPrice=${data.discountPrice}&duration=${data.duration}${msg}&name=${data.name}&serviceCategoryId=${data.serviceCategoryId}&serviceSubCategoryId=${data.serviceSubCategoryId}`,
        {
            formData,
        },
        {
            headers: {
                'Content-Type': 'multipart/form-data',
                token: data.token,
            },
            transformRequest: () => {
                return formData;
            },
        }
    );

    const apiData = apiUrl.data as SubcatResponseModel;

    if (apiData?.message === 'success') {
        return true;
    }
    throw new Error('Unable to Create Category');
};
