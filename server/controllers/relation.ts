import * as dotenv from 'dotenv';
import * as jwt from 'jsonwebtoken';

import Relation from '../models/relation';
import BaseCtrl from './base';

export default class RelationCtrl extends BaseCtrl {
  model = Relation;

}