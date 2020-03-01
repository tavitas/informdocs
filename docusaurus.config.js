module.exports = {
  title: 'Inform Docs',
  tagline: 'Documentation for the SPREP Inform project',
  // url: 'https://tavitas.github.io',
  url: 'https://docs.pacific-data.sprep.org',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'tavitas', // Usually your GitHub org/user name.
  projectName: 'informdocs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'InformDocs',
      logo: {
        alt: 'My Site Logo',
        src: 'img/inform.png',
      },
      links: [
        { to: 'docs/inform/introduction', label: 'Docs', position: 'left' },
        {to: 'docs/dataportal/quickstart', label: 'Data Portal', position: 'left'},
        { to: 'docs/irt/intro', label: 'Indicator Reporting', position: 'left' },
        {
          href: 'https://pacific-data.sprep.org/search/type/dataset',
          label: 'Datasets',
          position: 'right',
        },
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/tavitas/informdocs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      // logo2,
      // logo: {
      //   alt: 'Inform Logo',
      //   src: 'img/inform/inform-logo.png'
      // },
      // links: [
      //   {
      //     title: 'Docs',
      //     items: [
      //       {
      //         label: 'Introduction',
      //         to: 'docs/inform/introduction',
      //       },
      //       {
      //         label: 'Second Doc',
      //         to: 'docs/doc2',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'Community',
      //     items: [
      //       {
      //         label: 'SPREP',
      //         href: 'https://www.sprep.org',
      //       },
      //       {
      //         label: 'Talanoa',
      //         href: 'https://talanoa.sprep.org',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'Social',
      //     items: [
      //       {
      //         label: 'Facebook',
      //         href: 'https://www.facebook.com/groups/470542680454530/',
      //       },
      //       {
      //         label: 'GitHub',
      //         href: 'https://github.com/tavitas/informdocs',
      //       },
      //     ],
      //   },
      // ],
      logo: {
        alt: 'GEF Logo',
        src: 'img/inform/sprep-logo.png'
      },
      copyright: `Copyright © ${new Date().getFullYear()} SPREP Inform Docs. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
