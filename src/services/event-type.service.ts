import type { eventTypeCreateDto, eventTypeUpdateDto } from "../dtos/event-type.dto.js";
import EventTypeRepository from "../repositories/event-types.repository.js";
import { notFound } from "../utils/api-error.js";
import { createUniqueSlug } from "../utils/helper.js";

export class EventTypeService {
  static async getById(id: number) {
    const eventType = await EventTypeRepository.getById(id);
    if (!eventType) {
      throw notFound('Event not found');
    }
    return eventType;
  }
  
  static async create(data: eventTypeCreateDto) {
    const slugPassed = data.slug ? data.slug : createUniqueSlug(data.title);
    const eventType = await EventTypeRepository.create({ ...data, slug: slugPassed });
    return eventType;
  }

  static async update(id: number, data: eventTypeUpdateDto) {
    const existingEventType = EventTypeRepository.getById(id);
    if (!existingEventType) {
      throw notFound('Event not found');
    }
    return EventTypeRepository.update(id, data);
  }

  static async delete(id: number) {
    const existingEventType = await EventTypeRepository.getById(id);
    if (!existingEventType) {
      throw notFound('Event not found');
    }
    return EventTypeRepository.delete(id);
  }
}