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
        'operating-system/brand-bible',
        'operating-system/design-language',
      ],
    },
  ],
};

export default sidebars;
