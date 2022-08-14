import * as bookItemActions from './bookItemActions';
import * as booksActions from './booksActions';
import * as searchActions from './searchActions';


export default {
    ...bookItemActions,
    ...booksActions,
    ...searchActions
}