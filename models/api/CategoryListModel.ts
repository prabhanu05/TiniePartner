export interface CategoryModel {
    id: string;
    name: string;
}

export interface SubCategoryModel extends CategoryModel {
    imageUrl: string;
}

export interface CategoryListModel extends CategoryModel {
    subCategories: SubCategoryModel[];
}
