/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const sidebars = {
  docs: [
    {
      type: 'category',
      label: 'Inform',
      link: {type: 'doc', id: 'inform/index'},
      items: [
        "inform/introduction",
        "inform/tools",
        "inform/processes"
      ],
    },
    {
      "Data Portal": [
        "dataportal/quickstart",
        "dataportal/faq",
        "dataportal/goodpractices",
        {
          type: "category",
          label: "Administration",
          items: [
            "dataportal/accountsetup",
            "dataportal/sitemanagers",
            "dataportal/adminmenu",
            "dataportal/managingusers",
          ],
        },
      ],
    },
    {
      "Indicator Reporting Tool": [
        "irt/intro",
        "irt/define_indicators",
        "irt/obligations",
        "irt/update_indicators",
        "irt/reports",
      ],
    },
    {
      "Advanced": [
        "advanced/setup",
        // 'advanced/docker'
        // 'advanced/localdev',
      ],
    }        
  ],
};

module.exports = sidebars;