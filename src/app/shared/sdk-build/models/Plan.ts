/* tslint:disable */
import {
  Account
} from '../index';

declare var Object: any;
export interface PlanInterface {
  "plan_name": string;
  "days_limmit": number;
  "channel_limmit": number;
  "status"?: boolean;
  "id"?: any;
  accounts?: Account[];
}

export class Plan implements PlanInterface {
  "plan_name": string;
  "days_limmit": number;
  "channel_limmit": number;
  "status": boolean;
  "id": any;
  accounts: Account[];
  constructor(data?: PlanInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Plan`.
   */
  public static getModelName() {
    return "Plan";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Plan for dynamic purposes.
  **/
  public static factory(data: PlanInterface): Plan{
    return new Plan(data);
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
      name: 'Plan',
      plural: 'Plans',
      path: 'Plans',
      idName: 'id',
      properties: {
        "plan_name": {
          name: 'plan_name',
          type: 'string'
        },
        "days_limmit": {
          name: 'days_limmit',
          type: 'number'
        },
        "channel_limmit": {
          name: 'channel_limmit',
          type: 'number'
        },
        "status": {
          name: 'status',
          type: 'boolean'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
        accounts: {
          name: 'accounts',
          type: 'Account[]',
          model: 'Account',
          relationType: 'hasMany',
          modelThrough: 'UserPlan',
          keyThrough: 'accountId',
          keyFrom: 'id',
          keyTo: 'plan_id'
        },
      }
    }
  }
}
