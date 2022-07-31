import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import product from './product';
import heroBanner from './heroBanner';
import hero from './hero';
import footerBanner from './footerBanner';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([hero, heroBanner, product, footerBanner]),
});
