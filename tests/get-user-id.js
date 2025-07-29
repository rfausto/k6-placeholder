import http from 'k6/http';
import { check } from 'k6';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';


export const options = {
  vus: 10,
  duration: '10s',
};

export default function () {
  const res = http.get('https://jsonplaceholder.typicode.com/users/1');
  check(res, {
    'status é 200': (r) => r.status === 200,
    'resposta contém ID 1': (r) => r.json('id') === 1
  });
}

export function handleSummary(data) {
  return {
    'results/get-user-id.html': htmlReport(data),
  };
}