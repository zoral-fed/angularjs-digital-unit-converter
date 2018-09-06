import * as prettysize from 'prettysize';
import * as angular from 'angular';

export default () => {
  return (input: any) => {
    return prettysize(input);
  };
};
