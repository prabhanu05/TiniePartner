import { CategoryModel } from '@models/api/CategoryListModel';
import { FileModel } from '@models/data/FileModel';
import { ModalData } from '@models/data/ModalData';

export interface AddServiceModel {
    serviceCategory: CategoryModel;
    serviceSubCategory: CategoryModel;
    name: string;
    description: string;
    product1: string;
    product2: string;
    product3: string;
    product4: string;
    duration: string;
    cost: string;
    discountPrice: string;
}

export interface AddServiceModalData {
    error: ModalData;
    addCategory: ModalData;
    addSubcategory: ModalData;
}

export interface AddServicePayloadModel {
    businessId: number;
    cost: string;
    description: string;
    discountPrice: string;
    duration: string;
    itemsUsed: string[];
    name: string;
    serviceCategoryId: string;
    serviceSubCategoryId: string;
    serviceImage?: FileModel;
    token: string;
}
