/* tslint:disable */
import {
  Account
} from '../index';

declare var Object: any;
export interface ChannelInterface {
  "username": string;
  "channel_email": string;
  "channel_password"?: string;
  "api_key"?: string;
  "api_secret"?: string;
  "network"?: boolean;
  "status"?: boolean;
  "id"?: any;
  "accountId"?: any;
  "account_id"?: any;
  account?: Account;
}

export class Channel implements ChannelInterface {
  "username": string;
  "channel_email": string;
  "channel_password": string;
  "api_key": string;
  "api_secret": string;
  "network": boolean;
  "status": boolean;
  "id": any;
  "accountId": any;
  "account_id": any;
  account: Account;
  constructor(data?: ChannelInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Channel`.
   */
  public static getModelName() {
    return "Channel";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Channel for dynamic purposes.
  **/
  public static factory(data: ChannelInterface): Channel{
    return new Channel(data);
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
      name: 'Channel',
      plural: 'Channels',
      path: 'Channels',
      idName: 'id',
      properties: {
        "username": {
          name: 'username',
          type: 'string'
        },
        "channel_email": {
          name: 'channel_email',
          type: 'string'
        },
        "channel_password": {
          name: 'channel_password',
          type: 'string'
        },
        "api_key": {
          name: 'api_key',
          type: 'string'
        },
        "api_secret": {
          name: 'api_secret',
          type: 'string'
        },
        "network": {
          name: 'network',
          type: 'boolean'
        },
        "status": {
          name: 'status',
          type: 'boolean'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "accountId": {
          name: 'accountId',
          type: 'any'
        },
        "account_id": {
          name: 'account_id',
          type: 'any'
        },
      },
      relations: {
        account: {
          name: 'account',
          type: 'Account',
          model: 'Account',
          relationType: 'belongsTo',
                  keyFrom: 'accountId',
          keyTo: 'id'
        },
      }
    }
  }
}
