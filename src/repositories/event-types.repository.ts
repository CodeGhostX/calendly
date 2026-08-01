import { prisma } from '../config/database.js';
import type { eventTypeCreateDto, eventTypeUpdateDto } from '../dtos/event-type.dto.js';

export default class EventTypeRepository {
  static async getByHostId(hostId: number) {
    const eventTypes = await prisma.eventType.findMany({
      where: { hostId },
      orderBy: {
        createdAt: 'desc'
      }
    });
    return eventTypes;
  }

  static async getById(id: number) {
    const eventType = await prisma.eventType.findUnique({
      where: { id }
    })
    return eventType;
  }

  static async create(data: eventTypeCreateDto & { slug: string }) {
    const eventType = await prisma.eventType.create({
      data
    });
    return eventType;
  }

  static async update(id: number, data: eventTypeUpdateDto) {
    const eventType = prisma.eventType.update({
      where: { id },
      data
    })
    return eventType;
  }

  static async delete(id: number) {
    const eventType = await prisma.eventType.delete({
      where: { id },
    })
    return eventType;
  }
}