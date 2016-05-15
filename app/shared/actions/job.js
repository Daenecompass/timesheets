export const START_JOB = 'START_JOB';
export const STOP_JOB = 'STOP_JOB';
export const REMOVE_JOB = 'REMOVE_JOB';


export function startJob(projectId, time = new Date()) {
  return {
    type: START_JOB,
    payload: {
      projectId,
      time,
    },
    meta: {
      scope: 'main',
    },
  };
}

export function stopJob(id, time = new Date()) {
  return {
    type: STOP_JOB,
    payload: {
      id,
      time,
    },
    meta: {
      scope: 'main',
    },
  };
}

export function removeJob(id) {
  return {
    type: REMOVE_JOB,
    payload: {
      id,
    },
    meta: {
      scope: 'main',
    },
  };
}
