import { setupWorker } from 'msw';
import handlers from './handlers';

const workerSetup = setupWorker(...handlers);

export default workerSetup;
