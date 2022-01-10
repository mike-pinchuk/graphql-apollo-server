import { LinkService } from '../services/link.service';
import { LinkInterface } from '../services/link.service';

const linkService: LinkService = new LinkService();

class Query {
  public static info = () => {
    return linkService.getInfo();
  };

  public static feed = async (): Promise<LinkInterface[]> => {
    const re = linkService.getFeed();
    console.log(await re);
    return re;
  };
}

export default Query;

// this is an expample with static methods
