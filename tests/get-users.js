import http from 'k6/http';
import { check } from 'k6';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';


export const options = {
  vus: 10,
  duration: '10s',
};

export default function () {
  const res = http.get('https://jsonplaceholder.typicode.com/users');
  
  check(res, {
    'status é 200': (r) => r.status === 200,
    'lista de usuários não está vazia' : (r) => r.json().length > 0,
  });
}

export function handleSummary(data) {
  return {
    'results/get-users.html': htmlReport(data),
  };
}