import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'welcome',
    {
      type: 'category',
      label: 'Operating System',
      items: [
        'operating-system/constitution',
        'operating-system/brand-bible',
        'operating-system/design-language',
        'operating-system/product-principles',
      ],
    },
  ],
};

export default sidebars;
