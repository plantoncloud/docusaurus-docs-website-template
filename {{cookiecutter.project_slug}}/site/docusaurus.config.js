/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'Docs',
    tagline: '{{cookiecutter.company_name}} Docs',
    url: 'http://docs/', //this is used in the algolia docsearch indexing
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: '{{cookiecutter.company_name}}', // Usually your GitHub org/user name.
    projectName: 'docs', // Usually your repo name.
    themeConfig: {
        colorMode: {
            defaultMode: 'light',
            disableSwitch: false
        },
        algolia: {
            apiKey: '{{cookiecutter.algolia_api_key}}',
            appId: 'NE3HND6FSC',
            indexName: '{{cookiecutter.algolia_index_name}}',
        },
        navbar: {
            title: '',
            style: 'dark',
            logo: {
                alt: 'logo',
                src: 'img/logo.png',
            },
            items: [],
        },
        footer: {
            style: 'dark',
            links: [],
            copyright: `Copyright © ${new Date().getFullYear()} {{cookiecutter.company_name}}.`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    routeBasePath: '/',
                    remarkPlugins: [[require('mdx-mermaid'), {mermaid: {theme: 'dark'}}]],
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};
