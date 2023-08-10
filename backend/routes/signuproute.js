
import { Router } from 'express';

const signuproute = Router();

signuproute.get('/', (request, response) => {
  return response.json("OK");
});

export default signuproute;