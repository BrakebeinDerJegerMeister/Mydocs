import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Mydocs/blog',
    component: ComponentCreator('/Mydocs/blog', '578'),
    exact: true
  },
  {
    path: '/Mydocs/blog/archive',
    component: ComponentCreator('/Mydocs/blog/archive', '5d2'),
    exact: true
  },
  {
    path: '/Mydocs/blog/first-blog-post',
    component: ComponentCreator('/Mydocs/blog/first-blog-post', 'f93'),
    exact: true
  },
  {
    path: '/Mydocs/blog/long-blog-post',
    component: ComponentCreator('/Mydocs/blog/long-blog-post', 'afa'),
    exact: true
  },
  {
    path: '/Mydocs/blog/mdx-blog-post',
    component: ComponentCreator('/Mydocs/blog/mdx-blog-post', '4f9'),
    exact: true
  },
  {
    path: '/Mydocs/blog/tags',
    component: ComponentCreator('/Mydocs/blog/tags', 'bb3'),
    exact: true
  },
  {
    path: '/Mydocs/blog/tags/docusaurus',
    component: ComponentCreator('/Mydocs/blog/tags/docusaurus', '2a3'),
    exact: true
  },
  {
    path: '/Mydocs/blog/tags/facebook',
    component: ComponentCreator('/Mydocs/blog/tags/facebook', 'd99'),
    exact: true
  },
  {
    path: '/Mydocs/blog/tags/hello',
    component: ComponentCreator('/Mydocs/blog/tags/hello', '4fc'),
    exact: true
  },
  {
    path: '/Mydocs/blog/tags/hola',
    component: ComponentCreator('/Mydocs/blog/tags/hola', 'b56'),
    exact: true
  },
  {
    path: '/Mydocs/blog/welcome',
    component: ComponentCreator('/Mydocs/blog/welcome', 'e4e'),
    exact: true
  },
  {
    path: '/Mydocs/markdown-page',
    component: ComponentCreator('/Mydocs/markdown-page', 'd06'),
    exact: true
  },
  {
    path: '/Mydocs/docs',
    component: ComponentCreator('/Mydocs/docs', 'c79'),
    routes: [
      {
        path: '/Mydocs/docs',
        component: ComponentCreator('/Mydocs/docs', '94c'),
        routes: [
          {
            path: '/Mydocs/docs',
            component: ComponentCreator('/Mydocs/docs', '9d5'),
            routes: [
              {
                path: '/Mydocs/docs/category/tutorial---basics',
                component: ComponentCreator('/Mydocs/docs/category/tutorial---basics', '649'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Mydocs/docs/category/tutorial---extras',
                component: ComponentCreator('/Mydocs/docs/category/tutorial---extras', '1b7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Mydocs/docs/intro',
                component: ComponentCreator('/Mydocs/docs/intro', '58d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Mydocs/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/Mydocs/docs/tutorial-basics/congratulations', '54f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Mydocs/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/Mydocs/docs/tutorial-basics/create-a-blog-post', 'a3b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Mydocs/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/Mydocs/docs/tutorial-basics/create-a-document', 'f81'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Mydocs/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/Mydocs/docs/tutorial-basics/create-a-page', '31d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Mydocs/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/Mydocs/docs/tutorial-basics/deploy-your-site', '5b3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Mydocs/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/Mydocs/docs/tutorial-basics/markdown-features', 'f3e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Mydocs/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/Mydocs/docs/tutorial-extras/manage-docs-versions', '341'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Mydocs/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/Mydocs/docs/tutorial-extras/translate-your-site', 'efe'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/Mydocs/',
    component: ComponentCreator('/Mydocs/', '7ee'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
