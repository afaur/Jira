var JiraClient = require('jira-connector');

var jira = new JiraClient( {
  host: 'vitals.atlassian.net',
  basic_auth: {
    username: process.env['jira_username'],
    password: process.env['jira_password']
  }
});

jira.search.search({
  jql: "project = 'Vitals Website' AND issuetype != Epic " +
    "AND resolution = Unresolved AND (Sprint = EMPTY "  +
    "OR Sprint not in (openSprints(), futureSprints()))"
}, function (error, issue) {
  console.log(issue);
});
