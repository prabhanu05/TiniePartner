export interface SubCategoryModel {
    id: number;
    name: string;
    imageUrl: string;
}

export interface CategoryModel {
    id: string;
    name: string;
}

export interface CategoryListModel extends CategoryModel {
    subCategories: SubCategoryModel[];
}
