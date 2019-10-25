// SAGA index to yeld services
import { watchGetFavorites } from './favorites';

import { watchGetPosts, watchPostPost, watchDeletePost, watchPutLikesPost } from './posts';
export default function* () {
  yield [
			watchGetPosts(),
			watchPostPost(),
			watchDeletePost(),
			watchPutLikesPost(),
			watchGetFavorites(),
		   
       ]
  console.log('root saga yield function call')
}