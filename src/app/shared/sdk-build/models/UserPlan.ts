/* tslint:disable */
import {
  Account,
  Plan
} from '../index';

declare var Object: any;
export interface UserPlanInterface {
  "expiry_date"?: Date;
  "description"?: string;
  "author"?: string;
  "id"?: any;
  "account_id"?: any;
  "plan_id"?: any;
  account?: Account;
  plan?: Plan;
}

export class UserPlan implements UserPlanInterface {
  "expiry_date": Date;
  "description": string;
  "author": string;
  "id": any;
  "account_id": any;
  "plan_id": any;
  account: Account;
  plan: Plan;
  constructor(data?: UserPlanInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `UserPlan`.
   */
  public static getModelName() {
    return "UserPlan";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of UserPlan for dynamic purposes.
  **/
  public static factory(data: UserPlanInterface): UserPlan{
    return new UserPlan(data);
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
      name: 'UserPlan',
      plural: 'UserPlans',
      path: 'UserPlans',
      idName: 'id',
      properties: {
        "expiry_date": {
          name: 'expiry_date',
          type: 'Date'
        },
        "description": {
          name: 'description',
          type: 'string'
        },
        "author": {
          name: 'author',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "account_id": {
          name: 'account_id',
          type: 'any'
        },
        "plan_id": {
          name: 'plan_id',
          type: 'any'
        },
      },
      relations: {
        account: {
          name: 'account',
          type: 'Account',
          model: 'Account',
          relationType: 'belongsTo',
                  keyFrom: 'account_id',
          keyTo: 'id'
        },
        plan: {
          name: 'plan',
          type: 'Plan',
          model: 'Plan',
          relationType: 'belongsTo',
                  keyFrom: 'plan_id',
          keyTo: 'id'
        },
      }
    }
  }
}
