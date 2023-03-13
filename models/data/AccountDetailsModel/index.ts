import { CategoryModel } from '@models/api/CategoryListModel';
import { FileModel } from '@models/data/FileModel';

export interface AccountDetailsHeaderModel {
    viewDetails: boolean;
    editDetails: boolean;
}

export interface AccountDetailsDataModel {
    name: string;
    email: string;
    mobile: string;
    businessName: string;
    typeOfBusiness: CategoryModel;
    businessGstin: FileModel;
    businessPan: string;
}
