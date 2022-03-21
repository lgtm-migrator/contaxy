/**
 * Contaxy API
 * Functionality to create and manage projects, services, jobs, and files.
 *
 * The version of the OpenAPI document: 0.0.14
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The SystemStatistics model module.
 * @module model/SystemStatistics
 * @version 0.0.14
 */
class SystemStatistics {
  /**
   * Constructs a new <code>SystemStatistics</code>.
   * @alias module:model/SystemStatistics
   * @param projectCount {Number}
   * @param userCount {Number}
   * @param jobCount {Number}
   * @param serviceCount {Number}
   * @param fileCount {Number}
   */
  constructor(projectCount, userCount, jobCount, serviceCount, fileCount) {
    SystemStatistics.initialize(
      this,
      projectCount,
      userCount,
      jobCount,
      serviceCount,
      fileCount
    );
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(
    obj,
    projectCount,
    userCount,
    jobCount,
    serviceCount,
    fileCount
  ) {
    obj['project_count'] = projectCount;
    obj['user_count'] = userCount;
    obj['job_count'] = jobCount;
    obj['service_count'] = serviceCount;
    obj['file_count'] = fileCount;
  }

  /**
   * Constructs a <code>SystemStatistics</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SystemStatistics} obj Optional instance to populate.
   * @return {module:model/SystemStatistics} The populated <code>SystemStatistics</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SystemStatistics();

      if (data.hasOwnProperty('project_count')) {
        obj['project_count'] = ApiClient.convertToType(
          data['project_count'],
          'Number'
        );
      }
      if (data.hasOwnProperty('user_count')) {
        obj['user_count'] = ApiClient.convertToType(
          data['user_count'],
          'Number'
        );
      }
      if (data.hasOwnProperty('job_count')) {
        obj['job_count'] = ApiClient.convertToType(data['job_count'], 'Number');
      }
      if (data.hasOwnProperty('service_count')) {
        obj['service_count'] = ApiClient.convertToType(
          data['service_count'],
          'Number'
        );
      }
      if (data.hasOwnProperty('file_count')) {
        obj['file_count'] = ApiClient.convertToType(
          data['file_count'],
          'Number'
        );
      }
    }
    return obj;
  }
}

/**
 * @member {Number} project_count
 */
SystemStatistics.prototype['project_count'] = undefined;

/**
 * @member {Number} user_count
 */
SystemStatistics.prototype['user_count'] = undefined;

/**
 * @member {Number} job_count
 */
SystemStatistics.prototype['job_count'] = undefined;

/**
 * @member {Number} service_count
 */
SystemStatistics.prototype['service_count'] = undefined;

/**
 * @member {Number} file_count
 */
SystemStatistics.prototype['file_count'] = undefined;

export default SystemStatistics;
