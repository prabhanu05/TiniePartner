export interface SubCategoryModel {
    id: number;
    name: string;
    imageUrl: string;
}

export interface CategoryModel {
    id: number;
    name: string;
}

export interface CategoryListModel extends CategoryModel {
    subCategories: SubCategoryModel[];
}
