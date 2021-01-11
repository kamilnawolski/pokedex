import axios from 'axios';
import { globalVariables } from './theme/GlobalVariables';

export default axios.create({ baseURL: globalVariables.apiUrl })