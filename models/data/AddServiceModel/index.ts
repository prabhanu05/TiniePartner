import { CategoryModel } from '@models/api/CategoryListModel';
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
