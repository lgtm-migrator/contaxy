/**
 * Contaxy API
 * Functionality to create and manage projects, services, jobs, and files.
 *
 * The version of the OpenAPI document: 0.0.18
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The BodyRequestToken model module.
 * @module model/BodyRequestToken
 * @version 0.0.18
 */
class BodyRequestToken {
  /**
   * Constructs a new <code>BodyRequestToken</code>.
   * @alias module:model/BodyRequestToken
   * @param grantType {Object}
   */
  constructor(grantType) {
    BodyRequestToken.initialize(this, grantType);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, grantType) {
    obj['grant_type'] = grantType;
  }

  /**
   * Constructs a <code>BodyRequestToken</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BodyRequestToken} obj Optional instance to populate.
   * @return {module:model/BodyRequestToken} The populated <code>BodyRequestToken</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BodyRequestToken();

      if (data.hasOwnProperty('grant_type')) {
        obj['grant_type'] = ApiClient.convertToType(data['grant_type'], Object);
      }
      if (data.hasOwnProperty('username')) {
        obj['username'] = ApiClient.convertToType(data['username'], Object);
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], Object);
      }
      if (data.hasOwnProperty('scope')) {
        obj['scope'] = ApiClient.convertToType(data['scope'], Object);
      }
      if (data.hasOwnProperty('client_id')) {
        obj['client_id'] = ApiClient.convertToType(data['client_id'], Object);
      }
      if (data.hasOwnProperty('client_secret')) {
        obj['client_secret'] = ApiClient.convertToType(
          data['client_secret'],
          Object
        );
      }
      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], Object);
      }
      if (data.hasOwnProperty('redirect_uri')) {
        obj['redirect_uri'] = ApiClient.convertToType(
          data['redirect_uri'],
          Object
        );
      }
      if (data.hasOwnProperty('refresh_token')) {
        obj['refresh_token'] = ApiClient.convertToType(
          data['refresh_token'],
          Object
        );
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], Object);
      }
      if (data.hasOwnProperty('set_as_cookie')) {
        obj['set_as_cookie'] = ApiClient.convertToType(
          data['set_as_cookie'],
          Object
        );
      }
    }
    return obj;
  }
}

/**
 * @member {Object} grant_type
 */
BodyRequestToken.prototype['grant_type'] = undefined;

/**
 * @member {Object} username
 */
BodyRequestToken.prototype['username'] = undefined;

/**
 * @member {Object} password
 */
BodyRequestToken.prototype['password'] = undefined;

/**
 * @member {Object} scope
 */
BodyRequestToken.prototype['scope'] = undefined;

/**
 * @member {Object} client_id
 */
BodyRequestToken.prototype['client_id'] = undefined;

/**
 * @member {Object} client_secret
 */
BodyRequestToken.prototype['client_secret'] = undefined;

/**
 * @member {Object} code
 */
BodyRequestToken.prototype['code'] = undefined;

/**
 * @member {Object} redirect_uri
 */
BodyRequestToken.prototype['redirect_uri'] = undefined;

/**
 * @member {Object} refresh_token
 */
BodyRequestToken.prototype['refresh_token'] = undefined;

/**
 * @member {Object} state
 */
BodyRequestToken.prototype['state'] = undefined;

/**
 * @member {Object} set_as_cookie
 */
BodyRequestToken.prototype['set_as_cookie'] = undefined;

export default BodyRequestToken;
