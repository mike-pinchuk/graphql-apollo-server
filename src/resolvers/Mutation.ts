import { LinkService } from '../services/link.service';
import { LinkInterface } from '../services/link.service';

class Mutation {
  linkService: LinkService = new LinkService();

  public post = (parent, args): Promise<LinkInterface> => {
    return this.linkService.createLink(args.url, args.description, args.userID);
  };

  public updateLink = (parent, args): Promise<LinkInterface> => {
    return this.linkService.updateLink(args.id, args.url, args.description);
  };

  public deleteLink = (parent, args): Promise<LinkInterface> => {
    return this.linkService.deleteLink(args.id);
  };
}

const mutation = new Mutation();
export default {
  post: mutation.post,
  updateLink: mutation.updateLink,
  deleteLink: mutation.deleteLink,
};

// this is an example with instance of Mutation class
