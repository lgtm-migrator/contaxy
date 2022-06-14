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
 * The OAuthToken model module.
 * @module model/OAuthToken
 * @version 0.0.18
 */
class OAuthToken {
  /**
   * Constructs a new <code>OAuthToken</code>.
   * @alias module:model/OAuthToken
   * @param tokenType {String} The type of token this is, typically just the string `bearer`
   * @param accessToken {String} The access token string.
   */
  constructor(tokenType, accessToken) {
    OAuthToken.initialize(this, tokenType, accessToken);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, tokenType, accessToken) {
    obj['token_type'] = tokenType;
    obj['access_token'] = accessToken;
  }

  /**
   * Constructs a <code>OAuthToken</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OAuthToken} obj Optional instance to populate.
   * @return {module:model/OAuthToken} The populated <code>OAuthToken</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OAuthToken();

      if (data.hasOwnProperty('token_type')) {
        obj['token_type'] = ApiClient.convertToType(
          data['token_type'],
          'String'
        );
      }
      if (data.hasOwnProperty('access_token')) {
        obj['access_token'] = ApiClient.convertToType(
          data['access_token'],
          'String'
        );
      }
      if (data.hasOwnProperty('expires_in')) {
        obj['expires_in'] = ApiClient.convertToType(
          data['expires_in'],
          'Number'
        );
      }
      if (data.hasOwnProperty('refresh_token')) {
        obj['refresh_token'] = ApiClient.convertToType(
          data['refresh_token'],
          'String'
        );
      }
      if (data.hasOwnProperty('scope')) {
        obj['scope'] = ApiClient.convertToType(data['scope'], 'String');
      }
      if (data.hasOwnProperty('id_token')) {
        obj['id_token'] = ApiClient.convertToType(data['id_token'], 'String');
      }
    }
    return obj;
  }
}

/**
 * The type of token this is, typically just the string `bearer`
 * @member {String} token_type
 */
OAuthToken.prototype['token_type'] = undefined;

/**
 * The access token string.
 * @member {String} access_token
 */
OAuthToken.prototype['access_token'] = undefined;

/**
 * The expiration time of the access token in seconds.
 * @member {Number} expires_in
 */
OAuthToken.prototype['expires_in'] = undefined;

/**
 * API token to refresh the sesion token (if it expires).
 * @member {String} refresh_token
 */
OAuthToken.prototype['refresh_token'] = undefined;

/**
 * The scopes contained in the access token.
 * @member {String} scope
 */
OAuthToken.prototype['scope'] = undefined;

/**
 * OpenID Connect ID Token that encodes the user’s authentication information.
 * @member {String} id_token
 */
OAuthToken.prototype['id_token'] = undefined;

export default OAuthToken;
