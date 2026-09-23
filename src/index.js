import Resolver from "@forge/resolver";

const resolver = new Resolver();

resolver.define("getLinks", async () => {
  return [
    {
      name: "FAQ",
      url: "https://micronav-best.atlassian.net/servicedesk/customer/article/5505028",
    },
    {
      name: "Release Notes",
      url: "https://micronav-best.atlassian.net/servicedesk/customer/article/5341865",
    },
    {
      name: "Tips & Tricks",
      url: "https://micronav-best.atlassian.net/servicedesk/customer/article/5505297",
    },
    {
      name: "BUG 2026",
      url: "https://micronav-best.atlassian.net/wiki/spaces/HELP/pages/1292926979/BUG+2026",
    },
    {
      name: "Training Syllabus",
      url: "https://micronav-best.atlassian.net/servicedesk/customer/portal/23/article/193429505",
    },
    {
      name: "Scheduled Courses",
      url: "https://micronav-best.atlassian.net/servicedesk/customer/portal/23/article/193429515",
    },
  ];
});

export const handler = resolver.getDefinitions();