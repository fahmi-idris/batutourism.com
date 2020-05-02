import fetch from 'node-fetch';

export const checkRoom = (roomId: string, from: string, to: string) => {
  return fetch(`${process.env.MASTER_SERVICE}/api/room/${roomId}/available`, {
    method: 'post',
    body: JSON.stringify({
      from,
      to,
    }),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((res) => res.json())
    .then((res) => res.data);
};

export const reserveRoom = (roomId: string, from: string, to: string) => {
  return fetch(`${process.env.MASTER_SERVICE}/api/room/${roomId}/book`, {
    method: 'post',
    body: JSON.stringify({
      from,
      to,
    }),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((res) => res.json())
    .then((res) => res.data);
};
