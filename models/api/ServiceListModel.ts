export interface ServiceModel {
    id: number;
    name: string;
    duration: number;
    cost: number;
    discount: number;
    offerPrice: number;
    description: string;
    itemsUsed: string[];
    imageUrl: string;
    isOnline: boolean;
}

export interface ServiceSubCategoryModel {
    id: number;
    tag: string;
    services: ServiceModel[];
}

export interface ServiceListModel {
    id: number;
    name: string;
    serviceSubCategory: ServiceSubCategoryModel[];
}
