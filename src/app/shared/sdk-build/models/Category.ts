/* tslint:disable */

declare var Object: any;
export interface CategoryInterface {
  "title": string;
  "icon"?: string;
  "routerLink"?: string;
  "id"?: any;
  "parent_id"?: any;
  childs?: Category[];
  parent?: Category;
}

export class Category implements CategoryInterface {
  "title": string;
  "icon": string;
  "routerLink": string;
  "id": any;
  "parent_id": any;
  childs: Category[];
  parent: Category;
  constructor(data?: CategoryInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Category`.
   */
  public static getModelName() {
    return "Category";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Category for dynamic purposes.
  **/
  public static factory(data: CategoryInterface): Category{
    return new Category(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Category',
      plural: 'Categories',
      path: 'Categories',
      idName: 'id',
      properties: {
        "title": {
          name: 'title',
          type: 'string'
        },
        "icon": {
          name: 'icon',
          type: 'string'
        },
        "routerLink": {
          name: 'routerLink',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "parent_id": {
          name: 'parent_id',
          type: 'any'
        },
      },
      relations: {
        childs: {
          name: 'childs',
          type: 'Category[]',
          model: 'Category',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'parent_id'
        },
        parent: {
          name: 'parent',
          type: 'Category',
          model: 'Category',
          relationType: 'belongsTo',
                  keyFrom: 'parent_id',
          keyTo: 'id'
        },
      }
    }
  }
}
