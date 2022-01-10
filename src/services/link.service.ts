import { LinkEntity } from '../db/links.entity';
import { getRepository } from 'typeorm';

export interface LinkInterface {
  id?: number;
  url: string;
  description: string;
  userId: number;
}

export class LinkService {
  getInfo(): string {
    return `It's fucking work!`;
  }

  async getFeed(): Promise<Array<LinkInterface>> {
    return await getRepository(LinkEntity).find();
  }

  async createLink(
    url: string,
    description: string,
    userId: number,
  ): Promise<LinkInterface> {
    return await getRepository(LinkEntity).save({
      url,
      description,
      userId,
    });
  }

  async updateLink(
    id: number,
    url: string,
    description: string,
  ): Promise<LinkInterface> {
    await getRepository(LinkEntity).update(id, { url, description });
    return await getRepository(LinkEntity).findOne(id);
  }

  async deleteLink(id: number): Promise<LinkInterface> {
    const linkThatWillBeDeleted = getRepository(LinkEntity).findOne(id);
    await getRepository(LinkEntity).delete(id);
    return linkThatWillBeDeleted;
  }
}
