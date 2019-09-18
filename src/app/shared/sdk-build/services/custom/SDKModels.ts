/* tslint:disable */
import { Injectable } from '@angular/core';
import { Account } from '../../models/Account';
import { Channel } from '../../models/Channel';
import { Plan } from '../../models/Plan';
import { UserPlan } from '../../models/UserPlan';
import { Category } from '../../models/Category';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    Account: Account,
    Channel: Channel,
    Plan: Plan,
    UserPlan: UserPlan,
    Category: Category,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
