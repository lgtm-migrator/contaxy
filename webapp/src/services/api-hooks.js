/* eslint-disable import/prefer-default-export */
import { useCallback, useEffect, useState } from 'react';

import { projectsApi, servicesApi } from './contaxy-api';

function useApiHook(apiCall, condition) {
  const [data, setData] = useState([]);
  const [reloadRequested, setReloadRequested] = useState(new Date().getTime());

  const requestReload = useCallback(() => {
    setReloadRequested(new Date().getTime());
  }, []);

  useEffect(() => {
    let isCanceled = false;

    const load = async () => {
      if (!condition) return;
      try {
        const result = await apiCall();
        if (isCanceled) {
          return;
        }
        setData(result);
      } catch (err) {
        // ignore
      }
    };

    load();

    return () => {
      isCanceled = true;
    };
  }, [condition, reloadRequested, apiCall]);

  return [data, requestReload];
}

export function useProjectMembers(projectId) {
  const apiCall = useCallback(async () => {
    try {
      const projectMembers = await projectsApi.listProjectMembers(projectId);
      return projectMembers;
    } catch (err) {
      return [];
    }
  }, [projectId]);

  const [data, reload] = useApiHook(apiCall, projectId);
  return [data, reload];
}

export function useServices(projectId) {
  const apiCall = useCallback(async () => {
    try {
      const services = await servicesApi.listServices(projectId);
      return services;
    } catch (err) {
      return [];
    }
  }, [projectId]);

  const [data, reload] = useApiHook(apiCall, projectId);
  return [data, reload];
}
