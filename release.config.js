module.exports = {
  "branches": [
    { "name": "main" },
    { "name": "beta", "channel": "beta", "prerelease": "beta" },
  ],
  "plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/npm",
      {
        "npmPublish": false,
      }
    ],
    [
      "@semantic-release/git",
      {
        "assets": ["package.json"],
      }
    ],
    "@semantic-release/github",
  ]
}