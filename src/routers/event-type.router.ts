import { Router } from 'express';
import { EventTypeController } from '../controllers/event-type.controller.js';
import { eventTypeCreateSchema, eventTypeUpdateSchema } from '../dtos/event-type.dto.js';
import { validateBody } from '../middlewares/validate.js';

const eventTypeRouter: Router = Router();

eventTypeRouter.get('/:id', EventTypeController.getById);
eventTypeRouter.post('/', validateBody(eventTypeCreateSchema), EventTypeController.create);
eventTypeRouter.put('/:id', validateBody(eventTypeUpdateSchema), EventTypeController.update);
eventTypeRouter.delete('/:id', EventTypeController.delete);