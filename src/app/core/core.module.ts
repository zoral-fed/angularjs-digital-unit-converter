import * as angular from 'angular';
import DigitalUnitConverter from './core.filter';

export const moduleName =
  angular.module('z.filter-digital-unit.core', [])
  .filter('zDigitalUnitConverter', DigitalUnitConverter)
  .name;
