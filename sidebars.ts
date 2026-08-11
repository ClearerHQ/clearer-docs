import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'welcome',
    {
      type: 'category',
      label: 'Operating System',
      items: [
        'operating-system/constitution',
        'operating-system/product-principles',
        'operating-system/design-language',
        'operating-system/brand-bible',
      ],
    },
    {
      type: 'category',
      label: 'Product',
      items: [
        'product/product-requirements',
      ],
    },
  ],
};

export default sidebars;
