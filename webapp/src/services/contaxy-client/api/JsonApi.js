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
import JsonDocument from '../model/JsonDocument';
import ProblemDetails from '../model/ProblemDetails';

/**
 * Json service.
 * @module api/JsonApi
 * @version 0.0.17
 */
export default class JsonApi {
  /**
   * Constructs a new JsonApi.
   * @alias module:api/JsonApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * Create JSON document.
   * Creates a JSON document. If a document already exists for the given key, the document will be overwritten.  If no collection exists in the project with the provided `collection_id`, a new collection will be created.
   * @param {String} projectId A valid project ID.
   * @param {String} collectionId ID of the collection.
   * @param {String} key Key of the JSON document.
   * @param {Object} body
   * @param {Object} opts Optional parameters
   * @param {Boolean} opts.upsert If `True`, the document will be updated/overwritten if it already exists. (default to true)
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/JsonDocument} and HTTP response
   */
  createJsonDocumentWithHttpInfo(projectId, collectionId, key, body, opts) {
    opts = opts || {};
    let postBody = body;
    // verify the required parameter 'projectId' is set
    if (projectId === undefined || projectId === null) {
      throw new Error(
        "Missing the required parameter 'projectId' when calling createJsonDocument"
      );
    }
    // verify the required parameter 'collectionId' is set
    if (collectionId === undefined || collectionId === null) {
      throw new Error(
        "Missing the required parameter 'collectionId' when calling createJsonDocument"
      );
    }
    // verify the required parameter 'key' is set
    if (key === undefined || key === null) {
      throw new Error(
        "Missing the required parameter 'key' when calling createJsonDocument"
      );
    }
    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error(
        "Missing the required parameter 'body' when calling createJsonDocument"
      );
    }

    let pathParams = {
      project_id: projectId,
      collection_id: collectionId,
      key: key,
    };
    let queryParams = {
      upsert: opts['upsert'],
    };
    let headerParams = {};
    let formParams = {};

    let authNames = [
      'APIKeyCookie',
      'APIKeyHeader',
      'APIKeyQuery',
      'OAuth2PasswordBearer',
    ];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = JsonDocument;
    return this.apiClient.callApi(
      '/projects/{project_id}/json/{collection_id}/{key}',
      'PUT',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      null
    );
  }

  /**
   * Create JSON document.
   * Creates a JSON document. If a document already exists for the given key, the document will be overwritten.  If no collection exists in the project with the provided `collection_id`, a new collection will be created.
   * @param {String} projectId A valid project ID.
   * @param {String} collectionId ID of the collection.
   * @param {String} key Key of the JSON document.
   * @param {Object} body
   * @param {Object} opts Optional parameters
   * @param {Boolean} opts.upsert If `True`, the document will be updated/overwritten if it already exists. (default to true)
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/JsonDocument}
   */
  createJsonDocument(projectId, collectionId, key, body, opts) {
    return this.createJsonDocumentWithHttpInfo(
      projectId,
      collectionId,
      key,
      body,
      opts
    ).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * Delete a JSON collection.
   * Deletes all documents of a single JSON collection.
   * @param {String} projectId A valid project ID.
   * @param {String} collectionId ID of the collection.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  deleteJsonCollectionWithHttpInfo(projectId, collectionId) {
    let postBody = null;
    // verify the required parameter 'projectId' is set
    if (projectId === undefined || projectId === null) {
      throw new Error(
        "Missing the required parameter 'projectId' when calling deleteJsonCollection"
      );
    }
    // verify the required parameter 'collectionId' is set
    if (collectionId === undefined || collectionId === null) {
      throw new Error(
        "Missing the required parameter 'collectionId' when calling deleteJsonCollection"
      );
    }

    let pathParams = {
      project_id: projectId,
      collection_id: collectionId,
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [
      'APIKeyCookie',
      'APIKeyHeader',
      'APIKeyQuery',
      'OAuth2PasswordBearer',
    ];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = null;
    return this.apiClient.callApi(
      '/projects/{project_id}/json/{collection_id}',
      'DELETE',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      null
    );
  }

  /**
   * Delete a JSON collection.
   * Deletes all documents of a single JSON collection.
   * @param {String} projectId A valid project ID.
   * @param {String} collectionId ID of the collection.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  deleteJsonCollection(projectId, collectionId) {
    return this.deleteJsonCollectionWithHttpInfo(projectId, collectionId).then(
      function (response_and_data) {
        return response_and_data.data;
      }
    );
  }

  /**
   * Delete all JSON collections.
   * Deletes all JSON collections for the given project.
   * @param {String} projectId A valid project ID.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  deleteJsonCollectionsWithHttpInfo(projectId) {
    let postBody = null;
    // verify the required parameter 'projectId' is set
    if (projectId === undefined || projectId === null) {
      throw new Error(
        "Missing the required parameter 'projectId' when calling deleteJsonCollections"
      );
    }

    let pathParams = {
      project_id: projectId,
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [
      'APIKeyCookie',
      'APIKeyHeader',
      'APIKeyQuery',
      'OAuth2PasswordBearer',
    ];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = null;
    return this.apiClient.callApi(
      '/projects/{project_id}/json',
      'DELETE',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      null
    );
  }

  /**
   * Delete all JSON collections.
   * Deletes all JSON collections for the given project.
   * @param {String} projectId A valid project ID.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  deleteJsonCollections(projectId) {
    return this.deleteJsonCollectionsWithHttpInfo(projectId).then(function (
      response_and_data
    ) {
      return response_and_data.data;
    });
  }

  /**
   * Delete JSON document.
   * Deletes a single JSON document.  If no other document exists in the project collection, the collection will be deleted.
   * @param {String} projectId A valid project ID.
   * @param {String} collectionId ID of the collection.
   * @param {String} key Key of the JSON document.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  deleteJsonDocumentWithHttpInfo(projectId, collectionId, key) {
    let postBody = null;
    // verify the required parameter 'projectId' is set
    if (projectId === undefined || projectId === null) {
      throw new Error(
        "Missing the required parameter 'projectId' when calling deleteJsonDocument"
      );
    }
    // verify the required parameter 'collectionId' is set
    if (collectionId === undefined || collectionId === null) {
      throw new Error(
        "Missing the required parameter 'collectionId' when calling deleteJsonDocument"
      );
    }
    // verify the required parameter 'key' is set
    if (key === undefined || key === null) {
      throw new Error(
        "Missing the required parameter 'key' when calling deleteJsonDocument"
      );
    }

    let pathParams = {
      project_id: projectId,
      collection_id: collectionId,
      key: key,
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [
      'APIKeyCookie',
      'APIKeyHeader',
      'APIKeyQuery',
      'OAuth2PasswordBearer',
    ];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = null;
    return this.apiClient.callApi(
      '/projects/{project_id}/json/{collection_id}/{key}',
      'DELETE',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      null
    );
  }

  /**
   * Delete JSON document.
   * Deletes a single JSON document.  If no other document exists in the project collection, the collection will be deleted.
   * @param {String} projectId A valid project ID.
   * @param {String} collectionId ID of the collection.
   * @param {String} key Key of the JSON document.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  deleteJsonDocument(projectId, collectionId, key) {
    return this.deleteJsonDocumentWithHttpInfo(
      projectId,
      collectionId,
      key
    ).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * Get JSON document.
   * Returns a single JSON document.
   * @param {String} projectId A valid project ID.
   * @param {String} collectionId ID of the collection.
   * @param {String} key Key of the JSON document.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/JsonDocument} and HTTP response
   */
  getJsonDocumentWithHttpInfo(projectId, collectionId, key) {
    let postBody = null;
    // verify the required parameter 'projectId' is set
    if (projectId === undefined || projectId === null) {
      throw new Error(
        "Missing the required parameter 'projectId' when calling getJsonDocument"
      );
    }
    // verify the required parameter 'collectionId' is set
    if (collectionId === undefined || collectionId === null) {
      throw new Error(
        "Missing the required parameter 'collectionId' when calling getJsonDocument"
      );
    }
    // verify the required parameter 'key' is set
    if (key === undefined || key === null) {
      throw new Error(
        "Missing the required parameter 'key' when calling getJsonDocument"
      );
    }

    let pathParams = {
      project_id: projectId,
      collection_id: collectionId,
      key: key,
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [
      'APIKeyCookie',
      'APIKeyHeader',
      'APIKeyQuery',
      'OAuth2PasswordBearer',
    ];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = JsonDocument;
    return this.apiClient.callApi(
      '/projects/{project_id}/json/{collection_id}/{key}',
      'GET',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      null
    );
  }

  /**
   * Get JSON document.
   * Returns a single JSON document.
   * @param {String} projectId A valid project ID.
   * @param {String} collectionId ID of the collection.
   * @param {String} key Key of the JSON document.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/JsonDocument}
   */
  getJsonDocument(projectId, collectionId, key) {
    return this.getJsonDocumentWithHttpInfo(projectId, collectionId, key).then(
      function (response_and_data) {
        return response_and_data.data;
      }
    );
  }

  /**
   * List JSON documents.
   * Lists all JSON documents for the given project collection.  If extensions are registered for this operation and no extension is selected via the `extension_id` parameter, the results from all extensions will be included in the returned list.  The `filter` parameter allows to filter the result documents based on a JSONPath expression ([JSON Path Specification](https://goessner.net/articles/JsonPath/)). The filter is only applied to filter documents in the list. It is not usable to extract specific properties.  # TODO: Add filter examples
   * @param {String} projectId A valid project ID.
   * @param {String} collectionId ID of the collection.
   * @param {Object} opts Optional parameters
   * @param {String} opts.filter JSON Path query used to filter the results.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/JsonDocument>} and HTTP response
   */
  listJsonDocumentsWithHttpInfo(projectId, collectionId, opts) {
    opts = opts || {};
    let postBody = null;
    // verify the required parameter 'projectId' is set
    if (projectId === undefined || projectId === null) {
      throw new Error(
        "Missing the required parameter 'projectId' when calling listJsonDocuments"
      );
    }
    // verify the required parameter 'collectionId' is set
    if (collectionId === undefined || collectionId === null) {
      throw new Error(
        "Missing the required parameter 'collectionId' when calling listJsonDocuments"
      );
    }

    let pathParams = {
      project_id: projectId,
      collection_id: collectionId,
    };
    let queryParams = {
      filter: opts['filter'],
    };
    let headerParams = {};
    let formParams = {};

    let authNames = [
      'APIKeyCookie',
      'APIKeyHeader',
      'APIKeyQuery',
      'OAuth2PasswordBearer',
    ];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = [JsonDocument];
    return this.apiClient.callApi(
      '/projects/{project_id}/json/{collection_id}',
      'GET',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      null
    );
  }

  /**
   * List JSON documents.
   * Lists all JSON documents for the given project collection.  If extensions are registered for this operation and no extension is selected via the `extension_id` parameter, the results from all extensions will be included in the returned list.  The `filter` parameter allows to filter the result documents based on a JSONPath expression ([JSON Path Specification](https://goessner.net/articles/JsonPath/)). The filter is only applied to filter documents in the list. It is not usable to extract specific properties.  # TODO: Add filter examples
   * @param {String} projectId A valid project ID.
   * @param {String} collectionId ID of the collection.
   * @param {Object} opts Optional parameters
   * @param {String} opts.filter JSON Path query used to filter the results.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/JsonDocument>}
   */
  listJsonDocuments(projectId, collectionId, opts) {
    return this.listJsonDocumentsWithHttpInfo(
      projectId,
      collectionId,
      opts
    ).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * Update a JSON document.
   * Updates a JSON document.  The update is applied on the existing document based on the JSON Merge Patch Standard [RFC7396](https://tools.ietf.org/html/rfc7396).
   * @param {String} projectId A valid project ID.
   * @param {String} collectionId ID of the collection.
   * @param {String} key Key of the JSON document.
   * @param {Object} body
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/JsonDocument} and HTTP response
   */
  updateJsonDocumentWithHttpInfo(projectId, collectionId, key, body) {
    let postBody = body;
    // verify the required parameter 'projectId' is set
    if (projectId === undefined || projectId === null) {
      throw new Error(
        "Missing the required parameter 'projectId' when calling updateJsonDocument"
      );
    }
    // verify the required parameter 'collectionId' is set
    if (collectionId === undefined || collectionId === null) {
      throw new Error(
        "Missing the required parameter 'collectionId' when calling updateJsonDocument"
      );
    }
    // verify the required parameter 'key' is set
    if (key === undefined || key === null) {
      throw new Error(
        "Missing the required parameter 'key' when calling updateJsonDocument"
      );
    }
    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error(
        "Missing the required parameter 'body' when calling updateJsonDocument"
      );
    }

    let pathParams = {
      project_id: projectId,
      collection_id: collectionId,
      key: key,
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [
      'APIKeyCookie',
      'APIKeyHeader',
      'APIKeyQuery',
      'OAuth2PasswordBearer',
    ];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = JsonDocument;
    return this.apiClient.callApi(
      '/projects/{project_id}/json/{collection_id}/{key}',
      'PATCH',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      null
    );
  }

  /**
   * Update a JSON document.
   * Updates a JSON document.  The update is applied on the existing document based on the JSON Merge Patch Standard [RFC7396](https://tools.ietf.org/html/rfc7396).
   * @param {String} projectId A valid project ID.
   * @param {String} collectionId ID of the collection.
   * @param {String} key Key of the JSON document.
   * @param {Object} body
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/JsonDocument}
   */
  updateJsonDocument(projectId, collectionId, key, body) {
    return this.updateJsonDocumentWithHttpInfo(
      projectId,
      collectionId,
      key,
      body
    ).then(function (response_and_data) {
      return response_and_data.data;
    });
  }
}
