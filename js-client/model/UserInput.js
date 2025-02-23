/**
 * Contaxy API
 * Functionality to create and manage projects, services, jobs, and files.
 *
 * The version of the OpenAPI document: 0.0.22
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The UserInput model module.
 * @module model/UserInput
 * @version 0.0.22
 */
class UserInput {
    /**
     * Constructs a new <code>UserInput</code>.
     * @alias module:model/UserInput
     */
    constructor() { 
        
        UserInput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserInput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserInput} obj Optional instance to populate.
     * @return {module:model/UserInput} The populated <code>UserInput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserInput();

            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('disabled')) {
                obj['disabled'] = ApiClient.convertToType(data['disabled'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * A unique username on the system.
 * @member {String} username
 */
UserInput.prototype['username'] = undefined;

/**
 * User email address.
 * @member {String} email
 */
UserInput.prototype['email'] = undefined;

/**
 * Indicates that user is disabled. Disabling a user will prevent any access to user-accessible resources.
 * @member {Boolean} disabled
 * @default false
 */
UserInput.prototype['disabled'] = false;






export default UserInput;

