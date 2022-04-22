/**
 * Contaxy API
 * Functionality to create and manage projects, services, jobs, and files.
 *
 * The version of the OpenAPI document: 0.0.17
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The FileInput model module.
 * @module model/FileInput
 * @version 0.0.17
 */
class FileInput {
  /**
   * Constructs a new <code>FileInput</code>.
   * @alias module:model/FileInput
   */
  constructor() {
    FileInput.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>FileInput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FileInput} obj Optional instance to populate.
   * @return {module:model/FileInput} The populated <code>FileInput</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new FileInput();

      if (data.hasOwnProperty('display_name')) {
        obj['display_name'] = ApiClient.convertToType(
          data['display_name'],
          'String'
        );
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(
          data['description'],
          'String'
        );
      }
      if (data.hasOwnProperty('icon')) {
        obj['icon'] = ApiClient.convertToType(data['icon'], 'String');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], {
          String: 'String',
        });
      }
      if (data.hasOwnProperty('disabled')) {
        obj['disabled'] = ApiClient.convertToType(data['disabled'], 'Boolean');
      }
    }
    return obj;
  }
}

/**
 * A user-defined human-readable name of the resource. The name can be up to 128 characters long and can consist of any UTF-8 character.
 * @member {String} display_name
 */
FileInput.prototype['display_name'] = undefined;

/**
 * A user-defined short description about the resource. Can consist of any UTF-8 character.
 * @member {String} description
 * @default ''
 */
FileInput.prototype['description'] = '';

/**
 * Identifier or image URL used for displaying this resource.
 * @member {String} icon
 */
FileInput.prototype['icon'] = undefined;

/**
 * A collection of arbitrary key-value pairs associated with this resource that does not need predefined structure. Enable third-party integrations to decorate objects with additional metadata for their own use.
 * @member {Object.<String, String>} metadata
 */
FileInput.prototype['metadata'] = undefined;

/**
 * Allows to disable a resource without requiring deletion. A disabled resource is not shown and not accessible.
 * @member {Boolean} disabled
 * @default false
 */
FileInput.prototype['disabled'] = false;

export default FileInput;
